import React from 'react'
import logo from '../logo.svg'

const Page1 = ({onRouteChange}) => 
    <div className="App page1">
    <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
    </header>
        <button className="button disabled">Page1</button>
        <button className="button"onClick={() => onRouteChange('page2')}>Page2</button>
        <button className="button"onClick={() => onRouteChange('page3')}>Page3</button>
    </div>

export default Page1;