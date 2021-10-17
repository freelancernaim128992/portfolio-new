import React from 'react';
import './HomeInfo.css'
import fb from '../../images/icon/fb.png'
import twitter from '../../images/icon/twitter.png'
import instra from '../../images/icon/intra.png'
import linkedIn from '../../images/icon/linkedIn.png'
import homeImg from '../../images/home-bg.png'
import download from '../../images/icon/download.png'
import { Link } from 'react-router-dom';

const HomeInfo = () => {
    return (
        <section className="home-section">
            <div className="home-container d-flex align-items-center">
                <div>
                    <div className="home-image d-flex justify-content-center">
                        <img className="img-fluid" src={homeImg} alt="" />
                    </div>
                    <div className="home-info text-center">
                        <h1>Arafat Islam Naim</h1>
                        <h5>I'm a Junior Front-End Web Developer</h5>
                        <div className="social-link">
                            <ul className="d-flex justify-content-center">
                                <li><a href="/"><img src={fb} alt="" /></a></li>
                                <li><a href="/"><img src={twitter} alt="" /></a></li>
                                <li><a href="/"><img src={instra} alt="" /></a></li>
                                <li><a href="/"><img src={linkedIn} alt="" /></a></li>
                            </ul>
                        </div>
                        <Link to="/"><button className="btn mt-3 btn-brand"><img src={download} alt="" /> Download Resume</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeInfo;