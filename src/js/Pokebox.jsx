import React from 'react';
import ReactList from 'react-list';

const renderSquareItem = (index, key) =>
  <div key={key} className={'square-item' + (index % 2 ? '' : ' even')}>
    <img src={require(`../../pokemon/sprite (${index+1}).png`)}/>
  </div>;

class Pokebox extends React.Component {
  renderSquare(num){
    return (
      <div className="Image">
        <img src={require('../../pokemon/Question.png')} />
      </div>
    );
  }
  render(){
    return (
      <div style={{overflow: 'auto', maxHeight: 400}}>
        <ReactList
          itemRenderer={renderSquareItem}
          length={84}
          type='uniform'
        />
      </div>
    );
  }
}

export default Pokebox;
