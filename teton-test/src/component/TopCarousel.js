import React from "react";
import Carousel from "nuka-carousel";
import CarouselItem from "./CarouselItem";

import One from "../assets/img/1.png";
import Two from "../assets/img/2.png";
import Three from "../assets/img/3.png";
import Four from "../assets/img/4.jpg";
import {Glyphicon} from "react-bootstrap";

class TopCarousel extends React.Component {
    settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        wrapAround: false,
        cellSpacing: 0,
        cellAlign: "center",
        autoPlay:false,
        autoGenerateStyleTag:true,

    };
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
            img:Four,barColor: "#009cff",
            title: "Jeremy Jones' Journal: Silence in the HIgh Sierra",
            content: "Total silence. No wind, no planes, no birds - this silence is ofter hard to find, but i have finally found it"
        }]

   fadeIt =()=>{
       console.log('fade')
   }

    buildCarousel = () => {
        let inner = this.data.map((itm,index)=>{
            return <CarouselItem data={itm} index={index} key={index} />;
        })

        return <Carousel {...this.settings}
                         renderBottomCenterControls={null}
                         renderLeftCenterlControls={false}
                         beforeSlide={this.fadeIt()}

                         renderBottomLeftControls={({ previousSlide }) => (
                            <p onClick={previousSlide}><Glyphicon glyph={"arrow-left"} /> PREV VIDEO</p>
                        )}
                         renderBottomRightControls={({ nextSlide }) => (
                             <p onClick={nextSlide}>NEXT VIDEO <Glyphicon glyph={"arrow-right"} /></p>
                         )}>
                    {inner}
                </Carousel>;
    }


    render() {
        return this.buildCarousel();
    }
}

export default TopCarousel;