import React from "react";
import PropTypes from "prop-types";

const IconButton = ({ iconSrc, iconAlt, onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={iconSrc} alt={iconAlt} />
    </button>
  );
};

export default IconButton;

IconButton.propTypes = {
  iconSrc: PropTypes.string,
  iconAlt: PropTypes.string,
  onClick: PropTypes.func,
};
