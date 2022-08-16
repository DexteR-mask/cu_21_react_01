import { Component } from 'react'
import Person from './Person/Person';

class App extends Component {
  // JavaScript
  state = {
    persons: [
      {name: 'Person One', age: '25'},
      {name: 'Person Two', age: '24'},
      {name: 'Person Three', age: '30'},
      {name: 'Person Four', age: '27'},
    ]
  } 

  onNameChangeHanler = () => {
    // this.state.persons[0].name = 'My Person'
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1>Person Management App</h1> <hr />
        </div>
        <div className='container'>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />

            <hr />

            <button onClick={this.onNameChangeHanler} className='btn btn-danger'>Change Name</button>
        </div>
      </div>
    )
  }
} 
export default App;

// import './App.css';
// import Button from './Button/Button';

// const App = () => {
//   // JavaScript
//   const onClickHanlder = (event) => {
//     console.log(event)
//     console.log('Button - 1 was clicked!')
//   }

//   const numbers = [1, 2, 3, 4, 5, 6]

//   return (
//     <div className="container">
//         <h1>Welcome to React!</h1> <hr />
//         <Button clicked={ (e) => onClickHanlder(e) } color="primary" text="Button - 1"></Button>
//         {/* <Button clicked={() => console.log('Works!')} color="primary" text="Button - 1"></Button> */}
//         <Button numbers={numbers} color="success"></Button>
//         <Button color="danger" text="Button - 3"></Button>
//         <Button color="warning" text="Button - 4"></Button>
//         <Button color="info"></Button>
//     </div>
//   );
// }

// export default App;
