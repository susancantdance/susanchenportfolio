import styles from "./Main.module.css";
import { Projects } from "./projects.jsx";
import { Resume } from "./resume.jsx";
import { Education } from "./education.jsx";
import { About } from "./about.jsx";
import squiggle from "../assets/line.png";
// import { useRef } from "react";

function Main({ refArray, elementRefs }) {
  // const elementRef = useRef(null);
  // const isOnScreen = useOnScreen(elementRef);

  // console.log({ isOnScreen });

  // console.log(onScreen[0] + " " + onScreen[1] + " " + onScreen[2]);

  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <h2 ref={refArray[0]}>About Me</h2>
        <img className={styles.squiggle} src={squiggle}></img>
        <div ref={elementRefs[0]}>
          <About />
        </div>
      </div>
      <div className={styles.section}>
        <h2 ref={refArray[1]}>Projects</h2>
        <img className={styles.squiggle} src={squiggle}></img>
        <div ref={elementRefs[1]}>
          <Projects />
        </div>
      </div>
      <div className={styles.section}>
        <h2 ref={refArray[2]}>Education</h2>
        <img className={styles.squiggle} src={squiggle}></img>
        <div ref={elementRefs[2]}>
          <Education />
        </div>
      </div>
      <div className={styles.section}>
        <h2 ref={refArray[3]}>Work</h2>
        <img className={styles.squiggle} src={squiggle}></img>
        <div ref={elementRefs[3]}>
          <Resume />
        </div>
      </div>
    </div>
  );
}

export { Main };
