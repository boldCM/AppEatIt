import styled from "styled-components/macro";

const Layout = styled.div`
  height: 100vh;
  padding-bottom: 120px;
  height: 100vh;
`;

const ContentContainer = styled.div`
  overflow: auto;
  max-height: 100%;
  overscroll-behavior: contain;
`;

export { Layout, ContentContainer };
