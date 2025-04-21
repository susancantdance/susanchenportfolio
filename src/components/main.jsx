import styles from "./Main.module.css";
import { Projects } from "./projects.jsx";
import { Resume } from "./resume.jsx";
import { Education } from "./education.jsx";
// import { useRef } from "react";

function Main({ refArray, elementRefs }) {
  // const elementRef = useRef(null);
  // const isOnScreen = useOnScreen(elementRef);

  // console.log({ isOnScreen });

  // console.log(onScreen[0] + " " + onScreen[1] + " " + onScreen[2]);

  return (
    <div className={styles.main}>
      <div ref={refArray[0]} className={styles.section}>
        <h2>About Me</h2>
        <p ref={elementRefs[0]}>
          This is a description of stuff. This is a description of stuff. This
          is a description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff.This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff.This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff.This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff.
        </p>
      </div>
      <div ref={refArray[1]} className={styles.section}>
        <h2>Projects</h2>
        <div ref={elementRefs[1]}>
          <Projects />
        </div>
      </div>
      <div ref={refArray[2]} className={styles.section}>
        <h2>Education</h2>
        <div ref={elementRefs[2]}>
          <Education />
        </div>
      </div>
      <div ref={refArray[3]} className={styles.section}>
        <h2>Work</h2>
        <div ref={elementRefs[3]}>
          <Resume />
        </div>
      </div>
    </div>
  );
}

export { Main };
