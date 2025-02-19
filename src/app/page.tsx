"use client"
import clsx from "clsx"
import { wrap } from "motion"
import Image from "next/image"
import { CgChevronRight } from "react-icons/cg"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { BsGithub, BsLinkedin, BsLine, BsFillSendPlusFill } from "react-icons/bs"
import { motion, useScroll, useMotionValue, useVelocity, useSpring, useTransform, useAnimationFrame, MotionProps, } from "motion/react"

type IconCardProps = {
  w: number;
  h: number;
  src?: string;
  t?: string;
}
type IconInCardProps = {
  children: React.ReactNode;
  className?: string | undefined;
  rf?: string;
}
interface ParallaxProps {
  children: string | React.ReactNode;
  baseVelocity: number;
}
const TextSlice: { vlc: number, text: string }[] = [
  { vlc: 2, text: "Hello Everyone!" },
  { vlc: -2, text: "you can call me 'Foei' " },
]

const ContactList: { element: React.ReactNode, style: string, ref: string }[] = [
  { element: <BsGithub size={30} color={"#fff"} />, style: "hover:bg-[#353535] w-[50px]", ref: "https://github.com/foeiieof" },
  { element: <BsLinkedin size={30} color={"#fff"} />, style: "hover:bg-[#50A0E6] w-[50px]", ref: "https://www.linkedin.com/in/akarawat-chantarasangnawee-74134321b/" },
  { element: <BsLine size={30} color={"#fff"} />, style: "hover:bg-[#68E651] w-[50px]", ref: "https://line.me/ti/p/utG3m8Qh7x" },
  { element: <BsFillSendPlusFill size={30} color={"#fff"} />, style: "hover:bg-[#E65060] w-[50px]", ref: "akarawat.chant@gmail.com" },
]

const ImageTools: { src: string, w: number, h: number, desc: string }[] = [
  { src: "logo/nodejs.svg", w: 80, h: 80, desc: "Node.js" },
  { src: "logo/express.svg", w: 80, h: 80, desc: "Express.js" },
  { src: "logo/nestjs.svg", w: 80, h: 80, desc: "Nest.js" },
  { src: "logo/next.svg", w: 80, h: 80, desc: "Next.js" },
  { src: "logo/laravel.svg", w: 80, h: 80, desc: "Laravel" },
  { src: "logo/redis.svg", w: 80, h: 80, desc: "Redis" },
  { src: "logo/kafka.svg", w: 80, h: 80, desc: "Kafka" },
  { src: "logo/mongo.svg", w: 80, h: 80, desc: "Mongo" },
  { src: "logo/postgresql.svg", w: 80, h: 80, desc: "PostgreSQL" },
  { src: "logo/prisma.svg", w: 80, h: 80, desc: "Prisma.js" },
  { src: "logo/jestjs.svg", w: 80, h: 80, desc: "Jest" },
  { src: "logo/docker.svg", w: 80, h: 80, desc: "Docker" },
  { src: "logo/aws.svg", w: 80, h: 80, desc: "AWS" },
  { src: "logo/figma.svg", w: 80, h: 80, desc: "Figma" },
]

const elementStyle = {
  "style1": {
    initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.2, delay: 0.3, ease: [0, 0.71, 0.2, 1.01], },
  },
  "style2": {
    initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01], }
  },
  "style3": {
    initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, delay: 0.4, ease: [0, 0.71, 0.2, 1.01], }
  },
  "style4": {
    initial: { opacity: 0, scale: 0.7 }, animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, delay: 0.3, ease: [0, 0.71, 0.2, 1.01], }
  },
  "style5": {
    initial: { opacity: 0, scale: 0.3 }, animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, delay: 0.3, ease: [0, 0.71, 0.2, 1.01], }
  }
}

const images: { src: string, type: "phone" | "desktop" }[] = [
  { src: "/proj/proj_landn_exc.png", type: "desktop" },
  { src: "/proj/proj_note_exc.png", type: "phone" },
  { src: "/proj/proj_crm_exc.png", type: "desktop" },
  { src: "/proj/proj_ai_exc.png", type: "phone" },
  { src: "/proj/proj_crm2_exc.png", type: "desktop" },
  { src: "/proj/proj_loyal_exc.png", type: "phone" },
];

const MotionDiv = ({ children, className, ...props }: { children?: React.ReactNode; className: string } & MotionProps) => {
  return <motion.div className={className} {...props}>{children}</motion.div>
}

