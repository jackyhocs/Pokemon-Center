import React from 'react';
import '../css/Pokedex.css'

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({
      toggled:!this.state.toggled
    });
    console.log(this.state.toggled);
  }
  render() {
    return(
      <div className="Pokedex">
        <img src={require('../../pokemon/Pokedex.png')} width={100} height={100} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Pokedex;
