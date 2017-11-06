import React from 'react';
import '../css/logo.css'

class Logo extends React.Component {
  render() {
    return (
      <div className="Logo">
        <img src={require('../../pokemon/Pokeball.PNG')} className="Logo-pokeball" width={100} height={100}/>
      </div>
    );
  }
}

export default Logo;
