import styles from "./education.module.css";

function Education() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.job}>
          <span className={styles.jobtitle}>90% Course Completion</span>
          <span className={styles.jobcompany}>Odin Project</span>
          <span className={styles.jobdesc}>
            Continuing education with self-paced open source online course that
            focuses on creating projects with vanilla HTML and CSS, React, and
            full stack Javascript with NodeJs.{" "}
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
            Full-time MBA program with a chosen focus on entrepreneurship and
            product development.
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
            Computer algorithms, operating systems, architecture, software
            engineering and web development.{" "}
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
