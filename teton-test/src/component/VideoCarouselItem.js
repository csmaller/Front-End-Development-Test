import React from "react";
import "../style/videoCarouselItem.scss";
import {Glyphicon} from "react-bootstrap";

class VideoCarouselItem extends React.Component {

    constructor(props) {
        super(props);
        this.genreStyleObj= {borderBottom: "1px solid " +this.props.data.barColor}
        this.contentStyleObj= {borderTop: "4px solid " +this.props.data.barColor}
    }

    playVid =()=>{
        console.log(';here')

    }



    buildElement =()=>{
        //if its an IFRAME then load the iframe video
        if(this.props.embedded){
            return <div>
                <Glyphicon glyph={"play"} className={"play"} onClick={this.playVid()} />
                <iframe src="https://vimeo.com/266319982" title={"Big Waves"}></iframe>
            </div>
        }else{
            return <video src={this.props.vid} ></video>
        }
    }


    render() {
        return (<div className={"video-carousel-item"} data-index={this.props.index} key={this.props.index}>
                <div className ="content-overlay"   style={this.contentStyleObj}>
                    {this.buildElement()}

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

export default VideoCarouselItem;