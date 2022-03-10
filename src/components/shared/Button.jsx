import { isDisabled } from "@testing-library/user-event/dist/utils";
import PropTypes from "prop-types";

function Button({ children, version, isDisabled, type }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDesabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
