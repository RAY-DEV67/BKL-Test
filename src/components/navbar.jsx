import logo from "../assets/bkllogo.png";
import hamburger from "../assets/hamburger.svg";
function Navbar() {
  return (
    <div className="flex flex-row justify-between py-[16px] px-[20px] navbar">
      <div className="flex items-center">
        <img src={logo} alt="Logo" />
        <p className="text-white ml-[4px]">NEPTIS</p>
      </div>
      <img src={hamburger} alt="hamburger" className="lg:hidden" />
      <ul className="hidden lg:flex w-[528px] justify-between items-center text-white">
        <li>Home</li>
        <li>Features</li>
        <li>How it works</li>
        <li>Pricing</li>
        <button className="py-[20px] px-[40px] rounded-[90px] bg-[#fff] text-[#221c38]">Get Started</button>
      </ul>
    </div>
  );
}

export default Navbar;
