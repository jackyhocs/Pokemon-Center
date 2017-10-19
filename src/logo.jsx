import React from 'react';
import { bounce } from 'react-animations';
import Radium , {StyleRoot} from 'radium';

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

export default class Logo extends React.Component{
  render() {
    return (
      <StyleRoot><img src={require('../pokemon/Pokeball.PNG')} style={styles.bounce}/></StyleRoot>
    );
  }
}
