import nichole from "../assets/nichole.png";
import right from "../assets/ion_arrow-forward.svg";
import left from "../assets/ion_arrow-back.svg";

function Testimonials() {
  return (
    <div className="my-[40px] lg:mt-[100px] lg:p-[100px] testimonial pb-[40px]">
      <h2 className="pt-[40px] text-white text-[24px] lg:text-[40px] font-[600] text-center mb-[16px]">
        Testimonials
      </h2>
      <div className="py-[40px] px-[16px] mx-[16px] lg:text-[20px] rounded-[16px] text-[#ffffffcc] bg-[#4f467259]">
        <p>
          Lorem ipsum dolor sit amet consectetur. Aliquet scelerisque sem
          commodo turpis ipsum. Et tristique arcu arcu sed feugiat tempus purus
          nullam gravida. Vitae gravida dui gravida amet vitae. Malesuada
          quisque accumsan quis cursus enim. Commodo in sit platea eget
          lobortis. Suspendisse nulla leo eget fringilla justo ultrices.
          Vestibulum sed mi donec maecenas sit nisi. Etiam tincidunt ultrices
          sit sit sociis rutrum dui. Fames nunc quam ullamcorper cursus. Diam
          vitae euismod curabitur ullamcorper.
        </p>
        <div className="flex mt-[32px]">
          <img src={nichole} alt="Nichole" className="w-[40px] h-[40px]" />
          <div className="ml-[8px]">
            <p className="text-white text-[16px]">Nichole Jaymer</p>
            <p className="text-[14px]">Head of Noin Group</p>
          </div>
        </div>
      </div>
      <div className="flex-row flex items-center justify-center my-[40px]">
      <img src={left} alt="ArrowLeft" className="border border-white p-[8px] rounded-full mr-[8px]" />
      <img src={right} alt="ArrowRight"  className="bg-white p-[8px] rounded-full ml-[8px]"/>
      </div>
    </div>
  );
}

export default Testimonials;
