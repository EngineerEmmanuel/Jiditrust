import customerReviewData from "./CustermerReviewData";

const CustomerRevie = () => {
    return ( 
        <section className="customer-review-section">
            <h2>Customer Remarks</h2>
            <div className="customer-review-grid-con">
                {
                    customerReviewData.map((customerReviewsInfo)=>{
                        return(
                            <div className="review-con">
                                <h3>{customerReviewsInfo.titleText}</h3>
                                <p>{customerReviewsInfo.reviewText}</p>
                                <div className="review-img-name-location-con">
                                    <div className="review-img-con">
                                        <img src={customerReviewsInfo.reviewImg} alt="Customers that have used JidiTrust`s services" />
                                    </div>
                                    <p>{customerReviewsInfo.name} <br/> <span> {customerReviewsInfo.location}, Ghana</span> </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
     );
}
 
export default CustomerRevie;