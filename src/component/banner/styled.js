import styled from 'styled-components';
const BannerWraper = styled.div`
   position:relative;
   max-height:25rem;
   overflow:hidden;
   img{width:100%;}
`
const BannerHeading = styled.h1`
      font-weight:600;
      font-size:2rem;
      letter-spacing:0.5px;
      color:#E91E63;
      text-align:center;
      text-transform:uppercase;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-shadow: 2px 3px 1px #181818;

`
export {
   BannerWraper,
   BannerHeading
}