import React, { Component } from 'react';

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
      <form onSubmit={(event) => event.preventDefault()}>
        <h1>Your Location</h1>
        <input 
        type="text" 
        value={this.state.userInput}
        onChange={this.updateLocation}/>
        <input
         type="submit" 
         value="Submit"
         onClick={(event) => this.props.fetchLocationData(this.state.userInput)}
         />
      </form>
  )
  }
}

export default Search;