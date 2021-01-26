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
  FormFeedback
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
              <Label>Email</Label>
              <Input type="email" name="email" id="Email" placeholder="Email Address" />
            </FormGroup>
            <FormGroup>
              <Label>Phone</Label>
              <Input type="phone" name="phone" id="phone" placeholder="510-555-5555" />
            </FormGroup>
            <FormGroup >
              <Label for="exampleText" >Messege </Label>
                <Input type="textarea" name="text" id="text" placeholder="Enter your message" />
            </FormGroup>
            <Button>Submit </Button>
          </Form>
          </Col>
          </Row>

        </BasePage>
      </BaseLayout>
    </>
  );
};

export default Contact;
