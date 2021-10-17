import React from 'react';
import './Sidebar.css'
import logo from '../../images/logo.png'
import footerImg from '../../images/footer-img.png'
import home from '../../images/icon/home.png'
import about from '../../images/icon/about.png'
import service from '../../images/icon/service.png'
import blog from '../../images/icon/blog.png'
import portfolio from '../../images/icon/portfolio.png'
import contact from '../../images/icon/contact.png'
import email from '../../images/icon/email.png'


const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo-container">
                <a href="/"><img src={logo} alt="" /></a>
            </div>
            <div className="menu-sidebar">
                <aside className="w-100">
                    <ul className="menu-container">
                        <li><a href="/"><img src={home} alt="" /> Home</a></li>
                        <li><a href="/"><img src={about} alt="" /> About</a></li>
                        <li><a href="/"><img src={service} alt="" /> Services</a></li>
                        <li><a href="/"><img src={portfolio} alt="" /> Portfolio</a></li>
                        <li><a href="/"><img src={blog} alt="" /> Blogs</a></li>
                        <li><a href="/"><img src={contact} alt="" /> Contact</a></li>
                    </ul>
                </aside>
            </div>
            <div className="sidebar-footer">
                <div className="sidebar-footer-container d-flex align-items-center">
                    <div><img src={footerImg} className="img-fluid" alt="" /></div>
                    <div className="footer-info">
                        <h5>Naim</h5>
                        <p><img src={email} alt="" /> Programmer.naim1@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;