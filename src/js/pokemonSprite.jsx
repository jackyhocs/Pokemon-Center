import React from 'react';
import spriteStyles from '../css/sprite.css'

class PokemonSprite extends React.Component {
  getRandom() {
    return Math.trunc(Math.random() * (84 - 1) + 1);
  }
  render(){
    const path = require('../../pokemon/sprite (' + this.getRandom() + ').png');
    return (
      <img src={path} className={spriteStyles.sprite}/>
    );
  }
}

export default PokemonSprite;
