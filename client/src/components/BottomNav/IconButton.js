import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 300;
  img {
    padding-right: 7px;
  }
`;

const IconButton = ({ iconSrc, iconAlt, onClick, content }) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={iconSrc} alt={iconAlt} />
      {content}
    </StyledButton>
  );
};

export default IconButton;

IconButton.propTypes = {
  iconSrc: PropTypes.string,
  iconAlt: PropTypes.string,
  onClick: PropTypes.func,
  content: PropTypes.string,
};
