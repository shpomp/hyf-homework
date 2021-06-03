import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, addItem, propShowAdd }) => {
  return (
    <header className="header">
      {" "}
      <h1>{title}</h1>
      <Button
        text={propShowAdd ? "x" : "add"}
        color={propShowAdd ? "grey" : "pink"}
        onclickprop={addItem}
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
