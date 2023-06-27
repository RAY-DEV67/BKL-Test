import logo from "../assets/bkllogo.png";
import hamburger from "../assets/hamburger.svg";
function Navbar() {
  return (
    <div className="bg-[#221c38] flex flex-row justify-between py-[16px] px-[20px]">
      <div className="flex items-center">
        <img src={logo} alt="Logo" />
        <p className="text-white ml-[4px]">NEPTIS</p>
      </div>
      <img src={hamburger} alt="hamburger" />
    </div>
  );
}

export default Navbar;
