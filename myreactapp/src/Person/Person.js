import React from 'react'
import Radium from 'radium'
import  './Person.css'

const person = (props) => {
    const style={
        '@media (min-width:500px)' :{
            width:'450px'
        }
    };

    return (<div className='Person' style={style}>
        <p onClick={props.click}> I'm person with name {props.name} and age {props.age}</p>
        <input type={Text} onChange={props.change} value={props.name}/>
    <p>{props.children}</p>
    </div>);
}

export default Radium(person);