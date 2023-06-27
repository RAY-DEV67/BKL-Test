import Features from "../components/features";
import Hero from "../components/heroSection";
import Navbar from "../components/navbar";

function LandingPage() {
    return ( <div className="bg-[#221c38]">
        <Navbar/>
        <Hero/>
        <Features/>
    </div> );
}

export default LandingPage;