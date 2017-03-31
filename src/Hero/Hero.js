import React from 'react';
import './Hero.css';

class Hero extends React.Component {
    render(){
        return (
            <div className="Hero">
                <div className="Hero-content">
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default Hero;
