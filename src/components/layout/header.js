import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className={`sc-header`}>
                <div className={`box`}>
                    <img className={`logo`} src="" alt="header-logo"></img>
                    <div className={`nav`}>
                        <a href="#song1" className={`navlink`}>Discover More</a>
                        <a href="#home1" className={`navlink`}>See Your Home</a>
                    </div>
                </div>
            </div>
        )
    }
}
