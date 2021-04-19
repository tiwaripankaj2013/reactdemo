import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col,H5 } from '../global/';
import { Footer, Copyright, MenuList, MenuListItem } from './styled'
const FooterComponent = () => {
    return (
        <Footer>
            <div className="footer-content">
                <div className="container">
                    <Row>
                        <Col span={5}>
                            <div className="mx_2">
                                <H5>React demo web application</H5>
                            </div>
                        </Col>
                        <Col span={7}>
                            <Row>
                                <Col span={3}>
                                    <div className="widget">
                                        <H5>Quick Links</H5>
                                        <MenuList>
                                            <MenuListItem><Link to="#">Home </Link></MenuListItem>
                                            <MenuListItem><Link to="#">About</Link></MenuListItem>
                                            <MenuListItem><Link to="#">Contact us</Link></MenuListItem>
                                        </MenuList>
                                    </div>
                                </Col>
                                <Col span={3}>
                                    <div className="widget">
                                        <H5>Pages</H5>
                                        <MenuList>
                                            <MenuListItem><Link to="#">Home</Link></MenuListItem>
                                            <MenuListItem><Link to="#">Blog</Link></MenuListItem>
                                            <MenuListItem><Link to="#">Services</Link></MenuListItem>
                                        </MenuList>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            <Copyright>
                <div className="text_center">&copy; 2021 Responsive React Demo app. All Rights Reserved. </div>
            </Copyright>
        </Footer>
    )
}
export default FooterComponent;