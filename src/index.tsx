import "../style.less";
import * as React from "react";
import * as ReactDOM from "react-dom";

import * as Bootstrap from "../node_modules/react-bootstrap";

ReactDOM.render(
  <Bootstrap.Navbar>
    <Bootstrap.Navbar.Header>
      <Bootstrap.Navbar.Brand><a href="#">Tristan</a></Bootstrap.Navbar.Brand>
    </Bootstrap.Navbar.Header>
    <Bootstrap.Nav>
      <Bootstrap.NavItem href="#">Travel</Bootstrap.NavItem>
      <Bootstrap.NavItem href="#">Projects</Bootstrap.NavItem>
    </Bootstrap.Nav>
  </Bootstrap.Navbar>

  ,document.getElementById("navigation")
)

ReactDOM.render(
  <Bootstrap.Grid>
    <Bootstrap.Row className="content-wrapper">
      <Bootstrap.Col xs={10} xsOffset={0}>
      foobar
      <Bootstrap.Button bsStyle="success" bsSize="small">Bar</Bootstrap.Button>
      </Bootstrap.Col>
    </Bootstrap.Row>
  </Bootstrap.Grid>,
  document.getElementById("content")
);
