import React from 'react';
import {Img,Row,Col} from '../global/';
import ReactImg from '../../assets/images.jpeg';
import ReactImg2 from '../../assets/blog-image-2.jpeg';
const About = () => {
return(
   <div className="mx_4 text_center">
      <Row gutter={1}>
         <Col span="12">
         <h2>Component-Based</h2>
         </Col>
         <Col span={6}>
         <Img src={ReactImg} alt="react" />
         </Col>
         <Col span={6}>
         <Img src={ReactImg} alt="react" />
         </Col>
         <Col span={12}>
         <Img src={ReactImg2} alt="react" />
         </Col>

      </Row>
   
   
   <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
   <p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
</div>
)
}
export default About;