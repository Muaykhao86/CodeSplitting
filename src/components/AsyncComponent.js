import React, { Component } from 'react';

// Code Splitting Part 3 - Creating a higher order components // A component that returns another component//


export default function asyncComponent(importComponent){
  class AsyncComponent extends Component {
      constructor(props){
          super(props);
          this.state = {
              component: null,
          }
      }

    //   Using async Await
      async componentDidMount(){
const {default: component} = await importComponent(); //Same as component: Page2.default //Page2 is eg of importComponent()
     this.setState({
         component: component,
     }) }

     render(){
       const Component = this.state.component;
       return Component ? <Component {...this.props}/>: null;//If we have a component that trickles in then return it
     }
  }  

  return AsyncComponent;//Because we have a function we need to return something
}