import heroImage from "../Images/pexels-jopwell.png";
const HereSection = () => {
    return ( 
        <section className="hero-section">
            <div className="hero-grid-con">
                <div className="hero-text-con">
                    <h1>Empowering <br/> Your Financial Journey</h1>
                    <p>At JidiTrust, we believe that financial empowerment is the key to unlocking your full potential. Our mission is to provide you with the knowledge, tools and support you need to succeed in your financial journey</p>
                    <div className="hero-btn-con">
                        <button>GET IN TOUCH</button>
                    </div>
                </div>
                <div className="hero-img-con">
                    <div className="img-crircle-con">
                    <img src={heroImage} alt="A young female professional" />

                    </div>
                </div>
                
            </div>
            <div className="hero-bottom-para-con">
                <p>Whether you are a micro-entrepreneur looking to grow your business or an individual <br/> seeking to improve your financial well-being, JidiTrust is here for you.</p>
            </div>
            
        </section>
     );
}
 
export default HereSection;