import React from "react";
import { useGetUser } from "@/actions/user";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import ContactForm from "@/components/contact";

import { Row, Col, Container } from "reactstrap";

const Contact = () => {
  const { data, loading } = useGetUser();

  return (
    <>
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <Container>
            <Row>
              <Col md="6">
                <h3>
                  <a href="tel:+15109562978">510 956 2978</a>
                </h3>
                <h3>
                  <a href="mailto:mcct@smcsd.org">mcct@smcsd.org</a>
                </h3>
                <h3>Marin City, CA 94965</h3>
              </Col>

              <Col md="6">
                <ContactForm />
              </Col>
            </Row>
          </Container>
        </BasePage>
      </BaseLayout>
    </>
  );
};

export default Contact;
