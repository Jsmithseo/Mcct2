import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { useGetUser } from "@/actions/user";


const About = () => {
  const { data, loading } = useGetUser();

  return (
    <>
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <Row>
            <Col md="7">
              <h1>About The MCCT </h1>
              <p>
                The Marin County Cooperation Team (MCCT) was originally created
                for the community members of Marin City as a response to
                COVID-19 to ensure continuation of comprehensive support
                services for our Bayside Martin Luther King Jr Academy, Willow
                Creek Academy students, and the community at large. As the
                pandemic progressed, we were made aware of the support needs
                from various demographics. A call to action was made to create a
                task force designed to identify areas and individuals who could
                potentially be overlooked during the COVID-19 crisis. We are
                dedicated to providing the highest quality of full comprehensive
                support services delivered with empathy, care, and trust. MCCT
                has created seven teams to support the needs within the
                community. Each team has its own collection of dedicated
                professionals. They are all coordinated under one umbrella but
                work independently on a day to day basis. Each team makes in
                person, email or phone contact with families and individuals to
                assess what they need. With the support of the Marin City
                community, community-based organizations and the Sausalito-Marin
                City School District, we have achieved our goal to extend the
                Marin County Cooperation Team’s support to other communities in
                and around Marin County.
              </p>
            </Col>
            <Col md="5">
              <h3>Vision</h3>
              <p>
                The Marin County Cooperation Team envisions an increase in
                health, wellness, educational outcomes, and economic
                opportunities for the people we serve. Transparent and robust
                civic engagement with those who have traditionally been
                marginalized will be realized through our partnerships. All
                Marin County residents will experience an overall improved
                quality of life through service, relationships, connection, and
                equity.
              </p>
              <h3>Purpose</h3>
              <p>
                The Marin County Cooperation Team (MCCT) serves the citizens of
                Marin County through the provision of comprehensive support
                services and resources in the areas of family needs, senior and
                disability support, the arts, education, career readiness,
                mental health, wellness, crisis care and civic and community
                engagement. Our calling is to surround the most vulnerable
                members of our community with programs and services which
                address both critical and long-term needs. We do so in a timely
                and effective manner by utilizing a highly organized network of
                community based organizations in partnership with local, state
                and federal agencies.
              </p>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    </>
  );
};

export default About;
