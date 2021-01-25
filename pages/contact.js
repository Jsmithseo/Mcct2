import React from "react";
import { useGetUser } from "@/actions/user";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

const Contact = () => {
  const { data, loading } = useGetUser();

  return (
    <>
      <BaseLayout user={data} loading={loading}>
        <BasePage>
        <Row>
            <Col md="6">
          <h3>(919) 771-7412</h3>
          <h3>mcct@smcsd.org</h3>
          <h3>Marin City, CA 94965</h3>
            </Col>


        </Row>
          <Form>
            <h4>Fake Form </h4>
            <FormGroup>
              <Label>First Name</Label>
              <Input></Input>
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Input></Input>
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input></Input>
            </FormGroup>
            <Button>Submit </Button>
          </Form>
        </BasePage>
      </BaseLayout>
    </>
  );
};

export default Contact;
