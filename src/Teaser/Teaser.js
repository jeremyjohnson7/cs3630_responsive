import React from 'react';
// import Field from '../Field';
import './Teaser.css';

class Teaser extends React.Component {
    constructor(props) {
        super(props);
    }

    // onSubmit() {
    //     this.props.submitAction(this.state);
    // }

    render(){
        return (
            <div className="teaser">
                <img src={this.props.image} alt={this.props.text} />
                <div>{this.props.text}</div>
                {this.props.children}
            </div>
        )
    }
}

export default Teaser;
