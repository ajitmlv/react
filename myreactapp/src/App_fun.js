import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const app = props =>{
 const [initState, updateState] = useState({
    per: [
        {name: "sonaa..", age: "24"},
        {name: "ajitt..", age: "34"},
        {name: "amishh..", age: "2"}
      ],
    othreState : 'some other state'

  });

  const updateHandler=() => {
    updateState({
        per: [
          {name: "Sona", age: "30"},
          {name: "Ajit", age: "31"},
          {name: "Amish", age: "2"}
        ]
    });
      
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        Welcome to React world.
     </p>
     <button onClick={updateHandler}>switchName</button>
     <Person name={initState.per[0].name} age={initState.per[0].age}/>
     <Person name={initState.per[1].name} age={initState.per[1].age}>ok its working</Person>
     <Person name={initState.per[2].name} age={initState.per[2].age}/>
     
   </div>

 );
 //return React.createElement('div',{className:'App'},React.createElement('h1',{className : 'App-intro'},'Welcome!!!Sona'));

}

export default app;