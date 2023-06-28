import AnimatedDiv from "./Animation";

function Features() {
  return (
    <div className="my-[40px]">
      <h2 className="text-[24px] font-[600] text-center text-white px-[8px] my-[40px]">
        Amazing Features for You
      </h2>
      <div className="flex flex-col lg:flex-row mx-[40px] lg:gap-y-[0px] lg:gap-x-[20px] gap-y-[20px]">
        <AnimatedDiv>
        <div className="rounded-[8px] p-[20px] bg-[#4f467340]">
          <h3 className="mb-[16px] text-center text-white text-[15px] font-[600]">
            AI Powered Website Generation
          </h3>
          <p className="text-[#C6c2D6] text-center text-[14px] leading-[21px]">
            Create stunning and functional websites effortlessly with our
            AI-powered website generation feature, which seamlessly transforms
            web designs into fully operational sites.
          </p>
        </div>
        </AnimatedDiv>
        <AnimatedDiv>
        <div className="rounded-[8px] p-[20px] bg-[#4f467340]">
          <h3 className="mb-[16px] text-center text-white text-[15px] font-[600]">
            Customizable Design Elements
          </h3>
          <p className="text-[#C6c2D6] text-center text-[14px] leading-[21px]">
            Customize every aspect of your website with ease using our wide
            range of design elements, ensuring a unique and personalized online
            presence.
          </p>
        </div>
        </AnimatedDiv>
        <AnimatedDiv>
        <div className="lg:h-[184px] rounded-[8px] p-[20px] bg-[#4f467340]">
          <h3 className="mb-[16px] text-center text-white text-[15px] font-[600]">
            User-Friendly Interface
          </h3>
          <p className="text-[#C6c2D6] text-center text-[14px] leading-[21px]">
            Creating a website has never been easier. Our user-friendly
            interface ensures a seamless and intuitive website building
            experience.
          </p>
        </div>
        </AnimatedDiv>
        <AnimatedDiv>
        <div className="lg:h-[184px] rounded-[8px] p-[20px] bg-[#4f467340]">
          <h3 className="mb-[16px] text-center text-white text-[15px] font-[600]">
            Responsive Website Outputs
          </h3>
          <p className="text-[#C6c2D6] text-center text-[14px] leading-[21px]">
            Our platform automatically adapts your website's design and layout
            to different screen sizes, providing optimal viewing experiences on
            desktops, laptops, tablets, and smartphones.
          </p>
        </div>
        </AnimatedDiv>
      </div>
    </div>
  );
}

export default Features;
