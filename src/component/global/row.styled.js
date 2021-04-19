import styled,{css} from 'styled-components';
const Gutter = (gutter) => {
   return css `
   @media (min-width:768px){
      margin-left:${0.75*gutter/-2}rem;
      margin-right:${0.75*gutter/-2}rem;
   }
   @media (min-width:1440px){
      margin-left:${1*gutter/-2}rem;
      margin-right:${1*gutter/-2}rem;
   }
   @media (min-width:1920px){
      margin-left:${1.5*gutter/-2}rem;
      margin-right:${1.5*gutter/-2}rem;
   }
   >div{
   @media (min-width:768px){
      padding-left:${0.75*gutter/2}rem;
      padding-right:${0.75*gutter/2}rem;
   }
   @media (min-width:1440px){
      padding-left:${1*gutter/2}rem;
      padding-right:${1*gutter/2}rem;
   }
   @media (min-width:1920px){
      padding-left:${1.5*gutter/2}rem;
      padding-right:${1.5*gutter/2}rem;
   }
   }
   `
}
const Align  = (align) => {
   switch(align){
      case  ' top':
         return css`
         align-items: flex-start;
         `
      case  'bottom':
         return css`
         align-items: flex-end;
         `
         default :
         return css`
         vertical-align:middle;
         `
   }
}
const Justify  = (justify) => {
   switch(justify){
      case  'center':
         return css`
         justify-content:center;
         `
      case  'space-around':
         return css`
         justify-content:space-around;
         `
      case  'space-between':
         return css`
         justify-content:space-between;
         `
         default :
         return css`
         justify-content:start;
         `
   }
}

const Wrap = (wrap) =>{
   switch(wrap){
      case 'wrap':
         return css`
         flex-wrap:wrap;
         `
      case 'nowrap':
         return css`
         flex-wrap:nowrap;
         `
      case 'wrap-reverse':
         return css`
         flex-wrap:wrap-reverse;
         `
         default:
            return css`
            flex-wrap:wrap;
            `
   }
}
const Row = styled.div`
display:flex;
flex-direction:row;
${(props) => Gutter(props.gutter)};
${(props) => Wrap(props.wrap)};
${(props) => Justify(props.justify)};
${(props) => Align(props.align)};
`
export {Row};