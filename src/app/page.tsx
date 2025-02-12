"use client"
import { BsGithub, BsLinkedin, BsLine, BsFillSendPlusFill } from "react-icons/bs"
import { CgChevronRight } from "react-icons/cg"
import { useRef } from "react"
import { motion, useMotionValueEvent, useScroll, useMotionValue, useVelocity, useSpring, useTransform, useAnimationFrame, MotionProps } from "motion/react"
import { wrap } from "motion"
import Image from "next/image"
import clsx from "clsx"

type IconCardProps = {
  w: number;
  h: number;
  src?: string;
  t?: string;
}

type IconInCardProps = {
  children: React.ReactNode;
  className?: string | undefined;
}

const IconInCard = ({ children, className }: IconInCardProps) => {
  return (<div className={clsx(`w-[100px] h-[50px] rounded-lg flex justify-center items-center hover:scale-[1.05] transition delay-icon duration-icon ease-in-out`, className)}> {children} </div>)
}

interface ParallaxProps {
  children: string | React.ReactNode;
  baseVelocity: number;
}


const IconCard = ({ src, w, h, t }: IconCardProps) => {
  return (
    <div
      className="w-[140px] h-[180px] font-semibold hover:font-bold flex flex-col justify-evenly items-center 
      gap-2 bg-[#f4f4f4] rounded-xl py-2 grayscale hover:grayscale-0 text-[#b0b0b0] hover:text-black ">
      {src ?
        <motion.div whileHover={{ scale: 0.8, }} >
          <Image src={src} width={w} height={h} className="rounded-2xl bg-white p-4" alt="" />
        </motion.div> : ""}
      {t ? <span className=" text-[16px]">{t}</span> : ""}
    </div>
  )
}

const TextParallax = ({ children, baseVelocity }: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollYPlus = useSpring(scrollY, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const scrollVelocity = useVelocity(scrollYPlus);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) { directionFactor.current = 1; }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });
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

const CardParallax = ({ children, baseVelocity = 5 }: { children: React.ReactNode; baseVelocity?: number }) => {
  const baseX = useMotionValue(0);
  const directionFactor = useRef<number>(1);
  const duplicateCount = 5;

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 5000);
    baseX.set(baseX.get() + moveBy);
  });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  return (
    <div className="overflow-hidden leading-[0.8] m-0 whitespace-nowrap flex flex-row w-[90vw]">
      <motion.div
        className="font-semibold uppercase text-[64px] flex whitespace-nowrap flex-row"
        style={{ x }}
      >
        {Array(duplicateCount).fill(children).map((child, index) => (
          <span key={index} className="px-4">{child}</span>
        ))}
      </motion.div>
    </div>
  );
};


const elementStyle = {
  "style1": {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.2, delay: 0.3, ease: [0, 0.71, 0.2, 1.01], },
  },
  "style2": {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01], }
  },
  "style3": {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, delay: 0.4, ease: [0, 0.71, 0.2, 1.01], }
  },
  "style4": {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, delay: 0.3, ease: [0, 0.71, 0.2, 1.01], }
  },
  "style5": {
    initial: { opacity: 0, scale: 0.3 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, delay: 0.3, ease: [0, 0.71, 0.2, 1.01], }
  }

}

const MotionDiv = ({ children, className, ...props }: { children?: React.ReactNode; className: string } & MotionProps) => {
  return <motion.div className={className} {...props}>{children}</motion.div>
}

