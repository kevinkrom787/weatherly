import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      userInput: ''
    }
    this.updateLocation = this.updateLocation.bind(this);
  }
  
  updateLocation(event) {
    this.setState({
      userInput: event.target.value,
    })
    
  }

  render() {
    return (
      <form className='submitForm' onSubmit={(event) => event.preventDefault()}>
        <h1 className='yourLocation'>Check The Weather</h1>
        <input
        className='weatherInput'
        placeholder='Enter your location'
        type='text'
        value={this.state.userInput} 
        onChange={this.updateLocation}/> 
        <input
        className='submitButton'
        type="submit" 
        value="Submit"
        onClick={() => this.props.fetchLocationData(this.state.userInput)}
        />
      </form>
  )
  }
}

export default Search;