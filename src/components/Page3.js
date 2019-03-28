import React from 'react'
import logo from '../logo.svg'

const Page3 = ({onRouteChange}) => 
    <div className="App page3">
    <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
    </header>
        <button className="button" onClick={() => onRouteChange('page1')}>Page1</button>
        <button className="button" onClick={() => onRouteChange('page2')}>Page2</button>
        <button className=" button disabled">Page3</button>
    </div>

export default Page3;