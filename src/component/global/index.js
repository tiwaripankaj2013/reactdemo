import styled from 'styled-components';

export { Row } from './row.styled';
export { Col } from './col.styled';


const Img = styled.img`
      max-width:100%;
`
const Button = styled.button`
      cursor: pointer;
      color:#fff;
      border-radius:1rem;
      padding:0.75rem 1rem;
      font-weight:600;
      background:#c54370;
      border: 1px solid transparent;
      &:hover,&:focus&.active{
      background:#E91E63;
      border-color:#E91E63;
      }
`
const H5 = styled.h5`
      font-size:1.25rem;
      font-weight:600;
      color:#fff;
      letter-spacing:0.2px;
      margin-bottom:0.25rem;
`
export{
   Img,
   Button,
   H5,
}