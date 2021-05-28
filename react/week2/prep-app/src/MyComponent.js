import React, { Component } from "react";

export default class MyComponent extends Component {
  componentDidMount() {
    console.log("I mounted"); // as soon as this is rendered to the page
    // you would put fetch API here
  }

  componentWillUnmount() {
    console.log("I was unmounted");
  }
  componentDidUpdate(prevProps) {
    console.log("I updated", prevProps, this.props);
  }

  render() {
    return <div>My class component</div>;
  }
}
