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

  const selectLink = (id) => {
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
        className={`${styles.link} ${onScreen[0] ? styles.viewing : ""}`}
        onClick={() => selectLink(0)}
      >
        about
      </div>
      <div
        className={`${styles.link} ${onScreen[1] ? styles.viewing : ""}`}
        onClick={() => selectLink(1)}
      >
        projects
      </div>
      <div
        className={`${styles.link} ${onScreen[2] ? styles.viewing : ""}`}
        onClick={() => selectLink(2)}
      >
        education
      </div>
      <div
        className={`${styles.link} ${onScreen[3] ? styles.viewing : ""}`}
        onClick={() => selectLink(3)}
      >
        work
      </div>
      <div className={""}>GITHUB ICON &nbsp;&nbsp;&nbsp; LINKEDIN ICON</div>
    </>
  );
}

export { Leftnav };