const Home = () => {
  const { scrollYProgress } = useScroll()
  useMotionValueEvent(scrollYProgress, "change", (val) => { console.log("Y: ", val) })
  return (
    <div className="grid grid-rows-[20px_1fr_20px] sm:items-start justify-items-center min-h-screen p-8 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full sm:px-8 px-2 overflow-y-hidden">
        <section className="w-full sm:h-[450px] h-full  flex sm:flex-row flex-col bg-red  justify-center sm:items-start items-center gap-4 ">

          <div className="flex flex-col justify-start items-center gap-4">
            <MotionDiv
              className="w-[280px] h-[320px] bg-[#f4f4f4] rounded-xl"
              {...elementStyle["style2"]}
            ></MotionDiv>
            <MotionDiv
              className="w-[280px] h-[100px] bg-[#f4f4f4] rounded-xl flex flex-col justify-between items-center py-4"
              {...elementStyle["style1"]}>
              <span className="text-[#353535] text-[22px] font-bold">About me</span>
              <div className="w-[48px] h-[30px] flex justify-center items-center bg-white rounded-2xl mt-2 hover:-rotate-6 hover:shadow-card transition delay-icon duration-icon"><CgChevronRight size={24} color={"#7e7e7e"} /></div>
            </MotionDiv>
          </div>

          <div className="flex flex-col justify-start items-center gap-4 ">
            <MotionDiv
              className="w-[280px] h-[435px] bg-[#f4f4f4] rounded-xl flex flex-col justify-end items-center py-4"
              {...elementStyle["style3"]}
            >
              <span className="text-[#353535] text-[22px] font-bold">Projects</span>
              <span className="text-[#7e7e7e] text-[14px] font-bold">IOS, WebSite, more...</span>
              <div className="w-[48px] h-[30px] flex justify-center items-center bg-white rounded-2xl mt-2 hover:-rotate-6 hover:shadow-card transition delay-icon duration-icon"><CgChevronRight size={24} color={"#7e7e7e"} /></div>
            </MotionDiv>
          </div>

          <div className="flex flex-col justify-start items-center gap-4">
            <MotionDiv
              className="w-[280px] h-[350px] bg-[#f4f4f4] rounded-xl flex flex-col justify-end items-center py-4 px-6 text-center"
              {...elementStyle["style4"]}>
              <span className="text-[#353535] text-[22px] font-bold">Service I Offer</span>
              <p className="text-[#7e7e7e] text-[16px] font-bold">I could help you with a few things ...</p>
              <div className="w-[48px] h-[30px] flex justify-center items-center bg-white rounded-2xl mt-2 hover:-rotate-6 hover:shadow-card transition delay-icon duration-icon"><CgChevronRight size={24} color={"#7e7e7e"} /></div>
            </MotionDiv>
            <MotionDiv
              className="w-[280px] h-[70px] bg-[#f4f4f4] rounded-xl flex flex-row justify-center items-center p-4 gap-2"
              {...elementStyle["style5"]}
            >

              <IconInCard className={"hover:bg-[#353535]"}><BsGithub size={30} color={"#fff"} /></IconInCard>
              <IconInCard className={"hover:bg-[#50A0E6]"}><BsLinkedin size={30} color={"#fff"} /></IconInCard>
              <IconInCard className={"hover:bg-[#68E651]"}><BsLine size={30} color={"#fff"} /></IconInCard>
              <IconInCard className={"hover:bg-[#E65060]"}><BsFillSendPlusFill size={30} color={"#fff"} /></IconInCard>
            </MotionDiv>
          </div>
        </section>
        <section className="w-full h-[100%] max-w-[90vw] flex flex-col bg-red sm:h-[250px] justify-center items-start gap-4 relative overflow-hidden">

          <TextParallax baseVelocity={-5}>Hello Everyone!</TextParallax>
          <TextParallax baseVelocity={5}><span className="hover:drop-shadow-2xl hover:text-white">you can call me &quot;Foei&quot;</span></TextParallax>

        </section>
        <section className="w-full sm:h-[450px] h-full  flex sm:flex-row flex-col bg-red  justify-center sm:items-start items-center gap-4">
          <div className="flex flex-col justify-start items-center gap-4">
            <div className="w-[280px] h-[320px] bg-[#f4f4f4] rounded-xl"></div>
          </div>
        </section>
        <section className="w-full sm:h-[450px] h-full  flex flex-col bg-red  justify-center items-center gap-4">
          <span className="text-[#353535] font-bold text-[16px] uppercase">POWERING THE BEST TOOLS</span>
        </section>
        <CardParallax baseVelocity={4}>
          <motion.div className="sm:w-full flex flex-row gap-4 overflow-hidden">
            <IconCard src="logo/nodejs.svg" w={80} h={80} t="Node.js" />
            <IconCard src="logo/express.svg" w={80} h={80} t="Express.js" />
            <IconCard src="logo/nestjs.svg" w={80} h={80} t="Nest.js" />
            <IconCard src="logo/next.svg" w={80} h={80} t="Next.js" />
            <IconCard src="logo/laravel.svg" w={80} h={80} t="Laravel" />
            <IconCard src="logo/redis.svg" w={80} h={80} t="Redis" />
            <IconCard src="logo/kafka.svg" w={80} h={80} t="Kafka" />
            <IconCard src="logo/mongo.svg" w={80} h={80} t="Mongo" />
            <IconCard src="logo/postgresql.svg" w={80} h={80} t="PostgreSQL" />
            <IconCard src="logo/prisma.svg" w={80} h={80} t="Prisma.js" />
            <IconCard src="logo/jestjs.svg" w={80} h={80} t="Jest" />
            <IconCard src="logo/docker.svg" w={80} h={80} t="Docker" />
            <IconCard src="logo/aws.svg" w={80} h={80} t="AWS" />
            <IconCard src="logo/figma.svg" w={80} h={80} t="Figma" />
          </motion.div>
        </CardParallax>
      </main>
    </div >
  )
}
export default Home
