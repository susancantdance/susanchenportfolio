import styles from "./resume.module.css";

function Resume() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.job}>
          <span className={styles.jobtitle}>Fancy Title</span>
          <span className={styles.jobcompany}>Company Name Goes Here</span>
          <span className={styles.jobdesc}>
            Spot something, big eyes, big eyes, crouch, shake butt, prepare to
            pounce love you, then bite you yet jump on counter removed by human
            jump on counter again removed by human meow before jumping on
            counter this time to let the human know am coming back.{" "}
          </span>
        </div>
        <div className={styles.dates}>
          <span className={styles.date}>Date - Date</span>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.job}>
          <span className={styles.jobtitle}>Fancy Title</span>
          <span className={styles.jobcompany}>Company Name Goes Here</span>
          <span className={styles.jobdesc}>
            Spot something, big eyes, big eyes, crouch, shake butt, prepare to
            pounce love you, then bite you yet jump on counter removed by human
            jump on counter again removed by human meow before jumping on
            counter this time to let the human know am coming back.
          </span>
        </div>
        <div className={styles.dates}>
          <span className={styles.date}>Date - Date</span>
        </div>
      </div>{" "}
      <div className={styles.section}>
        <div className={styles.job}>
          <span className={styles.jobtitle}>Fancy Title</span>
          <span className={styles.jobcompany}>Company Name Goes Here</span>
          <span className={styles.jobdesc}>
            Spot something, big eyes, big eyes, crouch, shake butt, prepare to
            pounce love you, then bite you yet jump on counter removed by human
            jump on counter again removed by human meow before jumping on
            counter this time to let the human know am coming back.{" "}
          </span>
        </div>
        <div className={styles.dates}>
          <span className={styles.date}>Date - Date</span>
        </div>
      </div>
    </div>
  );
}

export { Resume };
