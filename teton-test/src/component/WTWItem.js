import React from "react";
import "../style/carouselItem.scss";
import {Glyphicon} from "react-bootstrap";

class WTWItem extends React.Component {

    styleObj;
    vid;

    constructor(props) {
        super(props);
        this.genreStyleObj = {borderBottom: "1px solid " + this.props.data.barColor}
        this.contentStyleObj = {borderTop: "4px solid " + this.props.data.barColor}
        this.state ={vidStyle:{display:"none"}};
    }

    showVideo = () => {
        this.vid = document.getElementById("vid-"+this.props.index);
        this.vid.play();
        if(this.props.data.layout==="landscape"){}
        this.setState({vidStyle:{display:"block"}, imageStyle:{opacity: 0}});
    }

    hideVideo =()=>{
        this.vid = document.getElementById("vid-"+this.props.index);
        this.vid.pause();
        this.setState({vidStyle:{display:"none"}, imageStyle:{opacity:1}});
    }

    render() {
            return (<div className={"carousel-item video-item "  + this.props.data.layout} data-index={this.props.index} key={this.props.index}
                         style={this.contentStyleObj}>
                        <img className="video-img" src={this.props.data.img} style={this.state.imageStyle}/>
                        <Glyphicon glyph={"play"} className={"play"}  onClick={()=>this.showVideo()}/>
                        <div className="genre" style={this.genreStyleObj} style={this.state.imageStyle}>
                            <label>{this.props.data.genre}</label>
                            <label className="time pull-right">{this.props.data.time}</label>
                        </div>
                        <label className={"synopsis"}>{this.props.data.title}</label>
                        <p>{this.props.data.content}</p>
                    <div className={"vid-container"} style={this.state.vidStyle} >
                        <label className={"close"} onClick={()=>this.hideVideo()}>X</label>
                        <video src={this.props.data.vid} title={"test"} controls={true} id={"vid-"+this.props.index} ></video>
                    </div>
                    </div>
            )
    }
}

export default WTWItem;