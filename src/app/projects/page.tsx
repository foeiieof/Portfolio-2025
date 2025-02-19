import { CiDesktop, CiMobile2 } from "react-icons/ci";
const Projects = () => {
  return (
    <main className="container w-screen h-screen m-auto flex flex-col justify-center items-center">
      <div className="w-full h-10 flex flex-row justify-between items-center">
        <span className="text-[26px] font-bold">Projects</span>
        <p className="text-[14px] font-medium text-black/30">Got an idea for a project? <span className="underline font-bold text-[16px] text-black">Let builds&apos;it</span></p>
      </div>
      {/* <span>Hello project Page !</span> */}
      {/* core */}
      <div className="flex flex-col justify-start items-center w-full h-[600px] bg-[#f4f4f4] p-4 rounded-xl">
        {/* icon */}
        <div className="w-full flex items-center flex-row h-12 gap-2">
          <div className="w-10 h-10 flex justify-center items-center bg-white/30 shadow-md rounded-full" >
            <CiMobile2 size={25} className="text-black/30" />
          </div>
          <div className="w-10 h-10 flex justify-center items-center bg-white/30 shadow-md rounded-full" >
            <CiDesktop size={25} className="text-black/30" />
          </div>
        </div>

      </div>
    </main>
  )
}
export default Projects
