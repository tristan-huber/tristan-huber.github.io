import "../style.less";
import * as React from "react";
import * as ReactDOM from "react-dom";

import * as travel from "./data/travel.json";

import * as hello from "./components/Hello";

import * as Bootstrap from "../node_modules/react-bootstrap";

console.log(travel.title)
console.log("asdf")

const TravelPage = React.createClass({
  render() {
    return (
      <Bootstrap.Grid>
        <Bootstrap.Row className="content-wrapper">
          <Bootstrap.Col xs={10} xsOffset={0}>
          Travel Page
          <Bootstrap.Button bsStyle="success" bsSize="small">Bar</Bootstrap.Button>
          </Bootstrap.Col>
        </Bootstrap.Row>
      </Bootstrap.Grid>
    );
  }
});

const ProjectPage = React.createClass({
  render() {
    return (
      <Bootstrap.Button bsStyle="success" bsSize="small">Project Page</Bootstrap.Button>
    )
  }
})

const HomePage = React.createClass({
  render() {
    return (
      <Bootstrap.Button bsStyle="success" bsSize="small">Home Page</Bootstrap.Button>
    )
  }
})

function navigate(key: String) {
  event.preventDefault();
  var targetPage = undefined;
  if (key === "travel") {
    targetPage = <TravelPage />;
  } else if (key === "project") {
    targetPage = <ProjectPage />;
  } else {
    targetPage = <HomePage />;
  }
  ReactDOM.render(
    targetPage,
    document.getElementById("content")
  )
}

// Navigation control
const Navigation = React.createClass({
  handleSelect(eventKey: String) {
    event.preventDefault();
    navigate(eventKey);
  },

  goHome() {
    event.preventDefault();
    navigate("home");
  },

  render() {
    return (
      <Bootstrap.Navbar>
        <Bootstrap.Navbar.Header onClick={this.goHome}>
          <Bootstrap.Navbar.Brand><a href="#">Tristan</a></Bootstrap.Navbar.Brand>
        </Bootstrap.Navbar.Header>
        <Bootstrap.Nav onSelect={this.handleSelect}>
          <Bootstrap.NavItem href="#" eventKey="travel">Travel</Bootstrap.NavItem>
          <Bootstrap.NavItem href="#" eventKey="project">Projects</Bootstrap.NavItem>
        </Bootstrap.Nav>
      </Bootstrap.Navbar>
    );
  }
});

// Render our navigation bar
ReactDOM.render(
  <Navigation />
  ,document.getElementById("navigation")
)

// Initially render to the home page
ReactDOM.render(
  <HomePage />,
  document.getElementById("content")
);
