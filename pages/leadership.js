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
              <img src="https://images.squarespace-cdn.com/content/v1/5ebaf8af593d7e00d9fda34c/1589425171188-6O64IULKF58PKFUY4Y3I/ke17ZwdGBToddI8pDm48kAbR4sDX2ER4w785aQ8uOvYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z22p3dL3LrCXr2uyU-FcZ4L5p8O7ZMaKvDmgnueRyGdWndZR9z9mxWb0yLUToVqwSd/Jahmeercrop.jpg?format=260w" />
              <h2 className={`title ${createFadeInClass()}`}>
                Jahmeer Reynolds{" "}
              </h2>
              <p className={`subsubTitle ${createFadeInClass()}`}>
                Executive Director
              </p>
            </div>
          </Col>
          <Col md="6">
            <div className={`${createFadeInClass()}`}>
              <p>
                My name is Filip Jerga and I am an experienced software engineer
                and freelance developer.{" "}
              </p>
              <p>
                I have a Master's degree in Artificial Intelligence and several
                years of experience working on a wide range of technologies and
                projects from C++ development for ultrasound devices to modern
                mobile and web applications in React and Angular.
              </p>
              <p>
                Throughout my career, I have acquired advanced technical
                knowledge and the ability to explain programming topics clearly
                and in detail to a broad audience. I invite you to take my
                course, where I have put a lot of effort to explain web and
                software engineering concepts in a detailed, hands-on and
                understandable way.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 align-items-center bottom-bio">
          <Col md="6">
            <div className="left-side justify-content-center">
              <img src="https://images.squarespace-cdn.com/content/v1/5ebaf8af593d7e00d9fda34c/1589424889858-02WGI5KERF5H3LZLV006/ke17ZwdGBToddI8pDm48kG6E2OWZRwBlbeokYOUL6KpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwB8gR31QkEvV5Cnzs01oeB_kT3VSav0P2RK0WGwSxdiE41Z8N2AkAYi6v8kXrG5A4/mr+phil.jpg?format=260w" />
              <h2 className={`title ${createFadeInClass()}`}>Phillip Logan</h2>
              <p className={`subsubTitle ${createFadeInClass()}`}>
                Intake Supervisor
              </p>
            </div>
          </Col>
          <Col md="6">
            <div className={`${createFadeInClass()}`}>
              <p>
                My name is Filip Jerga and I am an experienced software engineer
                and freelance developer.{" "}
              </p>
              <p>
                I have a Master's degree in Artificial Intelligence and several
                years of experience working on a wide range of technologies and
                projects from C++ development for ultrasound devices to modern
                mobile and web applications in React and Angular.
              </p>
              <p>
                Throughout my career, I have acquired advanced technical
                knowledge and the ability to explain programming topics clearly
                and in detail to a broad audience. I invite you to take my
                course, where I have put a lot of effort to explain web and
                software engineering concepts in a detailed, hands-on and
                understandable way.
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default Leadership;
