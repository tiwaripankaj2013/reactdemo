import styled from 'styled-components';
const Footer = styled.footer`
      display: block;
      position: relative;
      background-color: #181818;
      font-size: 14px;
      line-height: 32px;
`;
const Copyright = styled.div`
    min-height: 80px;
    padding: 30px 0;
    background-color: #1E1E1E;
    color: #484848;
`;
const MenuList = styled.ul`
    clear: both;
    display: block;
    position: relative;
    list-style: none;
    margin-top: 0;
    margin-bottom: 1rem;
    padding:0;
` ;
const MenuListItem  = styled.li`
       line-height: 32px;
       font-weight: 400;
       a{
         color: #999;
         text-decoration: none;
         &:hover,
         &:focus,
         &.active{
            outline: none;
            color: #E91E63;
         }
       }
`; 
export {
   Footer,
   Copyright,
   MenuList,
   MenuListItem,
}