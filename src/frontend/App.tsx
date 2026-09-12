import React from 'react';
import logo from '../logo.svg';
import './App.css';
import {Image} from "./components/Image";
import path from './assets/testimggalaxy.jpg';
import {Ui} from "./components/ui/Ui";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hi <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      <>
        <div id="test">
            <Ui></Ui>
            <div id="imageBox">
                <Image image={{source:"2",tags:["galaxy","space"],id:"0",description:"galaxy test image",title:"Galaxy",src:path}}></Image>
                <Image image={{source:"2",tags:["galaxy","space"],id:"0",description:"galaxy test image",title:"Galaxy",src:path}}></Image>
                <Image image={{source:"2",tags:["galaxy","space"],id:"0",description:"galaxy test image",title:"Galaxy",src:path}}></Image>
                <Image image={{source:"2",tags:["galaxy","space"],id:"0",description:"galaxy test image",title:"Galaxy",src:path}}></Image>
                <Image image={{source:"2",tags:["galaxy","space"],id:"0",description:"galaxy test image",title:"Galaxy",src:path}}></Image>
                <Image image={{source:"2",tags:["galaxy","space"],id:"0",description:"galaxy test image",title:"Galaxy",src:path}}></Image>
                <Image image={{source:"2",tags:["galaxy","space"],id:"0",description:"galaxy test image",title:"Galaxy",src:path}}></Image>
                <Image image={{source:"2",tags:["galaxy","space"],id:"0",description:"galaxy test image",title:"Galaxy",src:path}}></Image>
                <Image image={{source:"2",tags:["galaxy","space"],id:"0",description:"galaxy test image",title:"Galaxy",src:path}}></Image>
            </div>
        </div>
      </>
  );
}

export default App;
