import React from 'react';
import Banner from '../banner'
import Blog from '../blog';
import {Row, Col} from '../global/';
const Home =  () => {
   return(
      <>
      <Banner />
      <h1 className="text_center">React</h1>
      <p className="text_center">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
      <Row gutter={1}>
         <Col span={6}>
            <Blog/>
         </Col>
         <Col span={6}>
            <Blog/>
         </Col>
      </Row>
      </>
   )

}

export default Home;
