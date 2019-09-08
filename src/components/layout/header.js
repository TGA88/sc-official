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
              <a href="#song1" className={`navlink`}>
                Discover More
              </a>
              <a href="#home1" className={`navlink`}>
                See Your Home
              </a>
            </div>
            <div className={`nav -mobile`}>

            
            <ul className={`menu`}>
              <li className={`item`}>
                <a className={`navlink`}>Discover More</a>
                <ul className={`submenu`}>
                  <li className={`item`}>
                    <a className={`navlink`} href="#song1">สบาย สบาย</a>
                  </li>
                  <li className={`item`}>
                    <a className={`navlink`} href="#song2">คนไม่มีแฟน</a>
                  </li>
                  <li className={`item`}>
                    <a className={`navlink`} href="#song3">ซ่อมได้</a>
                  </li>
                  <li className={`item`}>
                    <a className={`navlink`} href="#song4">เล่าสู่กันฟัง</a>
                  </li>
                  <li className={`item`}>
                    <a className={`navlink`} href="#song5">หมั่นคอยดูแลรักษาหัวใจ</a>
                  </li>
                </ul>
              </li> 
              <li className={`item`}>
                <a className={`navlink`}>See Your Home</a>

                <ul className={`submenu`}>
                  <li className={`item`}>
                    <a className={`navlink`} href="#home1">โครงการบ้าน หมายเลข1</a>
                  </li>
                  <li className={`item`}>
                    <a className={`navlink`} href="#home2">โครงการบ้าน หมายเลข2</a>
                  </li>
                  <li className={`item`}>
                    <a className={`navlink`} href="#home3">โครงการบ้าน หมายเลข3</a>
                  </li>
                </ul>
              </li>
            </ul>
            </div>
          </div>
        )
    }
}
