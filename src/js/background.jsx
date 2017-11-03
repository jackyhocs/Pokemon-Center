import React from 'react';
import bgPic from '../../backgrounds/1.png'
import BackgroundImage from 'react-background-image-loader';

var sectionStyle = {
  width: '100%',
  height: '1000px',
    backgroundImage: `url(${bgPic}) no-repeat center center`,
    overflow: 'hidden',
    backgroundSize: 'cover',
};

class Background extends React.Component {
  render() {
    return (
          <BackgroundImage src={bgPic} placeholder={bgPic} style={sectionStyle}></BackgroundImage>
    );
      /*return(
         <div style={sectionStyle}></div>
      );*/
  }
}

export default Background
