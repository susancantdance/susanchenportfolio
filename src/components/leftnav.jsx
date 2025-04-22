import styles from "./LeftNav.module.css";
// import { useState } from "react";

// import { useRef } from "react";

function Leftnav({ refArray, onScreen }) {
  // const [scrolltopdata, setscrolltopdata] = useState("");

  // const [styleArray, updateStyles] = useState([
  //   styles.link,
  //   styles.link,
  //   styles.link,
  // ]);

  console.log("rendering");
  console.log(
    onScreen[0] + " " + onScreen[1] + " " + onScreen[2] + " " + onScreen[3]
  );

  // useEffect(() => {
  //   const height = document.querySelector("body").scrollHeight;
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > height / 3) {
  //       updateStyles([styles.link, styles.current, styles.link]);
  //     } else if (window.scrollY > 2 * (height / 3)) {
  //       updateStyles([styles.link, styles.link, styles.current]);
  //     }
  //     // else {
  //     //   setscrolltopdata(styles.);
  //     // }
  //   });
  // }, []);

  let clicked = [false, false, false, false];

  const selectLink = (id) => {
    // let newArray = [styles.link, styles.link, styles.link];
    // newArray[id] = styles.current;
    // updateStyles(newArray);
    for (let i = 0; i < clicked.length; i++) {
      if (i != id) {
        clicked[id] = false;
      }
    }
    clicked[id] = true;

    let position = "start";

    if (id == 0) {
      position = "center";
    }

    refArray[id].current.scrollIntoView(
      // true
      {
        behavior: "smooth",
        block: position,
        // inline: "nearest",
        // top: 300,
        // left: 400,
      }
    );
  };

  return (
    <>
      <p className={styles.title}>susan chen</p>
      <div
        className={`${styles.link} ${onScreen[0] ? styles.viewing : ""} ${
          clicked[0] ? styles.current : ""
        }`}
        onClick={() => selectLink(0)}
      >
        about
      </div>
      <div
        className={`${styles.link} ${onScreen[1] ? styles.viewing : ""} ${
          clicked[1] ? styles.current : ""
        }`}
        onClick={() => selectLink(1)}
      >
        projects
      </div>
      <div
        className={`${styles.link} ${onScreen[2] ? styles.viewing : ""} ${
          clicked[2] ? styles.current : ""
        }`}
        onClick={() => selectLink(2)}
      >
        education
      </div>
      <div
        className={`${styles.link} ${onScreen[3] ? styles.viewing : ""}
        ${clicked[3] ? styles.current : ""}`}
        onClick={() => selectLink(3)}
      >
        work
      </div>
      <div className={""}>GITHUB ICON &nbsp;&nbsp;&nbsp; LINKEDIN ICON</div>
    </>
  );
}

export { Leftnav };
