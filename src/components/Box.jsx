import React from 'react';
import tft from '../images/TFT.jpg';
import "./box.css"
class Box extends React.Component {
    render() { 
        return <div className="box">
            <img className="image" src={tft} alt="tft"/>
        </div>;
    }
}
 
export default Box;