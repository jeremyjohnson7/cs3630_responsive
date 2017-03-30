import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Teaser from './Teaser';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                {/*<BigImage image="" text="50% more efficient" />*/}

                <Teaser image="" text="50% more efficient" />
                <Teaser image="" text="Always on" />
                <Teaser image="" text="Only €38" />

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quo, provident delectus, asperiores sint hic quos sit qui dolorem ratione non suscipit sunt voluptate dolore animi aliquid rem minus laborum.</p>
            </div>
        );
    }
}

export default App;
