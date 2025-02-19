"use client"
import { IoChatbubbleEllipses } from "react-icons/io5";
import Image from 'next/image'
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CgChevronLeft } from "react-icons/cg";

const Navbar = () => {
  const url = usePathname()
  console.log('url:', url)
  const [path, setPath] = useState(false)
  const route = useRouter()
  useEffect(() => {
    if (!path && url.length > 1) { setPath(true) }
    else { setPath(false) }
  }, [url])

  return (
    <nav className="z-50 w-full bg-transparent h-[55px] flex flex-row justify-between items-center px-[15px] fixed">
      {path ?
        <div
          onClick={() => { route.push('/') }}
          className="cursor-pointer w-[40px] h-[28px] rounded-full flex flex-col justify-center items-center bg-[#f4f4f4]">
          <CgChevronLeft
            color="#7e7e7e" size={18} />
        </div>
        : <></>}
      <div className="relative w-[50px] h-[50px] flex flex-col justify-center items-center bg-[#f4f4f4] rounded-full">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-400/30 opacity-25"></span>
        <Image className="w-[40px] h-[40px] object-cover rounded-full object-bottom z-30" src={'/prof/profile.jpg'} alt="" width={35} height={35} />
      </div>
      <div className="w-[40px] h-[28px] rounded-full flex flex-col justify-center items-center bg-[#f4f4f4]">
        <IoChatbubbleEllipses
          color="#7e7e7e" size={18} />
      </div>

    </nav>
  );
}

Navbar.displayName = "Navbar"
export default React.memo(Navbar);
