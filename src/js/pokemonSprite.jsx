import React from 'react';

class pokemonSprite extends React.Component {
  getRandom() {
    return Math.trunc(Math.random() * (84 - 1) + 1);
  }
  render(){
    console.log(this.getRandom());
    return (
      <h1> hellow </h1>
    );
  }
}

export default pokemonSprite;
