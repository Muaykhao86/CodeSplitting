import React from 'react'
import logo from '../logo.svg'

const Page2 = ({onRouteChange}) => 
    <div className="App page2">
    <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
    </header>
        <button className="button" onClick={() => onRouteChange('page1')}>Page1</button>
        <button className="button disabled">Page2</button>
        <button className="button" onClick={() => onRouteChange('page3')}>Page3</button>
    </div>

export default Page2;