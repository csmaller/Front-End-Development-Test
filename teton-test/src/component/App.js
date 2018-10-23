import React, {Component} from 'react';
import logo from "../assets/img/logo_main.png";
import '../style/App.scss';
import TopCarousel from "./TopCarousel";
import WhatToWatch from "./WhatToWatch";
import Nav from "./Nav";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="app-container">
                    <div className="container-display">
                        <Nav/>
                        <div className="main">
                            <img src={logo} className="app-logo" alt="teton nav bar"/>
                            <TopCarousel/>
                            <WhatToWatch/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
