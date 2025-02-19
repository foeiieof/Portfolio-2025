import { CiDesktop, CiMobile2 } from "react-icons/ci";
import Image from 'next/image'
const Projects = () => {
  return (
    <main className="container w-screen h-full m-auto flex flex-col justify-center items-center pt-12 pb-8 px-8  gap-4">

      <div className="w-full h-10 max-h-8 flex flex-col md:flex-row justify-between items-center my-2">
        <span className="md:text-[26px] font-bold">Projects</span>
        <p className="text-[12px] md:text-[14px] font-medium text-black/30">Got an idea for a project ?
          <span className="underline font-bold md:text-[16px] text-black">&nbsp;Let builds&apos;it</span></p>
      </div>
      {/* <span>Hello project Page !</span> */}

      {/* core project card */}
      <div className="flex flex-col justify-start items-center w-full h-[440px] md:h-[600px] bg-[#f4f4f4] p-4 pb-0 rounded-xl">
        {/* icon */}
        <div className="w-full h-fit flex items-center flex-row gap-2">
          <div className="w-8 h-8 flex justify-center items-center bg-white/30 shadow-md rounded-full" >
            <CiMobile2 size={20} className="text-black/30" />
          </div>
          <div className="w-8 h-8 flex justify-center items-center bg-white/30 shadow-md rounded-full" >
            <CiDesktop size={20} className="text-black/30" />
          </div>
        </div>
        <div className="flex flex-col justify-end items-center font-bold">
          <span className="text-black/80 text-[24px]">Name :</span>
          <span className="text-black/30 text-[20px]">desc :</span>
        </div>
        <div className="w-full h-full flex justify-center items-end">
          {/* setting w,h for scale cover size img */}
          <div className="relative w-[280px] md:w-[400px] h-[300px] md:h-[360px] flex justify-center items-end overflow-hidden">
            {/* setting w,h for size img */}
            <Image
              className="w-full h-full max-w-[260px] md:max-w-[360px] max-h-[280px] md:max-h-[360px] transition-transform duration-[250ms] object-cover object-top drop-shadow-[-5px_0px_4px_rgba(0,0,0,0.4)] hover:scale-[1.02] hover:drop-shadow-[-1px_-1px_4px_rgba(0,0,0,0.7)]"
              src={'/proj/proj_note.png'} width={220} height={260} alt='proj_note' />
          </div>
        </div>

        {/* <div className="relative w-full h-full flex flex-col justify-end items-center hover:scale-[1.02] overflow-hidden"> */}
        {/*   <Image */}
        {/*     className=" w-[220px] h-[260px]  transition-all ease-in-out duration-[260ms] object-cover object-top drop-shadow-[-5px_0px_4px_rgba(0,0,0,0.6)] hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.65)]" */}
        {/*     src={'/proj/proj_note.png'} width={180} height={180} alt='proj_note' /> */}
        {/* </div> */}
      </div>

      {/* core project card */}
      <div className="flex flex-col justify-start items-center w-full h-[440px] md:h-[600px] bg-[#f4f4f4] p-4 rounded-xl">
        {/* icon */}
        <div className="w-full h-fit flex items-center flex-row gap-2">
          <div className="w-8 h-8 flex justify-center items-center bg-white/30 shadow-md rounded-full" >
            <CiMobile2 size={20} className="text-black/30" />
          </div>
          <div className="w-8 h-8 flex justify-center items-center bg-white/30 shadow-md rounded-full" >
            <CiDesktop size={20} className="text-black/30" />
          </div>
        </div>
      </div>

    </main>
  )
}
export default Projects
