import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Teams = () => {
  const { data, loading } = useGetUser();

  return (
    <>
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <Container>
          
            
          </Container>
        </BasePage>
      </BaseLayout>
    </>
  );
};

export default Teams;
