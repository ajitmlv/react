import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'


class App extends Component {

  state = {
    per: [
      {id: "p1" ,name: "sonaa", age: "24"},
      {id: "p2" ,name: "ajitt", age: "34"},
      {id: "p3" ,name: "amishh", age: "2"}
    ],
    togggle: false
  }

  switchHandler = (newName) =>{
    this.setState({
      per: [
        {name: "Sona", age: "30"},
        {name: newName, age: "31"},
        {name: "Amish", age: "2"}
      ]
    })
  }
  toggleHnadler = ()=>{
    const doesShow = this.state.togggle;
    //console.log(">>>>>"+doesShow);
    this.setState({togggle : !doesShow });
  }

  changeNameHandler = (event, id) =>{
    const prsCopy = [...this.state.per];
    const personIndex = prsCopy.findIndex(person => person.id === id);
    //const person = {...this.state.per[personIndex]};
    prsCopy[personIndex].name = event.target.value;
    //person.name = event.target.value;
    //prsCopy[personIndex] = person;

      this.setState({
        per: prsCopy
      }

      );
  }

  deletePersonsHandler =(index)=>{
    const persons = this.state.per;
    persons.splice(index,1);
    this.setState({per:persons});
  }
  render() {
    const style= {
      backgroundColor: 'Green',
      color:'white',
      border : '1px solid blue',
      cursor : 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color:'black'
      }
    }
    let per = null;
    if(this.state.togggle){
      //console.log("inside main>>"+ this.state.togggle);
      per = (
        <div>
          {this.state.per.map((pers, indx) => {
           return <Person name={pers.name}
                    age={pers.age}
                    click={()=> this.deletePersonsHandler(indx)}
                    change={(event) => this.changeNameHandler(event, pers.id)}/>
          })}
             
          </div> 
      );
      style.background = 'red';
      style[':hover']={
        backgroundColor: 'salmon',
        color:'black'
      };
    }

    const classes = [];
    if(this.state.per.length <=2){
      classes.push('red');
    }
    if(this.state.per.length <=1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
       <div className="App">
         <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>Welcome to React</h2>
         </div>
         <p className={classes.join(' ')}>
           Welcome to React world.
        </p>
        <button style={style} onClick={this.toggleHnadler}>switchName</button>
        {per}
        
      </div>
      </StyleRoot>

    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',{className : 'App-intro'},'Welcome!!!Sona'));
  }
}

export default Radium(App);
