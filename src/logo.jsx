import React from 'react';
import { bounce } from 'react-animations';
import Radium from 'radium';
import imgSrc from './pokemon/Pokeball.PNG';

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

export default class Logo extends React.Component{
  render() {
    return (
      <img src={imgSrc} style={styles.bounce}/>
    );
  }
}
