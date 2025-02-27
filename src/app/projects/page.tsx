import { CiDesktop, CiMobile2 } from "react-icons/ci";
import Image from 'next/image'
import { CgChevronRight } from "react-icons/cg";
import { ProjectCard, ProjectCardProps } from "../components/projects/ProjectCard";

const projectcards: ProjectCardProps[] = [
  // { header: "Notos", desc: "take your second brain!", mainimg: "/proj/proj_note.png", leftimg: "/proj/proj_note_comp/comp_1.png", rightimg: "/proj/proj_note_comp/comp_2.png", phone: true, desktop: false },
  { header: "Dat Dot", desc: "Progress of this years", href: "https://day-dot-next.vercel.app", mainimg: "/proj/proj_datdot_comp/proj_datdot.png", leftimg: "/proj/proj_datdot_comp/comp_1.png", rightimg: "/proj/proj_datdot_comp/comp_2.png", phone: true, desktop: true },
  { header: "PokemonWiK", desc: "Detail of Pokemons", href: "https://pokemon-next-nu-two.vercel.app", mainimg: "/proj/proj_pokewik_comp/proj_pokewik.png", leftimg: "/proj/proj_pokewik_comp/comp_1.png", rightimg: "/proj/proj_pokewik_comp/comp_2.png", phone: true, desktop: true },
  { header: "EAuth2.0", desc: "Authentication with NextAuth2.0", href: "https://o-auth2-0-0-next14.vercel.app", mainimg: "/proj/proj_oauth_comp/proj_oauth.png", leftimg: "/proj/proj_oauth_comp/comp_1.png", rightimg: "/proj/proj_oauth_comp/comp_2.png", phone: true, desktop: false },
  { header: "WMember (Line)", desc: "Loyal Customer Support", href: "", mainimg: "/proj/proj_loyal.png", leftimg: "/proj/proj_loyal_comp/comp_1.png", rightimg: "/proj/proj_loyal_comp/comp_2.png", phone: true, desktop: false },
]

const Projects = () => {
  return (
    <main className="container w-screen h-full m-auto flex flex-col justify-center items-center pt-12 pb-8 px-8  gap-4">

      <div className="w-full h-10 max-h-8 flex flex-col md:flex-row justify-between items-center my-2">
        <span className="md:text-[26px] font-bold">Projects</span>
        <p className="text-[12px] md:text-[14px] font-medium text-black/30">Got an idea for a project ?
          <span className="underline font-bold md:text-[16px] text-black">&nbsp;Let builds&apos;it</span></p>
      </div>

      <div className="flex flex-col justify-start items-center w-full h-[440px] md:h-[600px] bg-[#f4f4f4] p-4 pb-0 rounded-xl">
        <div className="w-full h-fit flex items-center flex-row gap-2">
          <div className="w-8 h-8 flex justify-center items-center bg-white/30 shadow-md rounded-full" >
            <CiMobile2 size={20} className="text-black/30" />
          </div>
          <div className="w-8 h-8 flex justify-center items-center bg-white/30 shadow-md rounded-full" >
            <CiDesktop size={20} className="text-black/30" />
          </div>
        </div>
        <div className="flex flex-col justify-end items-center font-bold">
          <span className="text-black/80 text-[24px]">Notos</span>
          <span className="text-black/30 text-[20px]">take your second brain!</span>
          <div className="w-[48px] h-[30px] flex justify-center items-center bg-white rounded-2xl mt-2 hover:rotate-6 hover:shadow-card transition delay-icon duration-icon group"><CgChevronRight size={24} color={"#7e7e7e"} /></div>
        </div>
        <div className="w-full h-full flex justify-center items-end">
          {/* setting w,h for scale cover size img */}
          <div className="group relative w-[430px] md:w-[800px] h-[280px] md:h-[450px] flex justify-center items-end overflow-hidden">
            {/* setting w,h for size img */}
            <Image
              className="z-20 w-full h-full max-w-[260px] md:max-w-[360px] max-h-[280px] md:max-h-[360px] transition-transform duration-[250ms] object-cover object-top drop-shadow-[-5px_0px_4px_rgba(0,0,0,0.4)] group-hover:scale-[1.02] hover:drop-shadow-[-1px_-1px_4px_rgba(0,0,0,0.7)]"
              src={'/proj/proj_note_comp/proj_note.png'} width={220} height={260} alt='proj_note' />
            <Image
              className="blur-[1px] group-hover:blur-0 group-hover:scale-125 md:group-hover:rotate-[8deg]  absolute w-[140px] h-[200px] bottom-0 right-20 rotate-[18deg] transition-transform duration-[250ms]"
              src={'/proj/proj_note_comp/comp_1.png'} width={160} height={160} alt=""
            />
            <Image
              className="blur-[1px] group-hover:blur-0 group-hover:scale-125 md:group-hover:-rotate-[10deg]  absolute w-[140px] h-[200px] -bottom-2 left-24 -rotate-[18deg] transition-transform duration-[250ms]"
              src={"/proj/proj_note_comp/comp_2.png"} width={160} height={160} alt=""
            />
            <Image
              className="blur-[1px] group-hover:blur-0 group-hover:scale-150 md:group-hover:-rotate-[0deg]  absolute w-[100px] md:w-[220px] md:h-[160px] top-6 md:top-6 right-8 md:right-20 -rotate-[18deg] transition-transform duration-[250ms]"
              src={"/proj/proj_note_comp/comp_3.png"} width={160} height={160} alt=""
            />
          </div>
        </div>
      </div>

      {
        projectcards.map((card, index) => {
          return (
            <ProjectCard
              key={index}
              header={card.header}
              desc={card.desc}
              href={card.href}
              mainimg={card.mainimg}
              leftimg={card.leftimg}
              rightimg={card.rightimg}
              phone={card.phone}
              desktop={card.desktop}
            />
          )
        })
      }

    </main>
  )
}
export default Projects
