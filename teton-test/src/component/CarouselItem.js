import React from "react";
import "../style/carouselItem.scss";
import {Glyphicon} from "react-bootstrap";

class CarouselItem extends React.Component {

    styleObj;
    constructor(props) {
        super(props);
         this.genreStyleObj= {borderBottom: "1px solid " +this.props.data.barColor}
        this.contentStyleObj= {borderTop: "4px solid " +this.props.data.barColor}
        this.state={iframeStyle:{display:"none"}};
    }

   showVideo =()=>{
       this.setState({iframeStyle:{display:"block"}});
   }

    hideVideo =()=>{
        this.setState({iframeStyle:{display:"none"}});
    }

    render() {
        return (<div className={"carousel-item"} data-index={this.props.index} key={this.props.index}  style={this.contentStyleObj}>
                    <div className ="content-bg"></div>
                    <Glyphicon glyph={"play"} className={"play"} onClick={()=>this.showVideo()}/>
                    <div className="genre" style={this.genreStyleObj}>
                        <label>{this.props.data.genre}</label>
                        <label className="time pull-right">{this.props.data.time}</label>
                    </div>
                    <h1>{this.props.data.title}</h1>
                    <p>{this.props.data.content}</p>
                <img className="video-img" src={this.props.data.img}/>
                <div className={"embedded-iframe"} style={this.state.iframeStyle}>
                    <label className={"close"} onClick={()=>this.hideVideo()}>X</label>
                    <iframe src={this.props.data.vid} width="100%" height="auto" frameBorder="0"
                            webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
                </div>

            </div>
        )
    }
}

export default CarouselItem;