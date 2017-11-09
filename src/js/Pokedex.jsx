import React from 'react';
import '../css/Pokedex.css';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Pokebox from './Pokebox.jsx'

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      animation: 'bounce',
      library: 'Radium'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    const { animation } = this.state;
    this.setState({
      toggled:!this.state.toggled,
      animation: ''
    },
  () => {
    this.setState({animation});
  });
  }
  render() {
    let pokeboxTemp = null;
    if(this.state.toggled){
      pokeboxTemp = <Pokebox />;
    }
    return(
        <div className="Pokedex">
          {pokeboxTemp}
          <img src={require('../../pokemon/Pokedex.png')} width={100} height={100}  onClick={this.handleClick}/>
        </div>
    );
  }
}

export default Pokedex;
