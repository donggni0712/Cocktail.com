import React from 'react'
import bannerImg from './images/Banner.jpg'
import './Banner.css';

const Banner = () =>{
    return (
    <div className="Banner_total">
        <img className="Banner_img"src={bannerImg} />
    </div>
    );
}


export default Banner;
