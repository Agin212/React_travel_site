import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    join the adventure newsletter to recive our best vacction deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe anytime
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="your email" className="footer-input">

                        </input>
                        <Button buttonStyle='btn--outline'>SUBSCRIBE</Button> 
                    </form>
                </div>

            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">

                    <div className="footer-link-items">
                        <h2>ABOUT US</h2>

                        <Link to='/sign-up'>HOW IT WORKS</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of services</Link>
                    </div>

                    <div className="footer-link-items">
                        <h2>CONTACT US</h2>

                        <Link to='/sign-up'>contact</Link>
                        <Link to='/'>support</Link>
                        <Link to='/'>destinations</Link>
                        <Link to='/'>sponsorship</Link>
                    
                    </div>

                </div>

                 <div className="footer-link-wrapper">

                    <div className="footer-link-items">
                        <h2>VIDEOS</h2>

                        <Link to='/sign-up'>submit video</Link>
                        <Link to='/'>ambasidors</Link>
                        <Link to='/'>agencies</Link>
                        <Link to='/'>influncer</Link>
                        
                    </div>

                    <div className="footer-link-items">
                        <h2>SOCIAL MEDIA</h2>

                        <Link to='/sign-up'>instagram</Link>
                        <Link to='/'>facebook</Link>
                        <Link to='/'>youtube</Link>
                        <Link to='/'>twitter</Link>
                        
                    </div>

                </div>
               






            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">TRVL © 2022</small> 
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" 
                        to="/" target="_blank" 
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i> </Link> 
                            <Link className="social-icon-link instagram" 
                        to="/" target="_blank" 
                        aria-label="Instagram"
                        >
                            <i className="fab fa-instagram-f"></i> </Link> 

                            <Link className="social-icon-link twitter" 
                        to="/" target="_blank" 
                        aria-label="Twitter"
                        >
                            <i className="fab fa-twitter-f"></i> </Link> 

                            <Link className="social-icon-link youtube" 
                        to="/" target="_blank" 
                        aria-label="Youtube"
                        >
                            <i className="fab fa-youtube-f"></i> </Link> 

                            <Link className="social-icon-link linkedin" 
                        to="/" target="_blank" 
                        aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin-f"></i> </Link> 
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Footer
