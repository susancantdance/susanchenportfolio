import styles from "./LeftNav.module.css";

function Leftnav({ refArray, onScreen }) {
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
        // left: 400,
      }
    );
  };

  return (
    <>
      <p className={styles.title}>susan chen</p>
      <div className={styles.linksection}>
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
      </div>
      <div className={styles.icons}>
        <a href="https://github.com/susancantdance">
          <img className={styles.github} src="github-mark.svg" />
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="https://linkedin.com/in/susanlchen">
          <img className={styles.github} src="InBug-Black.png" />
        </a>
      </div>
    </>
  );
}

export { Leftnav };
