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
              Blogging application utilizing React, Node, PrismaORM, and
              passport JWT to authenticate. Blog author (ya, a cat) can peform
              CRUD operations on all posts and comments.
            </p>
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>react</span>
            <span className={styles.tag}>node</span>
            <span className={styles.tag}>postgres</span>
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
              Members-only messageboard that authenticates using basic
              passport.js user/password and encrypting with bcrypt.
            </p>
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>react</span>
            <span className={styles.tag}>node</span>
            <span className={styles.tag}>postgres</span>
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
              React application that uses public cat api to show 10 random
              breeds. Players must only click on each cat once as the grid
              scrambles in order to win.
            </p>
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>react</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export { Projects };
