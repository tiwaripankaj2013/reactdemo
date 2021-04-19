import styled from 'styled-components';
const BlogWrap = styled.div`
   position:relative;
   transition:0.3s ease-in-out;
   overflow:hidden;
   p,button{
      color:#fff;
      position:absolute;
      left:50%;
      top:50%;
      font-weight:600;
      font-size:1.25rem;
      transform:translate(-50%,-50%);
   }
   button{top:70%;}
   &:hover{
      img{
         transform: scale(1.1);
         transition:0.2s ease-in-out;
      }
   }

`
export{
   BlogWrap
}