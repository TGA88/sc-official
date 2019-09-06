import React, { Component } from 'react'

import './footer.scss';
 import logo from 'app/asset/d_pic/Logo - SC Asset-1.svg';
 import fbIcon from 'app/asset/d_pic/Icon - Social - Facebook-1.svg';
 import instagramIcon from 'app/asset/d_pic/Icon - Social - Instagram-1.svg';
 import youtubeIcon from 'app/asset/d_pic/Icon - Social - YouTube-1.svg';
 import twitterIcon from 'app/asset/d_pic/Icon - Social - Twitter-1.svg';



export default class Footer extends Component {
    render() {
        return (
          <div className={"sc-footer"}>
              <div className={`box -bottomline`}>
                <img className={`logo`} src={logo} alt="logo-footer"></img>
                <div className="nav">
                  <a href="https://www.scasset.com" className={`navlink`}>
                    Official Website
                  </a>
                  <a
                    href="https://www.scasset.com/baanruejai/"
                    className={`navlink`}
                  >
                    BaanRuejai
                  </a>
                  <a href="http://www.scable.co.th" className={`navlink`}>
                    SC Able
                  </a>
                </div>
              </div>
              <div className={`box`}>
                <div className={"copyright"}>
                  © 2019 SC Asset Corporation PLC
                </div>
                <div className={`nav -social`}>
                  <a
                    href="https://www.facebook.com/scasset"
                    className={`navlink`}
                  >
                    <img className={`icon`} src={fbIcon} alt="FB"></img>
                  </a>
                  <a
                    href="https://www.instagram.com/scasset"
                    className={`navlink`}
                  >
                    <img
                      className={`icon`}
                      // src={`${process.env.ASSET_PATH}m_teaser/Icon-Instagram-1.svg`}
                      src={instagramIcon}
                      alt="instagram"
                    ></img>
                  </a>
                  <a
                    href="https://www.youtube.com/scassetonline"
                    className={`navlink`}
                  >
                    <img
                      className={`icon`}
                      // src={`${process.env.ASSET_PATH}m_teaser/Icon-YouTube-1.svg`}
                      src={youtubeIcon}
                      alt="Youtube"
                    ></img>
                  </a>
                  <a href="https://twitter.com/sc_asset" className={`navlink`}>
                    <img
                      className={`icon`}
                      // src={`${process.env.ASSET_PATH}m_teaser/Icon-Twitter-1.svg`}
                      src={twitterIcon}
                      alt="Twitter"
                    ></img>
                  </a>
                </div>
              </div>
          </div>
        )
    }
}
