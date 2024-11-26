import { AppBar } from "./component/AppBar";
import { Description } from "./component/Description";
import { Head } from "./component/Head";
import { Hero } from "./component/Hero";
import styles from './page.module.scss';
import { CoverDemo } from './component/Speed'
import { ThreeDCardDemo } from "./component/Card";
import { TextHoverEffect } from "./component/ui/text-hover-effect";
import { Footer } from "./component/Footer";
export default function Page() {

  const anarc = 'ANARC'
  const desc1 = 'unveils your creativity, revealing hidden brilliance one word at a time.'
  const desc21 = 'Write like a wizard with'
  const desc22 = '— where ideas flow like spells, precise and magical.'
  const preText = 'ANARC is your lab for ideas, like Walter White turning chaos into brilliance. Build your empire—'
  const description = 'This text Editor is your Walter White of productivity tools—turning chaos into order, one note at a time. It’s the Heisenberg of organization, where your ideas cook up to perfection.'


  return (
    <>

      <AppBar></AppBar>
      <main className={styles.main}>
        <Hero anarc={anarc} desc1={desc1} desc22={desc22} desc21={desc21}/>
      </main>
      <Description text={description} ></Description>
      <Head preText={preText}></Head>
      <CoverDemo></CoverDemo>
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:pr-4">
          <ThreeDCardDemo 
            title="Explore the Multiverse of Notes"
            description="Discover endless possibilities—connect, organize, and create your universe of notes."
            imageUrl="https://images.unsplash.com/photo-1640499900704-b00dd6a1103a?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imageAlt="Forest landscape with sunlight filtering through trees"
          />
        </div>
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:px-2">
          <ThreeDCardDemo 
            title="We Write What We Must"
            description="Channel your ideas through space and time—write with precision and purpose."
            imageUrl="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imageAlt="Earth viewed from space with a starry background"
          />
        </div>
        <div className="w-full lg:w-1/3 lg:pl-4">
          <ThreeDCardDemo 
            title="Infinity Pages, Endless Ideas"
            description="Master your creativity with infinite possibilities. Your notes, powered by the might of the multiverse."
            imageUrl="https://images.unsplash.com/photo-1676138343740-ee58417b6c0a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imageAlt="Colorful paint splashes creating abstract patterns"
          />
        </div>
      </div>
      <TextHoverEffect text="ANARC"></TextHoverEffect>
      <Footer></Footer>
    </>
  );
}
