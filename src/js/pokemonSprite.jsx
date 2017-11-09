import React from 'react';
import Cookies from 'universal-cookie';
import SortedArray from 'collections/sorted-array';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import '../css/sprite.css';

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

class PokemonSprite extends React.Component {
  insertPokemon(pokemonNum){
    const cookie = new Cookies();
    let jsonStr = cookie.get('pokemon');
    let sorted = new SortedArray(jsonStr.acquired);
    sorted.add(pokemonNum);
    let json = { "acquired": sorted.toArray()}
    cookie.set('pokemon', json, {path: '/'});
  }
  getRandom() {
    return Math.trunc(Math.random() * (84));
  }
  render(){
    let pokemonNum = this.getRandom();
    this.insertPokemon(pokemonNum);
    const path = require('../../pokemon/sprite (' + pokemonNum + ').png');

    return (
      <StyleRoot>
        <div className="pokemonSprite">
          <img src={path} className="pokemonSprite-pokemon" height={200} width={200} style={styles.bounce}/>
        </div>
      </StyleRoot>
    );
  }
}

export default PokemonSprite;
