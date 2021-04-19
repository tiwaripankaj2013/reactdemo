import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap');
* :focus{
	outline:none;
}
html,
body {
	width: 100%;
	height: 100%;
	line-height: 1.5;
	font-family: 'Nunito', sans-serif;
	font-size: 16px;
   font-weight: 400;
   margin:0;
   padding:0;
}
button,
h1,
h2,
h3,
h4,
h5,
h6,
label {font-family: 'Nunito', sans-serif;}
.text_center{text-align:center;}
.mx_1{margin-left:0.25rem;margin-right:0.25rem;}
.mx_2{margin-left:0.5rem;margin-right:0.5rem;}
.mx_3{margin-left:0.75rem;margin-right:0.75rem;}
.mx_4{margin-left:1rem;margin-right:1rem;}
.link_btn{
      color:#fff;
      font-weight:600;
      font-size:1.25rem;
      text-decoration:none;
}
`;
export default GlobalStyle;