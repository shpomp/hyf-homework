import PropTypes from "prop-types";

const Button = ({ color, text, onclickprop }) => {
  return (
    <button
      onClick={onclickprop}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "violet",
  text: "add",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onclickprop: PropTypes.func,
};

export default Button;
