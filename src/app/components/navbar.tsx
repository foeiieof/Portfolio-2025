import { CgProfile } from "react-icons/cg";
import { IoChatbubbleEllipses } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="w-full bg-white h-[55px] flex flex-row justify-between items-center px-[15px] fixed">
      <div className="w-[40px] h-[40px] flex flex-col justify-center items-center bg-[#f4f4f4] rounded-full">
        <CgProfile color="#232323" size={23} />
      </div>
      <div className="w-[40px] h-[28px] flex flex-col justify-center items-center bg-[#f4f4f4] rounded-full">
        <IoChatbubbleEllipses
          color="#7e7e7e" size={18} />
      </div>

    </nav>
  );
}

export default Navbar;
