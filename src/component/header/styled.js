import styled from 'styled-components';


const Head = styled.header`
         background-color: #181818;
         position: relative;
         width: 100%;
`
const Logo = styled.h5`
        font-size:2rem;
        font-weight:600;
        margin:0;
        color:#fff;
`
const Menu  = styled.ul`
         list-style: none;
         padding: 0;
         margin: 0;
         float:right;
`
const MenuItem  = styled.li`
    border: 0;
    display:inline-block;
    transition: all .3s ease;
    margin: 0.5rem 0.75rem;
    padding:0.5rem;
    position: relative;
    a{
    color:#fff;
    padding: 10px 12px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.6px;
    text-decoration:none;
    border-bottom: 1px solid transparent;
    &:focus,
    &:hover,
    &.active{
    transition: all .3s ease;
    color: #E91E63;
    border-bottom-color:#E91E63;}
    }
`
export{
   Head,
   Logo,
   Menu,
   MenuItem,

}