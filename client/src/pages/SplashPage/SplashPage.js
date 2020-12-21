import React from "react";
import DiamondActiveSrc from "../../assets/diamondActive.svg";
import { Diamond } from "../../components/WeekListItem/WeekListItem";
import styled from "styled-components/macro";

const CenterLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AnimatedDiamond = styled(Diamond)`
background-image: url(${DiamondActiveSrc});
  height: 10rem;
  width: 10rem;
  padding-right: 5px;
  padding-bottom: 15px;
  animation: turner 2.5s ease-in alternate 1 none running;
}
@keyframes turner {
  0%, 100% {
    transform: scale(1) ;
  }
25%{
    transform: scale(1.5) rotate(-360deg);
}

75%{
    transform: scale(0.8);
}
}
`;

const Splashpage = () => {
  return (
    <CenterLogo>
      <AnimatedDiamond>AppEatIt</AnimatedDiamond>
    </CenterLogo>
  );
};

export default Splashpage;
