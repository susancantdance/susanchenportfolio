// import { useState } from "react";

import { Leftnav } from "./components/leftnav.jsx";
import { Main } from "./components/main.jsx";
import { Header } from "./components/header.jsx";
import { useRef } from "react";
import styles from "./App.module.css";
import useOnScreen from "./components/useOnScreen";
// import timmy from "./assets/timmy.png";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const resumeRef = useRef(null);
  const refArray = [aboutRef, projectsRef, educationRef, resumeRef];

  const elementRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const onScreen = [
    useOnScreen(elementRefs[0]),
    useOnScreen(elementRefs[1]),
    useOnScreen(elementRefs[2]),
    useOnScreen(elementRefs[3]),
  ];

  return (
    <>
      <div className={styles.body}>
        <div className={styles.leftnav}>
          <Leftnav refArray={refArray} onScreen={onScreen} />
        </div>
        <div className={styles.main}>
          <Main refArray={refArray} elementRefs={elementRefs} />
        </div>
      </div>
      {/* <div>
        <img className={styles.timmy} src={timmy}></img>
      </div> */}
    </>
  );
}

export default App;
