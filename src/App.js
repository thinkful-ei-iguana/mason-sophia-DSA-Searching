import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      searchTerm: 0,
      count: 0
    };
  }
  //onChange
  handleSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  //take in a long string of data and convert them into an array

  linearSearch = (array, value) => {
    console.log('linear function activated');
    let i = 0;
    for (i = 0; i < array.length; i++) {
      if (array[i] === parseInt(value)) {
        this.setState({ count: i + 1 })
        return
      }
    }
    return this.setState({ count: i });
  };

  binarySearch = (array, value, start = 0, end = array.length - 1, count = 0) => {
    if (start > end) {
      this.setState({ count: count });
      return;
    }

    let index = Math.floor((start + end) / 2);
    let item = array[index];

    if (item === value) {

      this.setState({
        count: count
      });
      return;
    }
    else if (item < value) {

      count++
      return this.binarySearch(array, value, index + 1, end, count);
    }
    else if (item > value) {

      count++
      return this.binarySearch(array, value, start, index - 1, count);
    }
  };

  //sort array first then preserve in state and then 

  render() {
    return (
      <div className="App">


        <input onChange={this.handleSearchTerm} type='text' placeholder='Add Number to Search' id='number' name='number'></input>
        <button onClick={() => this.linearSearch(this.state.searchData, this.state.searchTerm)}>Linear Search</button>
        <button onClick={() => this.binarySearch(this.state.searchData.slice().sort((a, b) => a - b), parseInt(this.state.searchTerm))}>Binary Search</button>

        <p>Your search ran {this.state.count} times until {this.state.searchTerm} was found!</p>
      </div>
    )
  }
}


