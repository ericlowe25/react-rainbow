// import logo from './logo.svg';
import React, {useState} from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';
import './App.css';

function App(){
    let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
    let colorMap = colors.map((color,i)=> {
      return (
      <ColorBlock key={i} color={color} />
        )
    })
    const checkColor = (newColor) =>  {
      const c = new Option().style;
      c.color = newColor
      return c.color !== ""
    }
  
    const addColor = (newColor) => {
      if(checkColor(newColor)){
        setColors([...colors, newColor])
      }
    }
  
    return (
      <div className="App">
        <div className="colorCards">
          {colorMap}  
        </div>
        <ColorForm addColor={addColor} />
      </div>
    );
  }
  
  export default App;

// function App() {
//   return (
//     <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
//     </div>
//   );
// }


