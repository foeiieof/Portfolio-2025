"use client"
import { BsGithub, BsLinkedin, BsLine, BsFillSendPlusFill } from "react-icons/bs"
import { CgChevronRight } from "react-icons/cg"
import { ReactHTMLElement, useRef } from "react"
import { motion, useMotionValueEvent, useScroll, useMotionValue, useVelocity, useSpring, useTransform, useAnimationFrame } from "motion/react"
import { wrap } from "motion"
import Image from "next/image"
import clsx from "clsx"
import { a } from "motion/react-client"
// import { laravel } from "public/logo/laravel.svg" 

type IconCardProps = {
  src: string;
  w: number;
  h: number;
}
// <Image src={"logo/nestjs.svg"}   className="bg-white p-2 rounded-xl hover:scale-[1.1]" width={50} height={50} alt=""/>
const IconCard = ({src,w,h}:IconCardProps) => {
  return( <Image src={src} width={w} height={h} className="bg-white p-2 rounded-xl hover:scale-[1.1]" alt="" />) 
}

type IconInCardProps = {
  children: React.ReactNode;
  className?: string | undefined; 
}

const IconInCard = ({children, className}:IconInCardProps) => {
  return (<div className={clsx(`w-[42px] h-[42px] rounded-lg bg-[#dadada] flex justify-center items-center hover:scale-[1.05] transition delay-icon duration-icon ease-in-out`,className)}> {children} </div>)
}

interface ParallaxProps {
    children: string;
    baseVelocity: number;
}

const Parallax = ({children, baseVelocity} :ParallaxProps) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollYPlus = useSpring(scrollY, {stiffness:100, damping: 30, restDelta: 0.001})
    const scrollVelocity = useVelocity(scrollYPlus);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
   if (velocityFactor.get() < 0) {
         directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) { directionFactor.current = 1; }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy); });

    return (
      <div className="overflow-hidden space-x-[-2px] leading-[0.8] m-0 whitespace-nowrap flex flex-nowrap">
        <motion.div className="font-semibold uppercase text-[64px] flex whitespace-nowrap flex-nowrap" style={{ x }}>
          <span className={"block mr-[30px]"}>{children} </span>
          <span className={"block mr-[30px]"}>{children} </span>
          <span className={"block mr-[30px]"}>{children} </span>
          <span className={"block mr-[30px]"}>{children} </span>
          </motion.div>
      </div>);
}

const Home = () => {
    const {scrollYProgress} = useScroll()
    useMotionValueEvent(scrollYProgress, "change", (val)=>{console.log("Y: ", val )})

  return (
  <div className="grid grid-rows-[20px_1fr_20px] sm:items-start justify-items-center min-h-screen p-8 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full sm:px-8 px-2 overflow-y-hidden">
      <section className="w-full sm:h-[450px] h-full  flex sm:flex-row flex-col bg-red  justify-center sm:items-start items-center gap-4 ">
          {/* <div></div> */}
          <div className="flex flex-col justify-start items-center gap-4">
            <div className="w-[280px] h-[320px] bg-[#f4f4f4] rounded-xl"></div> 
            <div className="w-[280px] h-[100px] bg-[#f4f4f4] rounded-xl flex flex-col justify-between items-center py-4">
              <span className="text-[#353535] text-[22px] font-bold">About me</span>
             <div className="w-[48px] h-[30px] flex justify-center items-center bg-white rounded-2xl mt-2"><CgChevronRight size={24} color={"#7e7e7e"} /></div> 
            </div> 
          </div>
          
          <div className="flex flex-col justify-start items-center gap-4 ">
            <div className="w-[280px] h-[435px] bg-[#f4f4f4] rounded-xl flex flex-col justify-end items-center py-4">
              <span className="text-[#353535] text-[22px] font-bold">Projects</span>
              <span className="text-[#7e7e7e] text-[14px] font-bold">IOS, WebSite, more...</span>
              <div className="w-[48px] h-[30px] flex justify-center items-center bg-white rounded-2xl mt-2"><CgChevronRight size={24} color={"#7e7e7e"} /></div> 
            </div>
          </div>

          <div className="flex flex-col justify-start items-center gap-4">
            <div className="w-[280px] h-[350px] bg-[#f4f4f4] rounded-xl flex flex-col justify-end items-center py-4 px-6 text-center">
              <span className="text-[#353535] text-[22px] font-bold">Service I Offer</span>
              <p className="text-[#7e7e7e] text-[16px] font-bold">I could help you with a few things ...</p>
              <div className="w-[48px] h-[30px] flex justify-center items-center bg-white rounded-2xl mt-2"><CgChevronRight size={24} color={"#7e7e7e"} /></div> 
            </div>
              <div className="w-[280px] h-[70px] bg-[#f4f4f4] rounded-xl flex flex-row justify-center items-center p-4 gap-2">
                <IconInCard className={"hover:bg-[#353535]"}><BsGithub size={30} color={"#fff"}/></IconInCard>
                <IconInCard className={"hover:bg-[#50A0E6]"}><BsLinkedin size={30} color={"#fff"}/></IconInCard>
                <IconInCard className={"hover:bg-[#68E651]"}><BsLine size={30} color={"#fff"}/></IconInCard>
                <IconInCard className={"hover:bg-[#E65060]"}><BsFillSendPlusFill size={30} color={"#fff"}/></IconInCard>
            </div>
          </div>
        </section>
        <section className="w-full h-[100%] max-w-[90vw] flex flex-col bg-red sm:h-[250px] justify-center items-start gap-4 relative overflow-hidden">
          <Parallax baseVelocity={-5}>Hello Everyone!</Parallax>
          <Parallax baseVelocity={5}>you can call me &quot;Foei&quot;</Parallax>
        </section>
        <section className="w-full sm:h-[450px] h-full  flex sm:flex-row flex-col bg-red  justify-center sm:items-start items-center gap-4">
         <div className="flex flex-col justify-start items-center gap-4">
          <div className="w-[280px] h-[320px] bg-[#f4f4f4] rounded-xl"></div> 
          </div>
        </section>
        <section className="w-full sm:h-[450px] h-full  flex flex-col bg-red  justify-center items-center gap-4">
          <span className="text-[#353535] font-bold text-[16px] uppercase">POWERING THE BEST TOOLS</span>
          <div className="sm:w-full sm:flex sm:flex-row sm:flex-wrap grid grid-cols-4 place-content-around gap-4 bg-[#f4f4f4] p-4 rounded-xl sm:gap-6 ">
            <IconCard src="logo/nodejs.svg" w={50} h={50} />
            <IconCard src="logo/express.svg" w={50} h={50} />
            <IconCard src="logo/nestjs.svg" w={50} h={50} />
            <IconCard src="logo/next.svg" w={50} h={50} />
            <IconCard src="logo/laravel.svg" w={50} h={50} />
            <IconCard src="logo/redis.svg" w={50} h={50} />
            <IconCard src="logo/kafka.svg" w={50} h={50} />
            <IconCard src="logo/mongo.svg" w={50} h={50} />
            <IconCard src="logo/postgresql.svg" w={50} h={50} />
            <IconCard src="logo/prisma.svg" w={50} h={50} />
            <IconCard src="logo/jestjs.svg" w={50} h={50} />
            <IconCard src="logo/docker.svg" w={50} h={50} />
            <IconCard src="logo/aws.svg" w={50} h={50} />
            <IconCard src="logo/figma.svg" w={50} h={50} />
          </div>
        </section>
      </main>
  </div>
  )
}
export default Home
