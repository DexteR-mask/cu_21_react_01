import React from 'react'

const Person = (props) => {
  return (
    <p className='lead'>My name is {props.name} and I am {props.age} years old!</p>
  )
}

Person.defaultProps = {
    name: 'Default Name',
    age: '0'
}

export default Person