import React, {Component} from 'react';
import logo from "../assets/img/logo_main.png";
import '../style/App.scss';
import TopCarousel from "./TopCarousel";
import WhatToWatch from "./WhatToWatch";
import Nav from "./Nav";

import One from "../assets/img/1.png";
import Two from "../assets/img/2.png";
import Three from "../assets/img/3.png";
import Four from "../assets/img/4.jpg";
import Five from "../assets/img/girl_bike.png";

class App extends Component {

    data = [{
        img: One, barColor: "#009cff",
        genre: "snow",
        time: "4 min",
        title: "Alaskan Adventures",
        content: "The crew adventures by boat in the Canadian Wilderness while preparing for a huge day in the Coastal Range"
    },
        {
            genre: "dirt",
            img: Two, barColor: "#ffc200",
            time: "7 min",
            title: "Alec Honnold Gives Talk on Yosemite Free Solo",
            content: "At this point, we all know about how Alex Honnold, aka superman himself, free soloed El Capital early last summer"
        },

        {
            genre: "snow",
            time: "3 min",
            img: Three, barColor: "#009cff",
            title: "Griffin Dunn Shows Winter in NZ is not over",
            content: "The crew adventures by boat in the Canadian Wilderness while preparing for a huge day in the Coastal Range"
        },

        {
            genre: "snow",
            time: "2 min",
            img: Four, barColor: "#009cff",
            title: "Jeremy Jones' Journal: Silence in the HIgh Sierra",
            content: "Total silence. No wind, no planes, no birds - this silence is ofter hard to find, but i have finally found it"
        }]

    wtwData=[ {
        genre: "dirt",
        layout:"portrait",
        time: "2 min",
        img: Five, barColor: "#ffc200",
        title: "Op-Ed:What's With All The Direct-To-Consumer Bikers These Days",
        content: "",
        useImage:true,
        vid:"./vids/1.mp4"
    },{
        genre: "snow",
        time: "2 min",
        layout:"landscape",
        img: Five, barColor: "#009cff",
        title: "Mason and Rory Explore in a Plane",
        content: "",
        useImage:true,
        vid:"./vids/2.mp4"
    },{
        genre: "water",
        time: "2 min",
        layout:"landscape",
        img: Five, barColor: "#009cff",
        title: "Surfing Australias MegaSlab",
        content: "",
        useImage:true,
        vid:"./vids/3.mp4"
    }]

    render() {
        return (
            <div className="App">
                <div className="app-container">
                    <div className="container-display">
                        <Nav/>
                        <div className="main">
                            <img src={logo} className="app-logo" alt="teton nav bar"/>

                            <TopCarousel data ={this.data}/>
                            <WhatToWatch data={this.wtwData} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
