import hero from "../assets/hero.png";
import heroDesktop from "../assets/heroDesktop.png";
import AnimatedDiv from "./Animation";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Hero() {
  return (
    <div className="mt-[32px] mx-[16px] px-[16px] flex flex-col items-center">
      <AnimatedDiv>
      <h1 className="text-[#fff] font-[600] text-[32px] lg:text-[70px] lg:mx-[38px] text-center">
        Transform Your Images into Stunning Websites with Neptis
      </h1>
      </AnimatedDiv>
      <p className="mt-[16px] text-[16px] text-center text-[#ffffffcc]">
        "Harness the power of AI to turn your website designs into reality"
      </p>
      <button className="my-[40px] py-[16px] lg:py-[20px] px-[40px] rounded-[90px] bg-[#a522c3] text-white">
        Get Started
      </button>
      <div className="w-[100%] block lg:hidden">
        <LazyLoadImage
          src={hero}
          alt="neptis"
          className="border rounded-[10px] p-[8px] w-[100%]"
        />
      </div>
      <div className="w-[100%] hidden lg:block">
        <LazyLoadImage
          src={heroDesktop}
          alt="neptis"
          className="border rounded-[10px] p-[8px] w-[100%]"
        />
      </div>
    </div>
  );
}

export default Hero;
