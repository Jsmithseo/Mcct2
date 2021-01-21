import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col, Button } from "reactstrap";
import Typed from "react-typed";
import { useGetUser } from "@/actions/user";

const ROLES = [
  "College",
  "Career",
  "Readiness",
  "Crisis Care",
  "Educational",
  "Family",
  "Mental Health",
  "Wellness",
  "Senior",
  "Disability",
];

const Index = () => {
  const { data, error, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading} className="cover">
      <div className="main-section">
        <Container>
          <Row>
            <Col
              md="5"
              className="hero-welcome-wrapper d-flex justify-content-end"
            >
              <img
                className="mx-5 justify-content-end"
                src="/images/device2.png"
              />
            </Col>
            <Col
              md="7"
              className="hero-welcome-wrapper d-flex align-items-center justify-content-start"
            >
              <div className="hero-welcome-main">
                <div className="hero-welcome-text">
                  <h1 className="display-4 text-white">
                    Marin County CO-OP Teams
                  </h1>
                  <p className="lead text-white font-weight-light">
                    {" "}
                    <span>
                      We're here for your{" "}
                      <Typed
                        loop
                        strings={ROLES}
                        typeSpeed={50}
                        backSpeed={80}
                        backDelay={3000}
                        loopCout={0}
                        showCursor
                        className="self-typed"
                        cursorChar="|"
                      ></Typed>{" "}
                      Needs{" "}
                    </span>
                    <br></br>Dedicated to providing comprehensive support
                    services <br></br>
                    <span className="h3">Strengthening Community</span>
                  </p>
                </div>
                <Button color="primary" size="lg">
                  Get Help Today
                </Button>{" "}
                <div className="hero-welcome-bio">
                  <p className="mb-2 text-white">
                    * only availible to downlad via chrome browser
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
};

export default Index;
