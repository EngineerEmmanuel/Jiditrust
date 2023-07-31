import maskGroup from "../Images/Mask group.png";
import maskGroupPhoneImage from "../Images/Mask group phone.png";
import Slide from 'react-reveal/Slide';
const DiscoverSection = () => {
    return ( 
        <section className="discover-section">
            <p>At JidiTrust, we believe that financial empowerment is not just a dream but a reality waiting to be created. </p>
            <h3>Discover our flexible solutions for your business</h3>
            <div className="jidi-hub-grid-con1">
                <Slide left>
                <div className="jidi-hub-image1-con">
                    <div className="circle-con1">
                        <img src={maskGroup} alt="" />

                    </div>
                    <div className="circle-con2">

                    </div>

                </div>
                </Slide>

                <Slide right>
                <div className="jidi-hub-text1-con">
                    <p className="unleash">Unleash Your Potential</p>
                    <h2>JidiHub</h2>
                    <p>JidiHub is a  youth and MSME hub located in Cape Coast and Tema, Ghana. Our comprehensive training programs and consultation services are designed to empower individuals with the necessary skills to excel in today's fast-paced business landscape.</p>
                    <p>Whether you are looking to enhance your digital skills, improve business management, develop your e-commerce capabilities, or dive into software development, deep learning, or artificial intelligence, JidiHub has a program tailored for you.</p>
                    <p>Our experienced team of experts is dedicated to providing guidance, mentorship, and access to valuable resources to help you thrive.</p>
                    <div className="jidi-hub-btn-con">
                        <button>LEARN MORE</button>
                    </div>

                </div>
                </Slide>
                
                
            </div>
            <div className="jidi-book-grid-con2">
                <Slide left>
                <div className="jidi-book-text-con">
                    <p className="empower">Empower Your Business Management</p>
                    <h2>JidiBook</h2>
                    <p>JidiBook is a gamified progressive web app designed to deliver localized financial literacy content and essential business management tools.</p>
                    <p>With JidiBook, you can enhance your understanding of financial concepts, keep track of your sales and expenses, manage your inventory, and gain valuable data-driven insights to make informed decisions. The app also provides a virtual point-of-sale system, goal-oriented savings features, and access to flexible micro-credit and insurance packages. </p>
                    <p>Our easy-to-understand content is available in local languages, ensuring maximum comprehension and engagement. Join thousands of micro-entrepreneurs who have transformed their businesses with JidiBook.</p>
                    <div className="jidi-book-btn-con">
                        <button>LEARN MORE</button>
                    </div>
                </div>
                </Slide>
                
                    <Slide right>
                    <div className="jidi-book-image2-con">
                    <div className="jidi-book-circle-con1">

                    </div>
                    <div className="jidi-book-circle-con2">
                    <img src={maskGroupPhoneImage} alt="Phone" />

                    </div>

                </div>
                    </Slide>
                

            </div>

        </section>
     );
}
 
export default DiscoverSection;