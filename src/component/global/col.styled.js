import styled,{css} from 'styled-components';

const Span = (span = 12) => {
   return css`
   flex-basis:${(100/12)*span}%;
   max-width:${(100/12)*span}%;
`
}
const Pull = (pull) => {
   return css`
   right:${(100/12)*pull}%;
`
}
const Push = (push) => {
   return css`
   left:${(100/12)*push}%;
`
}
const Offset = (offset) => {
   return css`
   margin-left:${(100/12)*offset}%;
`
}
const Col = styled.div`
position:relative;
display:block;
flex-grow:0;
box-sizing:border-box;
${(props) => Span(props.span)};
${(props) => Pull(props.pull)};
${(props) => Push(props.push)};
${(props) => Offset(props.offset)};
`

export {Span,Pull,Push,Offset,Col}