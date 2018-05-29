import React from 'react';

const Search = (event) => {

    console.log(this);
  return (
    <form>
      {/*event.preventDefault()*/}
      <h1>Your Location</h1>
      <input type="text" name="userLocation"/>
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default Search;