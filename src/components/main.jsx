import styles from "./Main.module.css";
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
        <p ref={elementRefs[1]}>
          This is a description of stuff. This is a description of stuff. This
          is a description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff. This is a
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
          description of stuff. This is a description of stuff.This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff. This is a
          description of stuff. This is a description of stuff.
        </p>
      </div>
      <div ref={refArray[2]} className={styles.section}>
        <h2>Resume</h2>
        <p ref={elementRefs[2]}>
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
    </div>
  );
}

export { Main };
