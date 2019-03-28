import React, { Component } from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Page1 from './components/Page1';
    //      NO CODE SPLITTING     //
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';
    //      CODE SPLITTING Part 3     //
// import AsyncComponent from './components/AsyncComponent';
    //      CODE SPLITTING Part 4 => React.lazy   // 
const LazyPage2 = React.lazy(() => import('./components/Page2'));
const LazyPage3 = React.lazy(() => import('./components/Page3'));

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'page1',
      component: null,//its recieving a object not a string so should be null not ''
    }
  }

  onRouteChange = (route) => {
    //      NO CODE SPLITTING   Part 1  //    CODE SPLITTING Part 3     //    CODE SPLITTING Part 4 => React Lazy
    this.setState({route: route})
    //      WITH CODE SPLITTING   Part 2  //
  //   if(route === 'page1'){
  //     this.setState({route})//same as ({route: route}) //Page1 is our default so is imported first
  //   }else if(route === 'page2'){
  //     import('./components/Page2').then((Page2) => {//import() is only available through webpack in create-react-app   
  //       console.log(Page2)
  //       this.setState({route: route, component: Page2.default})//have to use default as we export it as default 
  //     })
  //   }else if(route === 'page3'){
  //     import('./components/Page3').then((y) => {//Labeled as y just to prove it can be anything // Was labeled Page3
  //       console.log(y)
  //       this.setState({route: route, component: y.default})//have to use default as we export it as default 
  //     })
  // }
}

  render() {
    //      NO CODE SPLITTING   Part 1  //
    // switch (this.state.route){
    //  case 'page1': 
    //   return <Page1 onRouteChange={this.onRouteChange}/>
    //  case 'page2':
    //   return <Page2 onRouteChange={this.onRouteChange}/>
    //  case 'page3':
    //   return <Page3 onRouteChange={this.onRouteChange}/>
    // default:
    //   return <Page1 onRouteChange={this.onRouteChange}/>

    //      WITH CODE SPLITTING  Part 2   //

    // if(this.state.route === 'page1'){
    //   return <Page1 onRouteChange={this.onRouteChange}/>
    // }else{
    //   return <this.state.component onRouteChange={this.onRouteChange}/>//Nifty trick to create a new component for code splitting but not great to read
    // }

    //    WITH CODE SPLITTING Part 3      //  Could use if statements but i like the layout of Switch

    // switch (this.state.route){
    //   case 'page1': 
    //    return <Page1 onRouteChange={this.onRouteChange}/>
    //   case 'page2':
    //    const AsyncPage2 = AsyncComponent(() => import('./components/Page2'));//AsyncComponent is a function we created which takes a imported component as a pararmeter and renders + returns a Component.default from state
    //     return <AsyncPage2 onRouteChange={this.onRouteChange}/>
    //   case 'page3':
    //    const AsyncPage3 = AsyncComponent(() => import('./components/Page3'));
    //     return <AsyncPage3 onRouteChange={this.onRouteChange}/>
    //   default:
    //     return <Page1 onRouteChange={this.onRouteChange}/>

    // }

      //    WITH CODE SPLITTING Part 4 => React.lazy    //

      if(this.state.route === 'page1'){
        return (
          <div>
            <ErrorBoundary>
              <Page1 onRouteChange={this.onRouteChange}/>
            </ErrorBoundary>
          </div>
        )
      }else if(this.state.route === 'page2'){
        return (
            <div className="">
              <ErrorBoundary>
                <React.Suspense fallback={<div>LOADING PAGE PLEASE WAIT...</div>}>
                  <LazyPage2 onRouteChange={this.onRouteChange}/>
                </React.Suspense>
              </ErrorBoundary>
            </div>
        )}else if(this.state.route === 'page3'){
          return (
            <div className="">
              <ErrorBoundary>
                <React.Suspense fallback={<div>LOADING PAGE PLEASE WAIT...</div>}>
                  <LazyPage3 onRouteChange={this.onRouteChange}/>
                </React.Suspense>
              </ErrorBoundary>
            </div>
          )}
  }
}

export default App;

// https://stackoverflow.com/questions/10808109/script-tag-async-defer