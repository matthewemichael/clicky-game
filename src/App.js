import React, { Component } from 'react';
import Container from "./components/Container";
import CharCard from "./components/CharCard";
import characters from "./characters.json";
import './App.css';

class App extends Component {

  state = {
    characters
  }

  render() {
    return (
      <Container>
        {this.state.characters.map(char => (
          <CharCard
            key={char.id}
            name={char.name}
            image={char.image}
          />
        ))}
      </Container>


    )
  }
}

export default App;