import styles from "./projects.module.css";
import blogapi from "../assets/blogapi.png";

function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <img className={styles.image} src={blogapi} />
        <div className={styles.desc}>
          <span className={styles.name}>Full Stack Cat Blog</span> Blogging
          application utilizing React, Node, PrismaORM. Anyone can read blogs or
          comments, but users must sign up and authenticate to leave a comment.
          Blog author can peform CRUD operations on all posts and comments. Yes,
          it's written by a cat.
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.image}>I am an image</div>
        <div className={styles.desc}>
          <b>I am the description of the project.</b> Cat ipsum dolor sit amet,
          plays league of legends stick butt in face so sit on human they not
          getting up ever. Spend all night ensuring people don't sleep sleep all
          day curl up and sleep on the freshly laundered towels. Cat mojo try to
          hold own back foot to clean it but foot reflexively kicks you in face,
          go into a rage and bite own foot, hard milk the cow if it fits, i sits
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.image}>I am an image</div>
        <div className={styles.desc}>
          <b>I am the description of the project.</b> Cat ipsum dolor sit amet,
          plays league of legends stick butt in face so sit on human they not
          getting up ever. Spend all night ensuring people don't sleep sleep all
          day curl up and sleep on the freshly laundered towels. Cat mojo try to
          hold own back foot to clean it but foot reflexively kicks you in face,
          go into a rage and bite own foot, hard milk the cow if it fits, i sits
        </div>
      </div>
    </div>
  );
}

export { Projects };
