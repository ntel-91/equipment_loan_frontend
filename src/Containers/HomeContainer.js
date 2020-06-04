import React from 'react'
import MenuContainer from './MenuContainer'
import AboutContainer from './AboutContainer'
import {
    Button,
    Container,
    // Divider,
    Grid,
    Header,
    Icon,
    // Image,
    // List,
    // Menu,
    // Responsive,
    // Sidebar,
    // Visibility,
    Segment
  } from "semantic-ui-react";

const HomepageHeading = ({ mobile }) => (
    <Segment inverted>
    <Container text>
      <Header
        as="h1"
        content="Gym Equipment Swap"
        inverted
        style={{
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: mobile ? "1.5em" : "3em"
        }}
      />
      <Header
        as="h2"
        content="Rent your equipment!"
        inverted
        style={{
          fontSize: mobile ? "1.5em" : "1.7em",
          fontWeight: "normal",
          marginTop: mobile ? "0.5em" : "1.5em"
        }}
      />
      <Button primary size="huge">
        Get Started
        <Icon name="right arrow" />
      </Button>
    </Container>
    </Segment>
  );

  const UserInfo = () => (
    // <ResponsiveContainer>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column 
                // uncomment when/ if I add picture
                // width={8}
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                We Help Gym-Goers Rent Gym Equipment
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                During these strange times, we help frequent gym-rats find the equipment
                to use at home to keep up their workout routines. Instead of spending money on
                equipment that you will soon not need, why not rent from local gyms? It saves you money and
                helps local gyms.
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                We Let You Search For Available Equipment In Your Area
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Simply search for equipment that you would like to have in your home or apartment and
                select what you need. You will have the option to either pick up your rented equipment or 
                for a small charge get equipment delivered.
              </p>
            </Grid.Column>
            {/* <Grid.Column floated="right" width={6}>
              <Image
                bordered
                rounded
                size="large"
                src="/images/wireframe/white-image.png"
              />
            </Grid.Column> */}
          </Grid.Row>
        </Grid>
      </Segment>
    // </ResponsiveContainer>
)

const GymInfo = () => (
    // <ResponsiveContainer>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column 
            // uncomment when/ if I add picture
            // width={8}
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                We Help Gyms Rent Out Equipment
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Gyms looking for a way to make some money during these times can
                put their gym equipment not in use during these times on this website to rent to
                customers looking to have temporary equipment.
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Manange Your Inventory On This Website
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Keep track of your equipment rented and in stock on this website. Gyms can put all equipment
                wanting to sell on this website and manage it right here.
              </p>
            </Grid.Column>
            {/* <Grid.Column floated="right" width={6}>
              <Image
                bordered
                rounded
                size="large"
                src="/images/wireframe/white-image.png"
              />
            </Grid.Column> */}
          </Grid.Row>
        </Grid>
      </Segment>
    // </ResponsiveContainer>
)

const HomeContainer = () => {
    return (
        <div>
            <MenuContainer/>
            <HomepageHeading/>
            <UserInfo/>
            <GymInfo/>
            <AboutContainer/>
        </div>
    )
}

export default HomeContainer