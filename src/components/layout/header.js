import React, { Component } from 'react'
import './header.scss';

import logo from 'app/asset/d_pic/Logo - Homes for All Birds.svg';
import m_logo from 'app/asset/d_pic/HOMES FOR ALL BIRDS Symbol Logo.svg'
export default class Header extends Component {
    render() {
        return (
            <div className={`sc-header`}>
               <img className={`logo`} src={logo} alt="header-logo"></img>
               <img className={`mobile-logo`} src={m_logo} alt="header-logo"></img>
                    <div className={`nav`}>
                        <a href="#song1" className={`navlink`}>Discover More</a>
                        <a href="#home1" className={`navlink`}>See Your Home</a>
                    </div>
            </div>
        )
    }
}
