import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Teaser from './Teaser';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>*/}
                <Header>
                    <div className="logo">
                        <img src={logo} className="App-logo" alt="logo" />
                        <div className="companyName">Company</div>
                    </div>
                    <nav className="navigation">
                        <a className="nav-toggle" href="#">
                            <span className="trigger">&#9776;</span>
                            <ul>
                                <li>Home</li>
                                <li>Contact Us</li>
                                <li>Prices</li>
                                <li>Cart</li>
                            </ul>
                        </a>
                    </nav>
                    {/*<ul>
                        <li>Alpha</li>
                        <li>Beta</li>
                        <li>Gamma</li>
                    </ul>*/}
                </Header>
                <Hero text="Texas photographs" />
                {/*<p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>*/}

                <div className="Teasers">
                    <Teaser image="/dallas.jpg" text="Dallas" />
                    <Teaser image="/mission.jpg" text="San Antonio" />
                    <Teaser image="/trees.jpg" text="Vegetation" />
                </div>

                <div className="container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quo, provident delectus, asperiores sint hic quos sit qui dolorem ratione non suscipit sunt voluptate dolore animi aliquid rem minus laborum.</p>

                    <p>Nemo error, non tempora ipsam molestiae harum, perferendis, officiis quas nisi dolor similique sunt maiores voluptate. Fuga eos consequatur blanditiis similique hic? Enim, exercitationem? Aliquid tempore quibusdam laborum eum, doloribus optio voluptate dignissimos nobis. Nam porro sit perspiciatis deleniti magnam, dolorem asperiores repellendus quaerat.</p>

                    <p>Laudantium temporibus in quas quidem ad hic ex dolores iste consectetur distinctio, ipsa dolore quae consequuntur. Deserunt fuga, laudantium ab exercitationem dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nemo, neque aliquam blanditiis quaerat, sit distinctio quia. Quibusdam, quasi, quae. Aliquid, minima aut delectus sed ut eligendi deserunt, totam natus.</p>

                    <p>Error quod non, amet laborum modi magni obcaecati nulla atque cumque tempora doloremque repudiandae aspernatur nam. Quisquam odio voluptatibus pariatur non autem!</p>
                </div>

                <Footer>Copyright © 2017 Jeremy J. Johnson. All rights reserved.<br /><br />The photographs are protected by United States and international copyright law; and may not be copied, reproduced, printed, modified, stored, or transmitted in any form, digital or otherwise, without the explicit written consent of the copyright owner. Violators will be prosecuted to the maximum extent of applicable law.</Footer>
            </div>
        );
    }
}

export default App;
