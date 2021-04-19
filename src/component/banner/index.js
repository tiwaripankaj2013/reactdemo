import React from 'react';
import banner from '../../assets/banner.jpeg';
import {BannerWraper,BannerHeading} from './styled';
const Banner = () => {
    return (
        <BannerWraper>
            <img src={banner} alt="banner" />
            <BannerHeading>Learn React and redux demo web application</BannerHeading>
        </BannerWraper>
    )
}

export default Banner;