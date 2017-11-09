import React from 'react';
import bgPic from '../../backgrounds/1.png'
import '../css/Background.css';


class Background extends React.Component {
  render() {
    return (
      <div className="background">
        <img src={bgPic} placeholder={bgPic} height="100%" width="100%"/>
      </div>
    );
  }
}

export default Background
