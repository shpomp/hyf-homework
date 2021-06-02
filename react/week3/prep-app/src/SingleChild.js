import PropTypes from "prop-types";

// With PropTypes.element you can specify that
// only a single child can be passed to a component as children.

class MyComponent extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return <div>{children}</div>;
  }
}

MyComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
