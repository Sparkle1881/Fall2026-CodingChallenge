import './App.css';
import {Image} from "./components/Image";
import path from './assets/testimggalaxy.jpg';
import {Ui} from "./components/ui/Ui";

function App() {
  return (
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
