import React from 'react';
import { NavLink } from "react-router-dom";
import { MenuItem, Menu, Head, Logo } from './styled';
import { Row, Col } from '../global/';
const Header = () => {
    return (
        <Head>
            <Row gutter={1}>
                <Col span={3}>
                    <div className="mx_2">
                        <Logo>Logo</Logo>
                    </div>
                </Col>
                <Col span={9}>
                    <nav>
                        <Menu>
                            <MenuItem><NavLink exact to="/">Home</NavLink></MenuItem>
                            <MenuItem><NavLink to="about">About Us</NavLink></MenuItem>
                            <MenuItem><NavLink to="services">Services</NavLink></MenuItem>
                            <MenuItem><NavLink to="concept">Concept</NavLink></MenuItem>
                            <MenuItem><NavLink to="gallery">Gallery</NavLink></MenuItem>
                            <MenuItem><NavLink to="whatwedo">What we Do</NavLink></MenuItem>
                            <MenuItem><NavLink to="contact">Contact Us</NavLink></MenuItem>
                        </Menu>
                    </nav>
                </Col>
            </Row>
        </Head>
    );
}
export default Header;