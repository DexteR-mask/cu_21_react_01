import React from 'react'
import './Person.css'

const Person = (props) => {
  console.log(`[Person.js] rendering...`)
  return (
    <div className='parent-div'>
      <div className="container">
        <div className="my-div">
          <p className='lead'>My name is {props.name} and I am {props.age} years old!</p>
          <i onClick={props.deleted} className="fa-solid fa-x"></i>
        </div>
      </div>
      <div className="container">
        <input className='form-control' type="text" placeholder='enter the name...' />
      </div>
    </div>
    

  )
}

Person.defaultProps = {
    name: 'Default Name',
    age: '0'
}

export default Person