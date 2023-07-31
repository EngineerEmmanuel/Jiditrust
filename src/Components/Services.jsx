import data from "./ServicesData";
import Bounce from 'react-reveal/Bounce';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const Services = () => {
    return ( 
        <section className="service-section">
            <h2>Our Services</h2>
            <p>At JidiTrust, we understand that every individual and business is unique. That's why we offer customized <br/> training programs and consulting services to address your specific needs and goals.We offer a range of services to support your financial literacy and business growth goals.</p>
            <Bounce top>
            <div className="services-grid-con">
                {
                    data.map((dataInfo)=>{
                       return(
                        <div className="services-con">
                            <h3>{dataInfo.text}</h3>
                            <p>{dataInfo.para}</p>
                            <p className="read">{dataInfo.read} <ArrowOutwardIcon/></p>
                        </div>
                       ) 
                    })
                }
            </div>
            </Bounce>
            

        </section>
     );
}
 
export default Services;