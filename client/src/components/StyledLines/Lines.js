import styled from "styled-components/macro";

const DiamondLine = styled.hr`
  width: 5rem;
  margin: 0 5px 1px -2px;
  color: var(--secondary-color);
  background-color: var(--secondary-color);
`;

const OverlayLine = styled(DiamondLine)`
  margin: 0 10px 0 auto;
`;

const UnderlineHeader = styled.hr`
  color: var(--active-color);
  background-color: var(--active-color);
  width: 100px;
  margin-top: -7px;
  /* spacing looked best with the odd number of -7px */
`;

const UnderlineHeaderOverlay = styled(UnderlineHeader)`
  margin: -7px 0 20px auto;
`;

export { DiamondLine, OverlayLine, UnderlineHeader, UnderlineHeaderOverlay };
