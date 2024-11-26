import { AppBar } from "./component/AppBar";
import { Description } from "./component/Description";
import { Head } from "./component/Head";
import { Hero } from "./component/Hero";
import styles from './page.module.scss';
import { CoverDemo } from './component/Speed'
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
    </>
  );
}
