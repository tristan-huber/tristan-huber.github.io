import "../style.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as travelRaw from "./data/travel.json";
import * as hello from "./components/Hello";
import * as Bootstrap from "../node_modules/react-bootstrap";

interface TravelData {
  title: string,
  date: string,
  content: [ {subtitle: string, body: string} ]
  images: [ {path: string, title: string, subtitle: string, rotate: number} ]
}

const travel: [TravelData] = travelRaw;

// Controls for the travel page
const TravelPage = React.createClass({
  render() {
    var entries = travel.map((travelEntryData) => {
      return TravelEntry(travelEntryData);
    });
    return <div>{entries}</div>
  }
});

function TravelEntry(props: TravelData) {
    var images = props.images.map((imageDetails) => {
      var image = imageDetails.rotate ?
                      <img src={imageDetails.path} width={1200} className={`rotate${imageDetails.rotate}`} /> :
                      <img src={imageDetails.path} width={1200} />;
      return <Bootstrap.Carousel.Item>
        {image}
        <Bootstrap.Carousel.Caption>
          <h3>{imageDetails.title}</h3>
          <p>{imageDetails.subtitle}</p>
        </Bootstrap.Carousel.Caption>
      </Bootstrap.Carousel.Item>
    });

    var contents = props.content.map((contentEntry) => {
      var optionalTitle = contentEntry.subtitle ? <h3 className="content-subtitle">{contentEntry.subtitle}</h3> : null;
      return <div className="content-subsection">
        {optionalTitle}
        <p>{contentEntry.body}</p>
        </div>
    })

    return (
      <Bootstrap.Grid className="travel-entry">
        <Bootstrap.Row className="images">
          <Bootstrap.Carousel interval={0}>
            {images}
          </Bootstrap.Carousel>
        </Bootstrap.Row>

        <Bootstrap.Row className="title">
          <Bootstrap.Col xs={10} xsOffset={0}>
          <Bootstrap.PageHeader> {props.title} </Bootstrap.PageHeader>
          </Bootstrap.Col>
        </Bootstrap.Row>

        <Bootstrap.Row className="content">
          {contents}
        </Bootstrap.Row>
      </Bootstrap.Grid>
    );
  }

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
      <Bootstrap.Navbar inverse>
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
