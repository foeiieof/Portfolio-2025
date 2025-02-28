import { ProjectCard, ProjectCardProps } from "../components/projects/ProjectCard";

const projectcards: ProjectCardProps[] = [
  { header: "Notos", desc: "take your second brain!", href: "", mainimg: "/proj/proj_note.png", leftimg: "/proj/proj_note_comp/comp_1.png", rightimg: "/proj/proj_note_comp/comp_2.png", upimg: "/proj/proj_note_comp/comp_3.png", phone: true, desktop: false },
  { header: "DayDot", desc: "Progress of this years", href: "https://day-dot-next.vercel.app", mainimg: "/proj/proj_datdot_comp/proj_datdot.png", leftimg: "/proj/proj_datdot_comp/comp_1.png", rightimg: "/proj/proj_datdot_comp/comp_2.png", phone: true, desktop: true },
  { header: "PokemonWiK", desc: "Detail of Pokemons", href: "https://pokemon-next-nu-two.vercel.app", mainimg: "/proj/proj_pokewik_comp/proj_pokewik.png", leftimg: "/proj/proj_pokewik_comp/comp_1.png", rightimg: "/proj/proj_pokewik_comp/comp_2.png", phone: true, desktop: true },
  { header: "EAuth2.0", desc: "Authentication with NextAuth2.0", href: "https://o-auth2-0-0-next14.vercel.app", mainimg: "/proj/proj_oauth_comp/proj_oauth.png", leftimg: "/proj/proj_oauth_comp/comp_1.png", rightimg: "/proj/proj_oauth_comp/comp_2.png", phone: true, desktop: false },
  { header: "Fixit", desc: "Health Care for your Car", href: "", mainimg: "/proj/proj_fixit_comp/proj_fixit.png", leftimg: "/proj/proj_fixit_comp/comp_1.png", rightimg: "/proj/proj_fixit_comp/comp_2.png", phone: true, desktop: false },
  { header: "WMember (Line)", desc: "Loyal Customer Support", href: "", mainimg: "/proj/proj_loyal_comp/proj_loyal.png", leftimg: "/proj/proj_loyal_comp/comp_1.png", rightimg: "/proj/proj_loyal_comp/comp_2.png", phone: true, desktop: false },
]

const Projects = () => {
  return (
    <main className="container w-screen h-full m-auto flex flex-col justify-center items-center pt-12 pb-8 px-8  gap-4">
      <div className="w-full h-10 max-h-8 flex flex-col md:flex-row justify-between items-center my-2">
        <span className="md:text-[26px] font-bold">Projects</span>
        <p className="text-[12px] md:text-[14px] font-medium text-black/30">Got an idea for a project ?
          <span className="underline font-bold md:text-[16px] text-black">&nbsp;Let builds&apos;it</span></p>
      </div>

      {projectcards.map((card, index) => {
        return (<ProjectCard
          key={index}
          header={card.header}
          desc={card.desc}
          href={card.href}
          phone={card.phone}
          desktop={card.desktop}
          mainimg={card.mainimg}
          leftimg={card.leftimg}
          rightimg={card.rightimg}
          upimg={card.upimg}
        />)
      })
      }
    </main>
  )
}
export default Projects
