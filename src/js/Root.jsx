import React, { Component } from 'react';
import Logo from './Logo.jsx';
import Sprite from './pokemonSprite.jsx';
import Cookies from 'universal-cookie';
import Pokedex from './Pokedex.jsx';
import Background from './Background.jsx';
import '../css/Root.css'


class App extends Component {
  cookieHandler(){
    const cookies = new Cookies();
    if(cookies.get('pokemon') == undefined) {
      cookies.set('pokemon', '{"acquired":[]}', {path: '/'});
    }
  }
  render(){
    return (
      <div className="root">
        {this.cookieHandler()}
        <Background />
        <Logo />
        <Sprite />
        <Pokedex />
      </div>
    );
  }
}

export default App;
