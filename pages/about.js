import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { useGetUser } from "@/actions/user";

const About = () => {
  const { data, loading } = useGetUser();

  return (
    <>
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <h1>I am the about page</h1>
          <p>The Marin County Cooperation Team (MCCT) was originally created for the community members of Marin City as a response to COVID-19 to ensure continuation of comprehensive support services for our Bayside Martin Luther King Jr Academy, Willow Creek Academy students, and the community at large.  As the pandemic progressed, we were made aware of the support needs from various demographics.  A call to action was made to create a task force designed to identify areas and individuals who could potentially be overlooked during the COVID-19 crisis. 

We are dedicated to providing the highest quality of full comprehensive support services delivered with empathy, care, and trust. MCCT has created seven teams to support the needs within the community. Each team has its own collection of dedicated professionals. They are all coordinated under one umbrella but work independently on a day to day basis. Each team makes in person, email or phone contact with families and individuals to assess what they need. With the support of the Marin City community, community-based organizations and the Sausalito-Marin City School District, we have achieved our goal to extend the Marin County Cooperation Team’s support to other communities in and around Marin County.</p>
        </BasePage>
      </BaseLayout>
    </>
  );
};

export default About;
