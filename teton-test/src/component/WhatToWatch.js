import React from "react";
import "../style/wtw.scss";
import Carousel from "nuka-carousel";

import One from "../assets/vids/1.mp4";
import Two from "../assets/vids/2.mp4";
import Three from "../assets/vids/3.mp4";
import {Glyphicon} from "react-bootstrap";
import CarouselItem from "./CarouselItem";

class WhatToWatch extends React.Component {

    settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        wrapAround: false,
        cellSpacing: 0,
        cellAlign: "center",
        autoPlay: false

    };
    data = [
        {
            embedded: true,
            genre: "snow",
            time: "2 min",
            vid: "iframe", barColor: "#009cff",
            title: "Jeremy Jones' Journal: Silence in the HIgh Sierra",
            content: "Total silence. No wind, no planes, no birds - this silence is ofter hard to find, but i have finally found it"
        },{
            embedded: false,
            vid: One, barColor: "#009cff",
            genre: "snow",
            time: "4 min",
            title: "Alaskan Adventures",
            content: "The crew adventures by boat in the Canadian Wilderness while preparing for a huge day in the Coastal Range"
        },
        {
            embedded: false,
            genre: "dirt",
            vid: Two, barColor: "#ffc200",
            time: "7 min",
            title: "Alec Honnold Gives Talk on Yosemite Free Solo",
            content: "At this point, we all know about how Alex Honnold, aka superman himself, free soloed El Capital early last summer"
        },

        {
            embedded: false,
            genre: "snow",
            time: "3 min",
            vid: Three, barColor: "#009cff",
            title: "Griffin Dunn Shows Winter in NZ is not over",
            content: "The crew adventures by boat in the Canadian Wilderness while preparing for a huge day in the Coastal Range"
        }

    ]

    fadeIt=()=>{
        console.log('fade adfdsf')
    }

    buildCarousel = () => {
        let inner = this.data.map((itm, index) => {
            return <CarouselItem data={itm} index={index} key={index}/>;
        })
        return inner[1];

        // return <Carousel {...this.settings}
        //                  renderBottomCenterControls={null}
        //                  renderLeftCenterlControls={false}
        //                  beforeSlide={this.fadeIt()}
        //
        //                  renderBottomLeftControls={({previousSlide}) => (
        //                      <p onClick={previousSlide}><Glyphicon glyph={"arrow-left"}/> PREV VIDEO</p>
        //                  )}
        //                  renderBottomRightControls={({nextSlide}) => (
        //                      <p onClick={nextSlide}>NEXT VIDEO <Glyphicon glyph={"arrow-right"}/></p>
        //                  )}>
        //     {inner}
        // </Carousel>;
    }

    render() {
        return (
            <div className="wtw">
                <h1>What To Watch</h1>
                <ul className="genres">
                    <li className="selected">Trending</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>MyFavorites</li>
                </ul>
                <div className="wtw-content">
                    {this.buildCarousel()}
                </div>
            </div>
        )
    }
}

export default WhatToWatch;