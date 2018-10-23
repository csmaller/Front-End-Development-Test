import "../style/nav.scss";
import logoTab from '../assets/img/logo.png';
import React from "react";

class Nav extends React.Component{

    render(){
        return ( <header>
                    <img src={logoTab} className="nav-image" alt="teton nav bar"/>
                </header>)
    }
}

export default Nav;