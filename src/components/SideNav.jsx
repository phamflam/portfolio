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
        <span onClick={this.openNavClick} className="open-nav">
          &#9776; open
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
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
          <button className="button" onClick={this.darkMode}>darkmode </button>
        </div>
      </React.Fragment>
    )
  }
}

export default SideNav
