import styled from "styled-components/macro";

const DiamondLine = styled.hr`
  width: 80px;
  margin: 0 7px 0 -2px;
  background-color: var(--secondary-color);
  @media screen and (max-width: 400px) {
    width: 60px;
  }
`;

const OverlayLine = styled(DiamondLine)`
  margin: 0 10px 0 auto;
`;

const UnderlineHeader = styled.hr`
  background-color: var(--active-color);
  width: 100px;
  margin-top: -7px;
  /* spacing looked best with the odd number of -7px */
`;

const UnderlineHeaderOverlay = styled(UnderlineHeader)`
  margin: -7px 0 20px auto;
`;

export { DiamondLine, OverlayLine, UnderlineHeader, UnderlineHeaderOverlay };
