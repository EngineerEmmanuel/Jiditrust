import BlogResourcesSection from "./Components/BlogResourcesSection";
import Consultation from "./Components/Consultation";
import CustomerReview from "./Components/CustomerReview";
import DiscoverSection from "./Components/DiscoverSection";
import Footer from "./Components/Footer";
import HereSection from "./Components/HeroSection";
import Navigation from "./Components/Navigation";
import Services from "./Components/Services";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <HereSection/>
      <Services/>
      <DiscoverSection/>
      <CustomerReview/>
      <BlogResourcesSection/>
      <Consultation/>
      <Footer/>
    </div>
  );
}

export default App;
