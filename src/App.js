import React, { Component } from 'react';
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import CharCard from "./components/CharCard";
import Jumbotron from "./components/Jumbotron";
import characters from "./characters.json";
import './App.css';

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    characters,
    count: 0,
    topScore: 0,
    initialState: [0,0,0,0,0,0,0,0,0,0,0,0],
    message: "Click on a character to start!"
  };
  

  shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  }

  clickImage = id => {
    this.countIncrement(id);
    this.shuffle(characters);
    this.setState({ characters });
    this.setState({
      message: "Don't click the same character twice!"
    });
  };

  countIncrement = id => {
    this.setState(state => {
      const initialState = state.initialState.map((item, j) => {
        if (j === id) {
          if ( item < 1 ) {
          this.setState({ count: this.state.count + 1 });
          if (this.state.count >= this.state.topScore) {
          this.setState({ topScore: this.state.topScore + 1 });
          }
          return item + 1;
          }
          else {
            this.setState({ count: 0 });
            this.setState({ initialState: [0,0,0,0,0,0,0,0,0,0,0,0] });
            this.setState({
              isPlaying: false,
              message: "Click on a character to start!"
            });
            return item;
          }
        } else {
          return item;
        }
      });
      
      return {
        initialState,
      };
    });
  }

  render() {
    return (
      <Container>
        <Navbar message={this.state.message} count={this.state.count} topScore={this.state.topScore}/>
        <Title />
        <Jumbotron >
        {this.state.characters.map(char => (
          <CharCard
            clickImage={this.clickImage}
            id={char.id}
            key={char.id}
            name={char.name}
            image={char.image}
          />
        ))}
        </Jumbotron>
      </Container>
    )
  }
}

export default App;