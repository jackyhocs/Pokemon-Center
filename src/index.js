import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './js/logo.jsx';
import Pokemon from './js/pokemonSprite.jsx'

/*ReactDOM.render(
 <App />,
 document.getElementById('root')
 );*/

ReactDOM.render(
  <Logo />,
  document.getElementById('logo')
);
ReactDOM.render(
  <Pokemon />,
  document.getElementById('pokemonSprite')
);
