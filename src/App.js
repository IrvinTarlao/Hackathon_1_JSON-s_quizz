import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Answer from './components/Answer.js';
import { randomOf } from './components/helpers';
import GetQuestions from './components/GetQuestions';
import Start from './components/Start.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: "",
      answer: true,
      showModal: true,  
        
    };
    console.log(this.state.showModal)  
  }

  componentDidMount() {
    this.getMovie();
  }

  startGame = () => {
    this.setState({showModal: false})
  }
  
  getMovie = () => {
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
      .then(response => response.data)
      .then(data => {
        console.log(data)
        this.setState({
          movies: data.movies[randomOf(82)]
        });
      });
  };

  render() {
    return (
      <div className="App">
        <GetQuestions movie={this.state.movies} />
        <Answer movies={this.state.movies}/>
        <Start className="modal" show={this.state.showModal} startGame={this.startGame}/>
      </div>
    );
  }
}

export default App;


