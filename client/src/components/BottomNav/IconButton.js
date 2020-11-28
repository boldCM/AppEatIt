import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const IconButton = ({ iconSrc, iconAlt }) => {
  return (
    <button>
      <img src={iconSrc} alt={iconAlt} />
    </button>
  );
};

export default IconButton;

IconButton.propTypes = {
  iconSrc: PropTypes.string,
  iconAlt: PropTypes.string,
};
