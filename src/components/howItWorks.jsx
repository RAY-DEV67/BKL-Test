import heroDesktop from "../assets/heroDesktop.png";
import hero from "../assets/hero.png";
import Ellipse from "../assets/Ellipse.svg";
import AnimatedDiv from "./Animation";
import { LazyLoadImage } from "react-lazy-load-image-component";

function HowItWorks() {
  return (
    <div className="mt-[40px]">
      <h2 className="text-center text-white mx-[20px] text-[24px] font-[600] mb-[40px]">
        How It Works
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-start mt-[40px] gap-x-[20px] mx-[20px] lg:w-[460px]">
          <div className="flex justify-center flex-col items-center">
            <img src={Ellipse} alt="Ellipse" className="w-[25px]" />
            <div className="w-[1px] h-[130px] bg-[#a522c3]"></div>
            <img src={Ellipse} alt="Ellipse" className="w-[25px]" />
            <div className="w-[1px] h-[130px] bg-[#a522c3]"></div>
            <img src={Ellipse} alt="Ellipse" className="w-[25px]" />
          </div>

          <div>
            <div className="">
              <h3 className="mb-[16px] text-left text-white text-[16px] font-[600]">
                AI Powered Website Generation
              </h3>
              <p className="text-[#C6c2D6] text-left text-[14px] leading-[21px]">
                Create stunning and functional websites effortlessly with our
                AI-powered website generation feature, which seamlessly
                transforms web designs into fully operational sites.
              </p>
            </div>
            <div className="my-[40px]">
              <h3 className="mb-[16px] text-left text-white text-[16px] font-[600]">
                Customizable Design Elements
              </h3>
              <p className="text-[#C6c2D6] text-left text-[14px] leading-[21px]">
                Customize every aspect of your website with ease using our wide
                range of design elements, ensuring a unique and personalized
                online presence.
              </p>
            </div>
            <div className="">
              <h3 className="mb-[16px] text-left text-white text-[15px] font-[600]">
                User-Friendly Interface
              </h3>
              <p className="text-[#C6c2D6] text-left text-[14px] leading-[21px]">
                Creating a website has never been easier. Our user-friendly
                interface ensures a seamless and intuitive website building
                experience.
              </p>
            </div>
          </div>
        </div>
        <AnimatedDiv>
        <div className="mx-[20px] my-[40px] block lg:hidden">
        <LazyLoadImage
          src={hero}
          alt="neptis"
          className="border rounded-[10px] p-[8px] w-[100%]"
        />
      </div>
        </AnimatedDiv>
      <AnimatedDiv>
      <div className="hidden lg:block  h-[30px]  w-[970px] mr-[-270px] ml-[170px]">
        <LazyLoadImage
          src={heroDesktop}
          alt="neptis"
          className="border rounded-[10px] p-[8px] w-[100%]"
        />
      </div>
      </AnimatedDiv>
      </div>
    </div>
  );
}

export default HowItWorks;
