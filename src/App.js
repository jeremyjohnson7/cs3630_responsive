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
                        <div className="company-name">Company</div>
                    </div>
                    <nav className="navigation">
                        <a className="nav-toggle" href="#">
                            {/*<span className="trigger">&#9776;</span>*/}
                            <span className="menu-icon trigger">
                                <svg viewBox="0 0 18 15" width="18px" height="15px">
                                    <path fill="#ffffff" d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"></path>
                                    <path fill="#ffffff" d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"></path>
                                    <path fill="#ffffff" d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"></path>
                                </svg>
                            </span>
                            <ul>
                                <li>Home</li>
                                <li>Contact Us</li>
                                <li>Prices</li>
                                <li>Cart</li>
                                {/*<li>Alpha</li>
                                <li>Beta</li>
                                <li>Gamma</li>*/}
                            </ul>
                        </a>
                    </nav>
                </Header>
                <Hero text="Photographs of Texas" />

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

                <Footer>Copyright © 2017 Jeremy J. Johnson. All rights reserved.<br /><br />The photographs are protected by United States and international copyright law; and may not be copied, reproduced, printed, modified, stored, or transmitted in any form, digital or otherwise, without the explicit written consent of the copyright owner.</Footer>
            </div>
        );
    }
}

export default App;
