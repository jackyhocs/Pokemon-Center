import React, { Component } from 'react';
import Logo from './Logo.jsx';
import Sprite from './pokemonSprite.jsx';
import Cookies from 'universal-cookie';
import Pokedex from './Pokedex.jsx'


class App extends Component {
  cookieHandler(){
    const cookies = new Cookies();
    if(cookies.get('pokemon') == undefined) {
      cookies.set('pokemon', '{"acquired":[]}', {path: '/'});
    }
    //console.log(cookies.get('pokemon'));
    //console.log("DONE");
  }
  render(){

    return (
      <div>
        {this.cookieHandler()}
        <Logo />
        <Sprite />
        <Pokedex />
        <h1>HELP ME</h1>

      </div>

    );
  }
}

export default App;
