import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import {
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
          <div>
            <Card>
              {/* <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              /> */}
              <CardBody>
                <CardTitle tag="h5">College and Career Readiness Team</CardTitle>
                <CardText>
                The College and Career Readiness Team helps support students and community residents with higher education and career planning.  Team members help residents complete applications for enrollment, financial aid, Medi-Cal, scholarships and government subsidy programs. During the Covid-19 pandemic, the team is focused on supporting students in remote learning environments with skills to stay connected to their academic institutions, complete coursework, and develop time management skills.

The team also provides a variety of career-related assistance, including the following: career counseling; career and interest assessments; job search assistance (including help with job applications, interviewing, resumes, cover letters, etc.); and current labor-market information (including job outlook, current demand, and average wages). 
                </CardText>
                <Button>Contact Now</Button>
              </CardBody>
            </Card>
            <Card>
              {/* <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              /> */}
              <CardBody>
                <CardTitle tag="h5">Crisis Care Team</CardTitle>
                <CardText>
                The Crisis Care Team is a collaboration between public and private sectors to integrate services for people experiencing homelessness, mental illness, substance abuse disorders and domestic violence. Team members are available 24 hours a day. 
                </CardText>
                <Button>Contact Now</Button>
              </CardBody>
            </Card>
            <Card>
              {/* <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              /> */}
              <CardBody>
                <CardTitle tag="h5">Educational Support Team</CardTitle>
                <CardText>
                We have two Educational Support Teams, one supporting K-8 students and the other dedicated to assisting high school students. The teams engage with the local school districts—Sausalito Marin City School District (SMCSD) and Tamalpais Unified School District (TUSD)—and advance their academic missions. Teachers and staff may also perform outreach teaching by extending the classroom beyond the campus to engage their students through service learning. 

The teams also assist with Wi-Fi connection, access to technology and students’ individual needs to ensure that every child has an equal opportunity to learn.

                </CardText>
                <Button>Contact Now</Button>
              </CardBody>
            </Card>
            <Card>
              {/* <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              /> */}
              <CardBody>
                <CardTitle tag="h5">Family Needs Team</CardTitle>
                <CardText>
                The Family Needs Team is dedicated to assisting families in need and can assist with transportation, food and clothing and referrals to other teams as needed. They help families apply to various programs, including daycare services for working parents, Medi-Cal and other health coverage programs as well as other community agencies. The team also provides families with infant supplies (formula, diapers, etc.), medication pick-up, and transportation to medical appointments.

The team also supports the special needs of young families with infants, toddlers and expecting parents. Team members help pregnant women register for prenatal care, make home visits to provide health and nutrition education and emotional support.  The team promotes family engagement, volunteer and community involvement, and faith and community-based initiatives. 

                </CardText>
                <Button>Contact Now</Button>
              </CardBody>
            </Card>
            <Card>
              {/* <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              /> */}
              <CardBody>
                <CardTitle tag="h5">Mental Health and Wellness Team</CardTitle>
                <CardText>
                The Mental Health and Wellness Team is made up of licensed professionals. Team member help equip individuals with mindfulness strategies by providing reading materials, virtual lead meditation, and one-on-one mental health counseling. The team coordinates tasks designated to ensure care coordination, treatment and follow-up care for individuals dealing with mental health issues. 
Upon initial contact with an individual, the team leader refers them to an appropriate team member or the community mental health agency for further assistance. Hotlines for mental health resources and interventions are also available. 
                </CardText>
                <Button>Contact Now</Button>
              </CardBody>
            </Card>
            <Card>
              {/* <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              /> */}
              <CardBody>
                <CardTitle tag="h5">Senior and Disability Support Team</CardTitle>
                <CardText>
                The Senior and Disability Support Team provides access to daily meals, medication pick-ups and transportation to medical appointments. Team members arrange daily check-ins with individuals (especially those who live alone) and perform outreach activities to identify individuals in need of services. The team has assembled vast resources and established connections with various agencies and can help seniors and disabled individuals get the services or personal assistance they need. 
                </CardText>
                <Button>Contact Now</Button>
              </CardBody>
            </Card>
          </div>
        </BasePage>
      </BaseLayout>
    </>
  );
};

export default Teams;
