import styled from "styled-components/macro";

const Layout = styled.div`
  padding: 65px 0 56px 0;
  height: 100vh;
  @media screen and (max-width: 430px) {
    padding-top: 95px;
  }
`;

const ContentContainer = styled.div`
  overflow: auto;
  max-height: 100%;
`;

export { Layout, ContentContainer };
