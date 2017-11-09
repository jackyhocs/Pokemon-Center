import React from 'react';
import ReactList from 'react-list';
import Cookies from 'universal-cookie';
import { Scrollbars } from 'react-custom-scrollbars';
import '../css/Pokebox.css';

const cookies = new Cookies();

const renderSquareItem = (index, key) =>
<div key={key} className={'square-item'}>
  <img item={index}src={cookies.get('pokemon').acquired.includes(index) ? require(`../../pokemon/sprite (${index}).png`) : require('../../pokemon/Question.png')}
  height={100} width={100}/>
</div>;

class Pokebox extends React.Component {
  render(){
    return (
      <Scrollbars style={{width:400, height: 300 }}>
        <ReactList
          itemRenderer={renderSquareItem}
          length={84}
          type='uniform'
        />
      </Scrollbars>
    );
  }
}

export default Pokebox;
