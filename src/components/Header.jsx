import PropTypes from "prop-types";
function Header(props) {
  return (
    <div>
      <header>
        <div className="container">
          <h2>{props.text}</h2>
        </div>
      </header>
    </div>
  );
}

Header.defaultProps = {
  text: "feedback ui",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
