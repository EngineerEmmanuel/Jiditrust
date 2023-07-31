import jidiTrustLogo from "../Images/JidiTrust-logo.png";
import Bounce from 'react-reveal/Bounce';
const Footer = () => {
    return ( 
        <footer>
            <Bounce bottom>
            <div className="footer-grid-con">
                <div className="footer-logo-con">
                    <img src={jidiTrustLogo} alt="JidiTrust logo" />
                    <p>At JidiTrust, we believe that financial empowerment is not just a dream but a reality waiting to be created.</p>
                    <p>Join us on this transformative journey and let us empower you to achieve your aspirations, unlock your potential, and create a brighter future.</p>
                    <p>Together, we can build a stronger, more prosperous Africa.</p>
                </div>
                <div className="footer-services-con">
                    <h3>Services</h3>
                    <ul>
                        <li>Financial Literacy Education</li>
                        <li>Digital Skills Training</li>
                        <li>Business Consultation</li>
                        <li>Mentorship</li>
                        <li>Resources</li>
                    </ul>
                </div>
                <div className="footer-links-con">
                    <h3>Links</h3>
                    <ul>
                        <li>JidiHub</li>
                        <li>JidiBook</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="footer-address-con">
                    <ul>
                        <li className="mail"><a href="mailto:info@jiditrust.com">info@jiditrust.com</a></li>
                        <li className="tele"><a href="tel:+233 556 607259">+233 556 607259</a></li>
                        <li>BFS 29 <br/>Kotokuraba Market, Cape Coast</li>
                        <li>I/S 10, <br/>Community One, Tema </li>
                        <li>6th Floor, Oskart Place, <br/> Ring Road Central, Circle, Accra</li>
                    </ul>
                </div>
            </div>
            </Bounce>

            <div className="footer-social-links-con">
                <ul>
                    <li><a href="https://web.facebook.com/JidiTrust">Facebook</a></li>
                    <li><a href="https://www.instagram.com/jiditrust/">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/company/jiditrust/">LinkedIn</a></li>
                </ul>
            </div>
            
        </footer>
     );
}
 
export default Footer;