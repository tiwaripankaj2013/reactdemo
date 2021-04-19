import React from 'react';
import blogimg from '../../assets/blog-image-1.jpeg';
import {Img } from '../global/';
import {BlogWrap} from './styled';
import {Button} from '../global/';
import { Link } from 'react-router-dom';
const Blog = () => {
   return(
      <BlogWrap>
         <Img src={blogimg} alt="blog"/>
         <p>Blog component</p>
         <Button><Link className="link_btn" to="/about">Read More</Link></Button>
      </BlogWrap>
   )
}


export default Blog;