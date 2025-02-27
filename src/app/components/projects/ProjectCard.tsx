import React from 'react'
import Image from 'next/image'
import { CiDesktop, CiMobile2 } from 'react-icons/ci'
import { CgChevronRight } from 'react-icons/cg'

export interface ProjectCardProps {
  header: string;
  desc: string;
  mainimg: string;
  leftimg: string;
  rightimg: string;
  phone: boolean;
  desktop: boolean;
}

export const ProjectCard = ({ header, desc, mainimg, leftimg, rightimg, phone, desktop }: ProjectCardProps) => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-[440px] md:h-[600px] bg-[#f4f4f4] p-4 rounded-xl">
      <div className="w-full h-fit flex items-center flex-row gap-2">
        {phone &&
          <div className="w-8 h-8 flex justify-center items-center bg-white/30 shadow-md rounded-full" >
            <CiMobile2 size={20} className="text-black/30" />
          </div>}
        {desktop &&
          <div className="w-8 h-8 flex justify-center items-center bg-white/30 shadow-md rounded-full" >
            <CiDesktop size={20} className="text-black/30" />
          </div>}
      </div>
      <div className="flex flex-col justify-end items-center font-bold">
        <span className="text-black/80 text-[24px]">{header}</span>
        <span className="text-black/30 text-[20px]">{desc}</span>
        <div className=""></div>
        <div className="w-[48px] h-[30px] flex justify-center items-center bg-white rounded-2xl mt-2 hover:rotate-6 hover:shadow-card transition delay-icon duration-icon"><CgChevronRight size={24} color={"#7e7e7e"} /></div>
      </div>
      <div className="w-full h-full flex justify-center items-end">
        {/* setting w,h for scale cover size img */}
        <div className="group relative w-[430px] md:w-[800px] h-[288px] md:h-[450px] flex justify-center items-end overflow-hidden group">
          {/* setting w,h for size img */}
          <Image
            className="z-20 w-full h-full max-w-[260px] md:max-w-[360px] max-h-[280px] md:max-h-[360px] transition-transform duration-[250ms] object-cover object-top drop-shadow-[-5px_0px_4px_rgba(0,0,0,0.4)] group-hover:scale-[1.02] hover:drop-shadow-[-1px_-1px_4px_rgba(0,0,0,0.7)]"
            src={mainimg} width={220} height={260} alt='proj_note' />
          <Image
            className="blur-[1px] group-hover:blur-0 group-hover:scale-125 group-hover:rotate-[8deg] absolute w-[100px] md:w-[140px]  h-[230px] md:h-[300px] bottom-0 right-6 md:right-20 rotate-[18deg] transition-transform duration-[250ms]"
            src={leftimg} width={160} height={160} alt=""
          />
          <Image
            className="blur-[1px] group-hover:blur-0 group-hover:scale-125 group-hover:-rotate-[10deg] absolute w-[100px] md:w-[140px] md:h-[300px] h-[230px] -bottom-2  left-6 md:left-24 -rotate-[18deg] transition-transform duration-[250ms]"
            src={rightimg} width={160} height={160} alt=""
          />
        </div>
      </div>
    </div>
  )
}
