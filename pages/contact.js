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
              <h3><a href="tel:+15109562978">510 956 2978</a></h3>
              <h3><a href="mailto:mcct@smcsd.org">mcct@smcsd.org</a></h3>
              <h3>Marin City, CA 94965</h3>
            </Col>

          <Col md="6"> 
          <Form>
            <Row form>
            <Col md="6">
              <FormGroup>
                <Label>First Name</Label>
                <Input type="first name" name="firstName" id="firstName" placeholder="Joan" />
                <FormFeedback>Oh noes! that name is already taken</FormFeedback>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Last Name</Label>
                <Input type="last name" name="lastName" id="lastName" placeholder="Smith" />
              </FormGroup>  
            </Col>
            </Row>

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
