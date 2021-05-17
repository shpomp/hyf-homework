import PropTypes from "prop-types";
// more action to come
const Button = ({ color, text }) => {
  return (
    <button className="btn" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};
// above trying out color as prop

Button.defaultProps = {
  color: "pink",
  text: "add",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onclickprop: PropTypes.func,
};

export default Button;
