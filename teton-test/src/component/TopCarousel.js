import React from "react";
import CarouselItem from "./CarouselItem";

import One from "../assets/img/1.png";
import Two from "../assets/img/2.png";
import Three from "../assets/img/3.png";
import Four from "../assets/img/4.png";
import {Glyphicon} from "react-bootstrap";
import Swipeable from 'react-swipeable';

let $ = require("jquery");
const IMG_WIDTH = "375px";
const IMG_HEIGHT = "50px";
let IMAGES = [One, Two, Three, Four];
const RIGHT = '-1';
const LEFT = '+1';
const FADE = 500;

class TopCarousel extends React.Component {

    direction = LEFT;

    constructor(props) {
        super(props);
        this.state = {imageIdx: 0};
        this.data = props.data;
    }

    setNext = () => {
        const change = this.direction === RIGHT ? RIGHT : LEFT;
        const adjustedIdx = this.state.imageIdx + Number(change);
        let newIdx;
        if (adjustedIdx >= IMAGES.length) {
            newIdx = 0;
        } else if (adjustedIdx < 0) {
            newIdx = IMAGES.length - 1
        } else {
            newIdx = adjustedIdx;
        }
        this.setState({imageIdx: newIdx});
    }

    onSwiped = (direction) => {
        this.direction = direction;
        let imgIndx = this.state.imageIdx;
        let bg = "#bg"+imgIndx;
        if (direction === LEFT && this.state.imageIdx !== this.data.length - 1) {
            $("#background-images").animate({
                left: "-=367"
            },FADE);

            $(bg).animate({
                opacity: 0
            },FADE-100);

            $("#carousel-container").animate({
                left: "-=295"
            }, FADE, this.setNext());
        }
        else if (direction === RIGHT && this.state.imageIdx !== 0) {
            $(bg).animate({
                opacity: 0
            },FADE-100);
            $("#background-images").animate({
                left: "+=367"
            },FADE);
            $("#carousel-container").animate({
                left: "+=295"
            }, FADE, this.setNext());
        }
    };

    componentDidMount() {
        $("#bg0").animate({
            opacity:1
        },FADE);
    }

    buildBG =()=>{
        let inner = [];
        this.data.map((itm,index)=>{
            let styley={opacity:0, backgroundSize: "cover", backgroundImage: `url(${itm.img})`}
            inner.push(<div id={"bg"+index} style={styley} key={index}/>);
        })
        return <div id={"background-images"}>{inner}</div>
    };

    buildCarouselItems = ()=>{
        let inner = [];
        this.data.map((itm,index)=>{
            inner.push(<CarouselItem data={itm} key={index}/>);
        })
        return  <div id={"carousel-container"}>{inner}</div>
    };

    render() {
        const {imageIdx = 0} = this.state;
        const imageStyles = {
            width: IMG_WIDTH,
            height: IMG_HEIGHT,
        };
        let bg = "#bg"+imageIdx ;
        $(bg).animate({
            opacity:1
        },FADE);

        return (
            <div className="swipe-container">

                <Swipeable
                    className="slider"
                    trackMouse
                    style={{touchAction: 'none', zIndex: 1000, cursor:"swipe"}}
                    preventDefaultTouchmoveEvent
                    onSwipedLeft={() => this.onSwiped(LEFT)}
                    onSwipedRight={() => this.onSwiped(RIGHT)} >
                    {this.buildBG()}
                    {this. buildCarouselItems()}
                    <div className="image-style" id={"imageStyle"}>
                        <label
                            onClick={() => this.onSwiped(RIGHT)}
                            className="float-left slider-control-bottomleft"
                        ><Glyphicon glyph={"arrow-left"}/>PLAY PREV
                        </label>
                        <label
                            onClick={() => this.onSwiped(LEFT)}
                            className=" float-right slider-control-bottomright"
                        >PLAY NEXT<Glyphicon glyph={"arrow-right"}/>
                        </label>
                    </div>
                </Swipeable>
            </div>
        )
    }
}

export default TopCarousel;