const IconInCard = ({ children, className, rf }: IconInCardProps) => {
  return <motion.a
    initial={{ rotate: 0 }}
    whileHover={{ rotate: [0, 10, -10, 0], }}
    transition={{ duration: 0.5, ease: "easeInOut", repeat: Infinity }}
    className={clsx(`w-[100px] h-[50px] rounded-lg flex justify-center items-center transition delay-icon duration-icon ease-in-out`, className)}
    onClick={() => {
      window.open(rf)
    }}
  >
    {children}
  </motion.a>
}

const IconCard = ({ src, w, h, t }: IconCardProps) => {
  return (
    <div
      className="w-[140px] h-[180px] font-semibold hover:font-bold flex flex-col justify-evenly items-center 
      gap-2 bg-[#f4f4f4] rounded-xl py-2 grayscale hover:grayscale-0 text-[#b0b0b0] hover:text-black ">
      {src ? <motion.div whileHover={{ scale: 0.8, }} >
        <Image src={src} width={w} height={h} className="rounded-2xl bg-white p-4" alt="" />
      </motion.div> : ""} {t ? <span className=" text-[16px]">{t}</span> : ""}
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
    <div className="overflow-hidden leading-[0.8] m-0 whitespace-nowrap flex flex-row w-full">
      <motion.div className="font-semibold uppercase text-[64px] flex whitespace-nowrap flex-row"
        style={{ x }} > {Array(duplicateCount).fill(children).map((child, index) => (
          <span key={index} className="px-4">{child}</span>))}
      </motion.div> </div>);
};

const ContinuousSlider = ({ drt, setDrt }: { drt: number, setDrt: Dispatch<SetStateAction<number>> }) => {
  const baseX = useMotionValue(0);
  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * -drt * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });
  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);
  return (
    <div className="overflow-hidden w-full h-full sm:h-[600px] relative">
      <motion.div
        onMouseOver={() => {
          console.log("mouse Over!")
          setDrt(2)
        }}
        onMouseLeave={() => {
          console.log("mouse leaf")
          setDrt(4)
        }}
        style={{ x }}
        className="flex w-[200%] h-full"
      >
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img.src}
            className={`${img.type === "phone" ? "w-[400px]" : "w-[800px]"} h-[250px] sm:h-[600px] object-cover mx-2 rounded-xl border border-[#353535]/10 p-1`}
          />
        ))}
      </motion.div>
    </div >
  );
}
const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollProj, setScrollProj] = useState(4)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const clampedValue = Math.max(0, Math.min(scrollY / maxScroll, 1)); // จำกัดค่า 0 - 1
      setScrollProgress(clampedValue);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className="fixed bottom-0 left-0 h-2 bg-[#353535] z-50" style={{ width: `${scrollProgress * 100}%` }} />
      <div className="grid grid-rows-[20px_1fr_20px] sm:items-start justify-items-center min-h-screen p-8 pb-2 sm:pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full sm:px-8 px-2 overflow-y-hidden">
          <section className="w-full sm:h-[600px] h-full  flex sm:flex-row flex-col bg-red  justify-center sm:items-start items-center gap-4 ">
            <div className="flex flex-col justify-start items-center gap-4 h-full">
              <MotionDiv
                className="w-[380px] h-[490px] bg-[#f4f4f4] rounded-xl flex flex-col justify-around items-center"
                {...elementStyle["style2"]}
              >
                <div className="relative w-full h-full flex flex-row justify-center items-center group">
                  <Image src={'/temp/temp-web.png'} className="absolute transition-transform ease-linear duration-100 -rotate-2 top-12 left-[40px] drop-shadow-md hover:scale-105 hover:rotate-0 hover:z-30" width={230} height={230} alt='' />
                  <Image src={'/temp/temp-port.png'} className="absolute transition-transform ease-linear duration-100 rotate-6 top-28 right-[40px] drop-shadow-md hover:scale-110 hover:rotate-0" width={200} height={200} alt='' />

                </div>
                <div className=" flex flex-col justify-center items-center mb-4 gap-2">
                  <p className="w-[60%] text-center text-[#353535] text-[22px] font-bold leading-6">Free Template Design Resource</p>
                  <p className="text-[#7e7e7e] text-[14px] font-bold">Available in <span className="after:contents-['·...'] after:animate-movingDots"></span> </p>
                  <span className="py-1 px-3 text-[12px] text-black/80 font-bold border border-zinc-300/60 bg-zinc-100 shadow-sm rounded-xl">Public</span>
                </div>
              </MotionDiv>
              <MotionDiv className="w-[380px] h-[100px] bg-[#f4f4f4] rounded-xl flex flex-col justify-between items-center py-4" {...elementStyle["style1"]}>
                <span className="text-[#353535] text-[22px] font-bold">About me</span>
                <div className="w-[48px] h-[30px] flex justify-center items-center bg-white rounded-2xl mt-2 hover:rotate-6 hover:shadow-card transition delay-icon duration-icon"><CgChevronRight size={24} color={"#7e7e7e"} /></div>
              </MotionDiv>
            </div>
            <div className="flex flex-col justify-start items-center gap-4 h-full">
              <MotionDiv className="w-[380px] h-full bg-[#f4f4f4] rounded-xl flex flex-col justify-start  items-center py-4" {...elementStyle["style3"]} >
                <div className="relative w-full max-w-[350px] h-full max-h-[480px] overflow-hidden flex flex-col justify-start items-center">
                  <Image
                    className=" mt-2 drop-shadow-[-5px_0px_4px_rgba(0,0,0,0.6)] hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.65)] 
                    object-cover object-top scale-[0.93] hover:scale-[1.01] transition-all ease-in-out duration-[260ms]"
                    src={'/proj/proj_note.png'}
                    width={340}
                    height={300}
                    alt="" />
                </div>
                <div className="relative z-20 w-full inset-x-0 -top-10 h-[15%] bg-gradient-to-t from-[#f4f4f4] via-[#f4f4f4] to-transparent blur-sm"></div>
                <span className="text-[#353535] text-[22px] font-bold z-20">Projects</span>
                <span className="text-[#7e7e7e] text-[14px] font-bold z-20">IOS, WebSite, more...</span>
                <div className="w-[48px] h-[30px] flex justify-center items-center bg-white rounded-2xl mt-2 hover:-rotate-6 hover:shadow-card transition delay-icon duration-icon"><CgChevronRight size={24} color={"#7e7e7e"} /></div>
              </MotionDiv>
            </div>

            <div className="flex flex-col justify-start items-center gap-4 h-full">
              <MotionDiv className="w-[380px] bg-[#f4f4f4] rounded-xl flex flex-col justify-between items-center py-4 px-6 text-center h-full" {...elementStyle["style4"]}>
                <div className="relative w-full h-full flex justify-center items-center group">
                  <Image src={"/char/cat_inbox.png"} alt="inbox" width={240} height={240} className="transition-transform ease-in duration-200 group-hover:scale-105 " />
                  <Image src={"/char/star.png"} alt="inbox" width={25} height={25} className="absolute top-10 sm:top-28 right-24 animate-spin-swap" />
                  <Image src={"/char/chat.png"} alt="inbox" width={40} height={40} className="absolute top-3 sm:top-20 right-36 opacity-0 transition-opacity duration-[1s] ease-in-out group-hover:opacity-100" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-[#353535] text-[22px] font-bold">Service I Offer</span>
                  <p className="text-[#7e7e7e] text-[16px] font-bold">I could help you with a few things ...</p>
                  <div className="w-[48px] h-[30px] flex justify-center items-center bg-white rounded-2xl mt-2 hover:rotate-6 hover:shadow-card transition delay-icon duration-icon"><CgChevronRight size={24} color={"#7e7e7e"} /></div>
                </div>
              </MotionDiv>
              <MotionDiv className="w-[380px] h-[70px] bg-[#f4f4f4] rounded-xl flex flex-row justify-around items-center p-4 gap-2" {...elementStyle["style5"]} >
                {ContactList.map((e, _) => (<IconInCard key={_} rf={e.ref} className={e.style}>{e.element}</IconInCard>))}
              </MotionDiv>
            </div>
          </section>
          <MotionDiv
            className="w-full h-[100%] max-w-[90vw] flex flex-col bg-red sm:h-[250px] justify-center items-start gap-4 relative overflow-hidden"
            {...elementStyle["style2"]}
          >
            {TextSlice.map((e, _) => (<TextParallax key={_} baseVelocity={e.vlc}>{e.text}</TextParallax>))}
          </MotionDiv>
          <section className="w-full flex flex-col justify-center items-center" >
            <span className="text-[#353535] font-bold text-[16px] uppercase my-4">POWERING THE BEST TOOLS</span>

            <CardParallax baseVelocity={2}>
              <motion.div className="sm:w-full flex flex-row gap-4 overflow-hidden">
                {ImageTools.map((e, _) => (<IconCard key={_} src={e.src} w={e.w} h={e.h} t={e.desc} />))}
              </motion.div>
            </CardParallax>
          </section>
          <ContinuousSlider drt={scrollProj} setDrt={setScrollProj} />
        </main>
      </div >
    </div >
  )
}
export default Home
