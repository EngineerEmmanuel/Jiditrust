import blogData from "./BlogResourcesSectionData";

const BlogResourcesSection = () => {
    return ( 
        <section className="blog-resources-section">
            <div className="br-view-all-btn-con">
                <p>Blog & Resources</p>
                <button>view all articles</button>
            </div>
            <div className="blog-resources-grid-con">
                {
                    blogData.map((bInfo)=>{
                        return(
                            <div className="blog-item" key={bInfo.id}>
                                <div className="blog-img-con">
                                    <img src={bInfo.img} alt={bInfo.btnText} />
                                </div>
                                <div className="blog-item-btn-h2-con">
                                <button>{bInfo.btnText}</button>
                                <h2>{bInfo.headerText}</h2>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        </section>
     );
}
 
export default BlogResourcesSection;