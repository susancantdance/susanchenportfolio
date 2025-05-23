import styles from "./resume.module.css";

function Resume() {
  return (
    <div className={styles.container}>
      <a
        href="http://www.withjoy.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.wrapper}
      >
        <div className={styles.section}>
          <div className={styles.job}>
            <span className={styles.jobtitle}>Principal Product Manager</span>
            <span className={styles.jobcompany}>Joy (withjoy.com)</span>
            <span className={styles.jobdesc}>
              Lead initiative for product expansion into baby registries by
              owning requirements and managing product scope across 8
              engineering teams.{" "}
            </span>
          </div>
          <div className={styles.dates}>
            <span className={styles.date}>2022-2023</span>
          </div>
        </div>
      </a>
      <a
        href="http://www.nurx.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.wrapper}
      >
        <div className={styles.section}>
          <div className={styles.job}>
            <span className={styles.jobtitle}>Senior Product Manager</span>
            <span className={styles.jobcompany}>Nurx / Thirty Madison</span>
            <span className={styles.jobdesc}>
              Product owner of optimization, growth and product expansion for
              patient experience engineering team.
            </span>
          </div>

          <div className={styles.dates}>
            <span className={styles.date}>2021-2022</span>
          </div>
        </div>
      </a>
      <a
        href="http://www.goodrx.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.wrapper}
      >
        <div className={styles.section}>
          <div className={styles.job}>
            <span className={styles.jobtitle}>Product Consultant</span>
            <span className={styles.jobcompany}>GoodRx</span>
            <span className={styles.jobdesc}>
              Product management for GoodRx Telehealth Growth team /
              HeyDoctor.com
            </span>
          </div>
          <div className={styles.dates}>
            <span className={styles.date}>2020-2021</span>
          </div>
        </div>
      </a>
      <a
        href="http://www.fabfitfun.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.wrapper}
      >
        <div className={styles.section}>
          <div className={styles.job}>
            <span className={styles.jobtitle}>Director of Product</span>
            <span className={styles.jobcompany}>FabFitFun</span>
            <span className={styles.jobdesc}>
              Director of product team focusing on launching FabFitFun Style and
              All-Access digital subscriptions.
            </span>
          </div>
          <div className={styles.dates}>
            <span className={styles.date}>2018-2020</span>
          </div>
        </div>
      </a>
      <a
        href="http://www.theblacktux.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.wrapper}
      >
        <div className={styles.section}>
          <div className={styles.job}>
            <span className={styles.jobtitle}>Senior Product Manager</span>
            <span className={styles.jobcompany}>The Black Tux</span>
            <span className={styles.jobdesc}>
              Managed two separate product/engineering teams, focused on
              shopping/discovery and carts/checkout for online tuxedo rentals.
            </span>
          </div>
          <div className={styles.dates}>
            <span className={styles.date}>2015-2018</span>
          </div>
        </div>
      </a>
      <div>
        <div className={styles.job}>
          <span className={styles.jobtitle}></span>
          <span className={styles.jobcompany}>*Full Resume upon request</span>
          <span className={styles.jobdesc}></span>
        </div>
        <div className={styles.dates}>
          <span className={styles.date}></span>
        </div>
      </div>
    </div>
  );
}

export { Resume };
