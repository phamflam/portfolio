import React from "react"
import "./sidenav.css"

class SideNav extends React.Component {
  state = {
    state: {
      showNav: false
    }
  }

  openNavClick = e => {
    e.preventDefault()
    this.openNav()
  }

  closeNavClick = e => {
    e.preventDefault()
    this.closeNav()
  }

  openNav = () => {
    this.setState({
      showNav: true
    })

    document.addEventListener("keydown", this.handleEscKey)
  }
  closeNav = () => {
    this.setState({
      showNav: false
    })

    document.removeEventListener("keydown", this.handleEscKey)
  }

     darkMode=()=> {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
    
  handleEscKey = e => {
    if (e.key === "Escape") {
      this.closeNav()
    }
  }

  render() {
    const { showNav } = this.state
    let navCoverStyle = { width: showNav ? "100%" : "0" }
    let sideNavStyle = { width: showNav ? "200px" : "0" }
 
    return (
      <React.Fragment>
        <span id="opennav" onClick={this.openNavClick} className="open-nav">
        &#9776;
        </span>
        <div
          onClick={this.navCoverClick}
          className="nav-cover"
          style={navCoverStyle}
        />
        <div name="side-nav" class="side-nav" style={sideNavStyle}>
          <button onClick={this.closeNavClick} className="close-nav">
            &times;
          </button>
          <a onClick={this.closeNav} href="#home">HOME</a>
          <a onClick={this.closeNav} href="#about">ABOUT</a>
          <a onClick={this.closeNav} href="#projects">PROJECTS</a>
          <a onClick={this.closeNav} href="#contact">CONTACT</a>
          <button  className="button button-darkmode" onClick={() => {this.darkMode(); /*this.closeNav()*/} }>darkmode</button>
        </div>
      </React.Fragment>
    )
  }
}

export default SideNav
