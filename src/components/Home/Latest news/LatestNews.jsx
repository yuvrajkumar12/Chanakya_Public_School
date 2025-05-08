import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "../../404 error page/404Page";
import styles from './LatestNews.module.css'

function LatestNews() {
  const { newsName } = useParams();

  // Define content for each news article based on 'newsName'
  let newsContent = null;

  if (newsName === "online-noc") {
    newsContent = (
      <div className={styles.newsDiv}>
        <h2 className={styles.newsHeading}>Free Admission Open</h2>
        <p>
  Take advantage of our Free Admission program and enjoy the following benefits:
</p>
<p>
  <strong>No Admission Fee:</strong> Enroll without having to pay any upfront admission costs, making education more accessible.
</p>
<p>
  <strong>Quality Education:</strong> Gain access to top-tier educational resources and faculty, ensuring a great learning experience.
</p>
<p>
  Enroll today and take the first step toward a bright future with zero admission costs!
</p>
      </div>
    );
  } else if (newsName === "registrar-notice") {
    newsContent = (
      <div className={styles.newsDiv}>
        <h2 className={styles.newsHeading}>Registrar Notice-International Day of Non-Violence</h2>
        <p>
  In celebration of the International Day of Non-Violence, we would like to highlight the following benefits:
</p>
<p>
  <strong>Promoting Peace:</strong> This day encourages individuals to reflect on the importance of peace and non-violence in society.
</p>
<p>
  Join us in celebrating the International Day of Non-Violence and promoting a culture of peace and respect for all.
</p>

      </div>
    );
  // } else if (newsName === "recruitment-advertisement") {
  //   newsContent = (
  //     <div clasclassName={styles.newsDiv}>
  //       <h2 className={styles.newsHeading}>Recruitment Advertisement-Guest Faculty 2024-25</h2>
  //       <p>
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
  //         condimentum accumsan mi, non gravida lorem fringilla non.
  //       </p>
  //     </div>
  //   );
  }

  // If 'newsContent' is null, it means the newsName is not recognized
  if (!newsContent) {
    return (
      <PageNotFound />
    );
  }

  return <div>{newsContent}</div>;
}

export default LatestNews;
