import styles from "./education.module.css";

function Education() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.job}>
          <span className={styles.jobtitle}>Course Completion</span>
          <span className={styles.jobcompany}>Odin Project</span>
          <span className={styles.jobdesc}>
            Spot something, big eyes, big eyes, crouch, shake butt, prepare to
            pounce love you, then bite you yet jump on counter removed by human
            jump on counter again removed by human meow before jumping on
            counter this time to let the human know am coming back.{" "}
          </span>
        </div>
        {/* <div className={styles.dates}>
          <span className={styles.date}>Date - Date</span>
        </div> */}
      </div>
      <div className={styles.section}>
        <div className={styles.job}>
          <span className={styles.jobtitle}>
            Master of Business Administration
          </span>
          <span className={styles.jobcompany}>
            University of Southern California
          </span>
          <span className={styles.jobdesc}>
            Spot something, big eyes, big eyes, crouch, shake butt, prepare to
            pounce love you, then bite you yet jump on counter removed by human
            jump on counter again removed by human meow before jumping on
            counter this time to let the human know am coming back.
          </span>
        </div>
        {/* <div className={styles.dates}>
          <span className={styles.date}>Date - Date</span>
        </div> */}
      </div>{" "}
      <div className={styles.section}>
        <div className={styles.job}>
          <span className={styles.jobtitle}>
            Bachelor of Science, Computer Science
          </span>
          <span className={styles.jobcompany}>
            University of California, Los Angeles
          </span>
          <span className={styles.jobdesc}>
            Spot something, big eyes, big eyes, crouch, shake butt, prepare to
            pounce love you, then bite you yet jump on counter removed by human
            jump on counter again removed by human meow before jumping on
            counter this time to let the human know am coming back.{" "}
          </span>
        </div>
        {/* <div className={styles.dates}>
          <span className={styles.date}>Date - Date</span>
        </div> */}
      </div>
    </div>
  );
}

export { Education };
