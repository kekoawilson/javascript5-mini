import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this)
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
      .then(res => {
        console.log(res);
        this.setState({
          cars: res.data
        })
      })
  }

  render() { 
    const list = this.state.cars.map( car => {
      return <p>{car.make}</p>
    })
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {list}
      </div>
    );
  }
}

export default App;
