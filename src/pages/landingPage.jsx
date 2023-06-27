import Features from "../components/features";
import Footer from "../components/footer";
import Hero from "../components/heroSection";
import HowItWorks from "../components/howItWorks";
import Navbar from "../components/navbar";
import Pricing from "../components/pricing";
import Testimonials from "../components/testimonials";

function LandingPage() {
    return ( <div className="bg-[#221c38]">
        <Navbar/>
        <Hero/>
        <Features/>
        <HowItWorks/>
        <Testimonials/>
        <Pricing/>
        <Footer/>
    </div> );
}

export default LandingPage;