import styles from "./projects.module.css";
import blogapi from "../assets/blogapi.png";
import meangirl from "../assets/meangirls.png";
import memory from "../assets/memory.png";

function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <a href="https://catlog-ten.vercel.app/">
          <img className={styles.image} src={blogapi} />
        </a>
        <div className={styles.desc}>
          <a href="https://catlog-ten.vercel.app/" className={styles.name}>
            <span>Full Stack Cat Blog</span>
          </a>{" "}
          Blogging application utilizing React, Node, PrismaORM. Anyone can read
          blogs or comments, but users must sign up and authenticate to leave a
          comment. Blog author can peform CRUD operations on all posts and
          comments. Yes, it's written by a cat.
        </div>
      </div>
      <div className={styles.section}>
        <a href="https://members-only-production-fa93.up.railway.app/">
          <img className={styles.image} src={meangirl} />
        </a>
        <div className={styles.desc}>
          <a
            href="https://members-only-production-fa93.up.railway.app/"
            className={styles.name}
          >
            <span>Mean Girls Burn Book</span>
          </a>{" "}
          Members-only messageboard that authenticates using basic passport.js
          user/password and encrypting with bcrypt. All users can read the burn
          book. Users can become members by entering a password on a secret
          page. Members can then leave a message, but only Regina George can see
          who wrote what.
        </div>
      </div>
      <div className={styles.section}>
        <a href="https://memory-phi-bay.vercel.app/">
          <img className={styles.image} src={memory} />
        </a>
        <div className={styles.desc}>
          <a href="https://memory-phi-bay.vercel.app/" className={styles.name}>
            <span>Memory Game</span>
          </a>{" "}
          React application that uses public cat api to show 10 random breeds.
          Players must only click on each cat once as the grid scrambles in
          order to win. Built to understand concepts of state and React hooks.
        </div>
      </div>
    </div>
  );
}

export { Projects };
