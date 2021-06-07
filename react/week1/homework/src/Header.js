import PropTypes from "prop-types";
import Button from "./Button";

// const Header = (props) => {
//   return <header>{props.title}</header>;
// };

const Header = ({ title }) => {
  return (
    <header style={headingStyle} className="header">
      {" "}
      <h1>{title}</h1>
      <Button />
    </header>
  );
};

// trrying out defaults, styles and types:
Header.defaultProps = {
  title: "To do list:",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headingStyle = {
  color: "grey",
  fontSize: "15px",
};

export default Header;
