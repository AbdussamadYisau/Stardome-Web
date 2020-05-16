import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from "../../assets/img/stardome_logo.png";
import Facebook from "../../assets/img/facebook.png";
import Instagram from "../../assets/img/instagram.png";
import Twitter from "../../assets/img/twitter.png";
import Youtube from "../../assets/img/youtube.png";
import SideBar from './sideBar'
import './navbar.scss';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      showHideSidebar: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    switch (name) {
      case "showHideSidebar":
        this.setState({ showHideSidebar: !this.state.showHideSidebar });
        break;
    }
  }
  render() {
    const {showHideSidebar} = this.state;
    return (
      <div className="z-index nav-collection">
        <div className="w3-top w3-container w3-hide-medium w3-hide-small w3-bar w3-black">
          <div className="w3-bar-item">
            <div className="logo">
              <img className="logo-image" src={Logo} alt="Logo of stardome" />
            </div>
          </div>

         
          <Link className="w3-bar-item move-nav" style={{ textDecoration: "none" }} to="/">
          HOME
          </Link>

          <Link className="w3-bar-item move-nav" style={{ textDecoration: "none" }} to="/events">
          TOURNAMENTS
          </Link>

          <Link className="w3-bar-item move-nav" style={{ textDecoration: "none" }} to="/">
          MATCH SCHEDULES
          </Link>
        
          
          <Link className="w3-bar-item move-nav" style={{ textDecoration: "none" }} to="/news">
          NEWS
          </Link>

          <Link className="w3-bar-item move-nav" style={{ textDecoration: "none" }} to="/about">
          ABOUT
          </Link>
         
            <Link id="nav-button" className="w3-bar-item w3-button w3-right smIcons" to="/auth">SIGN IN</Link>

            <Link to="/"  className="w3-bar-item w3-button w3-right smIcons" > <img alt="instagram logo" src={Instagram} /></Link>
            <Link className="w3-bar-item w3-button w3-right smIcons" to="/auth"> <img alt="twitter logo" src={Twitter} /></Link>

            <Link className="w3-bar-item w3-button w3-right smIcons" to="/auth"> <img alt="Youtube logo" src={Youtube} /></Link>

            {/* <Link className="w3-bar-item w3-button w3-right smIcons" to="/auth"> <img alt="Facebook logo" src={Facebook} /></Link> */}

         
        </div>
        <div className="w3-main w3-top w3-black w3-hide-large">
          {showHideSidebar && <SideBar />}
          <div className="w3-bar-item w3-left">
            <div className="logo" style={{ margin: "0 0 0 20px" }}>
              <img className="logo-image" src={Logo} />
            </div>
          </div>
          <div className="w3-black w3-right smIcons ">
            <div
              style={{
                color: "#457FFF",
                fontSize: "xx-large",
                paddingRight: 20 + "px",
                textDecoration: "none",
                paddingLeft: "18px"
              }}
            >
              <a
                href="#"
                onClick={() => this.hideComponent("showHideSidebar")}
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-bars"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;