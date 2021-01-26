import { useEffect } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import useGetUser from "@/actions/user";
import { Row, Col } from "reactstrap";

const Leadership = () => {
  const { data, loading } = useGetUser();

  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true;
    };
  });

  const createFadeInClass = () => {
    if (typeof window !== "undefined") {
      return window.__isAboutLoaded ? "" : "fadein";
    }

    return "fadein";
  };

  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage className="about-page">
        <Row className="mt-5 align-items-center top-bio">
          <Col md="6">
            <div className="left-side">
              <img  width="100%" src="https://images.squarespace-cdn.com/content/v1/5ebaf8af593d7e00d9fda34c/1610485075298-9UX37O11MIZYA9S9Y008/ke17ZwdGBToddI8pDm48kC3u7xvksWcmaMl56WdA9mAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2Fy4RluPhWCm33cru5FUyz20XV34uBtEn3xovmaxOR8SbtxPRH917Fz9Qv_NunPol/jahmeer.jpg?format=500w" />
              
            </div>
          </Col>
          <Col md="6">
          <h2 className={`title ${createFadeInClass()}`}>
                Jahmeer Reynolds{" "}
              </h2>
              <p className={`subsubTitle ${createFadeInClass()}`}>
                Executive Director
              </p>
            <div className={`${createFadeInClass()}`}>
              <p>
              Jahmeer Reynolds was born in Trenton, NJ and raised primarily by his grandmother, along with his parents and a host of relatives. Jahmeer was a latch key kid, who knew from an early age that education was his ticket to something greater.  He loved to read and he excelled at running.  His talent as an athlete allowed him to travel the world before completing high school.  After graduating from Trenton Central High School, Jahmeer left New Jersey to attend college in Raleigh, North Carolina.{" "}
              </p>
              <p>
              In 2012, Jahmeer and his family relocated to Abu Dhabi.  Since then, Jahmeer has earned his Masters in Education and in 2015 launched the I Promise Mentoring Program to provide support and mentorship to expat young African American men living in the United Arab Emirates. The  I Promise program includes a number of components including financial literacy classes, social media etiquette, human growth and development, community excursions, and one on one mentoring.  Jahmeer is currently working towards his doctoral degree in Educational Psychology. Supported by his wife and many of his closest friends, Jahmeer has seen IPromise grow and thrive. For his international efforts Jahmeer was awarded the Blue Sapphire Award for his international community efforts. Of his many accomplishments, Jahmeer is most proud of being a husband and father, and values time with his family above all else.  
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 align-items-center bottom-bio">
          <Col md="6">
            <div className="left-side justify-content-center">
              <img width="100%" src="https://images.squarespace-cdn.com/content/v1/5ebaf8af593d7e00d9fda34c/1589424889858-02WGI5KERF5H3LZLV006/ke17ZwdGBToddI8pDm48kG6E2OWZRwBlbeokYOUL6KpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwB8gR31QkEvV5Cnzs01oeB_kT3VSav0P2RK0WGwSxdiE41Z8N2AkAYi6v8kXrG5A4/mr+phil.jpg?format=260w" />
              
            </div>
          </Col>
          <Col md="6">
          <h2 className={`title ${createFadeInClass()}`}>Phillip Logan</h2>
              <p className={`subsubTitle ${createFadeInClass()}`}>
                Intake Supervisor
              </p>
            <div className={`${createFadeInClass()}`}>
              <p>
              A Vallejo native, has prided himself on being a dual son of the Marin City community. For his entire life, his father has been a minister in Marin City, sparking Phillip's drive to community service. He has spent the last 8 years of his life serving youth in Marin City, starting off as a contractor in the Hannah Project Partnership for Academic Achievement, a local community based organization, eventually moving on to serve as a Student Support Specialist and Music Teacher at Willow Creek Academy. He now serves as the Music Instructor and Student and Family Support Intern at Bayside Martin Luther King Jr. Academy. As highlighted in his signature phrase "Peace and Prosperity", Phillip believes that true peace and wealth comes from the internal satisfaction of serving others. 
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default Leadership;
