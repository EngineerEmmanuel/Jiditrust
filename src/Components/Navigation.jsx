import jidiTrustLogo from "../Images/JidiTrust-logo.png";


const Navigation = () => {
    return ( 
        <nav>
            <div className="nav-con">
                <div className="logo">
                    <img src={jidiTrustLogo} alt="JidiTrust logo" />
                </div>
                <div className="ul-nav-btn-con">
                    <ul>
                        <li>Services</li>
                        <li>Solutions</li>
                        <li>Blog</li>
                    </ul>
                    <div className="nav-btn-con">
                        <button>GET IN TOUCH</button>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navigation;