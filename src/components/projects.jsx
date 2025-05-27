import styles from "./projects.module.css";
import blogapi from "../assets/blogapi.png";
import meangirl from "../assets/meangirls.png";
import memory from "../assets/memory.png";

function Projects() {
  return (
    <div className={styles.container}>
      <a
        href="https://catlog-ten.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.section}>
          <img className={styles.image} src={blogapi} />
          <div className={styles.desc}>
            <span className={styles.name}>Full Stack Cat Blog</span>
            <p>
              Blogging application utilizing React, Node, PostgreSQL, and
              Express. Designed Restful API with full CRUD capabilities on all
              posts and comments.
            </p>
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>react</span>
            <span className={styles.tag}>node</span>
            <span className={styles.tag}>postgreSQL</span>
            <span className={styles.tag}>express</span>
          </div>
        </div>
      </a>
      <a
        href="https://members-only-production-fa93.up.railway.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.section}>
          <img className={styles.image} src={meangirl} />
          <div className={styles.desc}>
            <span className={styles.name}>Mean Girls Burn Book</span>
            <p>
              Developed a full-stack authentication app where users can sign up,
              log in, and post messages in a private members area.
            </p>
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>react</span>
            <span className={styles.tag}>node</span>
            <span className={styles.tag}>postgreSQL</span>
            <span className={styles.tag}>express</span>
          </div>
        </div>
      </a>
      <a
        href="https://memory-phi-bay.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.section}>
          <img className={styles.image} src={memory} />
          <div className={styles.desc}>
            <span className={styles.name}>Memory Game</span>
            <p>
              Interactive browser-based memory matching game with logic for
              match checking, game state tracking, and reset functionality.
            </p>
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>react</span>
            <span className={styles.tag}>css</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export { Projects };
