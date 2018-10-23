import React from "react";
import "../style/carouselItem.scss";
import {Glyphicon} from "react-bootstrap";

class CarouselItem extends React.Component {

    styleObj;
    constructor(props) {
        super(props);
         this.genreStyleObj= {borderBottom: "1px solid " +this.props.data.barColor}
        this.contentStyleObj= {borderTop: "4px solid " +this.props.data.barColor}
    }


    render() {
        return (<div className={"carousel-item"} data-index={this.props.index} key={this.props.index}>
                <div className ="content-bg"></div>
                <div className ="content-overlay"   style={this.contentStyleObj}>

                    <Glyphicon glyph={"play"} className={"play"} />
                    <div className="genre" style={this.genreStyleObj}>
                        <label>{this.props.data.genre}</label>
                        <label className="time pull-right">{this.props.data.time}</label>
                    </div>
                    <h1>{this.props.data.title}</h1>
                    <p>{this.props.data.content}</p>

                </div>
                <img src={this.props.data.img} alt={"Teton Images"}/>
            </div>
        )
    }
}

export default CarouselItem;