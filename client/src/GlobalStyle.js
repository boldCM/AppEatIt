import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`



*,*::before,*::after{
  box-sizing:border-box
}

:root {
--gradient-color: linear-gradient(#F2D3AC, #FFFFFF );
--active-color: #037F8C;
--primary-color: #F8E4CF;
--secondary-color: #F2D3AC;
--text-color: #262626
}


button {
  border: none;
  background: none;
}

button:focus {
  outline: none;
}

body {
font-family: 'Encode Sans', sans-serif;
-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
font-size: 16px;
font-weight: 300;
background: var(--gradient-color);
background-repeat: no-repeat;
background-attachment: fixed;
margin: 0;
color: var(--text-color);
height: 100vh;
overflow-x: hidden;
}




h1{
font-size: 24px;
font-weight: 500;
}

h2{
font-size: 18.72px;
font-weight: 400;
}
a {
    text-decoration: none;
    color: var(--text-color)
}
hr{
  border: none;
  height: 1px;
}

ul {
  list-style-type:none;
}
  
`;

export default GlobalStyle;
