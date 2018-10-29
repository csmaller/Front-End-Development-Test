import React from "react";
import "../style/wtw.scss";
import WTWItem from "./WTWItem";
import Swipeable from 'react-swipeable';

let $ = require("jquery");

const RIGHT = '-1';
const LEFT = '+1';
const FADE = 300;
const ANIMATE = "310";

class WhatToWatch extends React.Component {

    direction = LEFT;

    constructor(props) {
        super(props);
        this.data = props.data;
        this.state ={imageIdx: 0};
    }


    setNext = () =>{
        const change = this.direction === RIGHT ? RIGHT : LEFT;
        const adjustedIdx = this.state.imageIdx + Number(change);
        let newIdx;
        if (adjustedIdx >=  this.data.length) {
            newIdx = 0;
        } else if (adjustedIdx < 0) {
            newIdx = this.data.length - 1
        } else {
            newIdx = adjustedIdx;
        }
        this.setState({imageIdx: newIdx});
    }

    onSwiped = (direction) => {

        this.direction = direction;
        if (direction === LEFT  &&  this.state.imageIdx !== this.data.length - 1) {
            $("#wtw-container").animate({
                left: "-="+ANIMATE
            }, FADE,this.setNext());
        }
        else if (direction === RIGHT  && this.state.imageIdx !== 0 ) {
            $("#wtw-container").animate({
                left: "+="+ANIMATE
            }, FADE,this.setNext());
        }
    };

    render() {
        return (
            <div className="wtw" >
                <h1>What To Watch</h1>
                <ul>
                    <li className="selected">Trending</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>MyFavorites</li>
                </ul>
                <div className="wtw-content">
                    <Swipeable
                        className="wtwslider"
                        trackMouse
                        preventDefaultTouchmoveEvent
                        onSwipedLeft={() => this.onSwiped(LEFT)}
                        onSwipedRight={() => this.onSwiped(RIGHT)}
                    >
                        <div id={"wtw-container"}>
                            <WTWItem data={this.data[0]} key={1} index={1} showVideo={this.showVideo}/>
                            <div className="landscape-container">
                                <WTWItem data={this.data[1]} key={2} index={2} showVideo={this.showVideo}/>
                                <WTWItem data={this.data[2]} key={3} index={3} showVideo={this.showVideo}/>
                            </div>
                        </div>

                    </Swipeable>

                </div>
            </div>
        )
    }
}

export default WhatToWatch;