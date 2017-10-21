import React from 'react';
import styles from '../css/logo.css'

class Logo extends React.Component {
  render() {
    return (
        <img src={require('../../pokemon/Pokeball.PNG')} className={styles.logo} width={100} height={100}/>
    );
  }
}

export default Logo;
