import React from 'react'
import {FaFacebookF,FaInstagram,FaTwitter,FaLinkedin, FaYoutube, FaCode} from 'react-icons/fa'
import ContentWrapper from '../contentWrapper/ContentWrapper'

import './style.scss'
function Footer() {
  
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
        Indulge in a world of entertainment like never before with Movix, the pinnacle of video streaming platforms. Seamlessly designed and meticulously crafted by Ishan Arora © Movix is your gateway to a universe of captivating movies and TV shows, curated to cater to your every entertainment whim.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href='https://www.youtube.com/@tier3vale'><FaYoutube /></a>
                    </span>
                    <span className="icon">
                        <a href='https://www.instagram.com/ishn__/'><FaInstagram /></a>
                    </span>
                    <span className="icon">
                        <a href='https://leetcode.com/aroraishan51/'><FaCode /></a>
                    </span>
                    <span className="icon">
                        <a href='https://www.linkedin.com/in/ishan-arora-2000/'><FaLinkedin/></a>
                    </span>
                </div>
      </ContentWrapper>
    </footer>
  )
}

export default Footer