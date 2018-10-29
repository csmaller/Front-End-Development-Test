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

    buildImage = ()=>{
        if(this.props.data.useImage===true){
            console.log("IMG"+this.props.data.img)
            return <img class="video-img" src={this.props.data.img} />
        }
    }

    render() {
        return (<div className={"carousel-item"} data-index={this.props.index} key={this.props.index}  style={this.contentStyleObj}>

                    <div className ="content-bg"></div>
                    <Glyphicon glyph={"play"} className={"play"} />
                    <div className="genre" style={this.genreStyleObj}>
                        <label>{this.props.data.genre}</label>
                        <label className="time pull-right">{this.props.data.time}</label>
                    </div>
                    <h1>{this.props.data.title}</h1>
                    <p>{this.props.data.content}</p>
                {this.buildImage()}


            </div>
        )
    }
}

export default CarouselItem;