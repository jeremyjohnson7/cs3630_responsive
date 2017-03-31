import React from 'react';
// import Field from '../Field';
import './Teaser.css';

class Teaser extends React.Component {
    render(){
        return (
            <div className="Teaser">
                <img src={this.props.image} alt={this.props.text} />
                <div>{this.props.text}</div>
                {this.props.children}
            </div>
        )
    }
}

export default Teaser;
