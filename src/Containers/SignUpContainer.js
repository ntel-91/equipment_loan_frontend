import React from 'react'
import faker from 'faker'
import _ from 'lodash'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

const SignUpContainer = () => {
    

    const addressDefinitions = faker.definitions.address
    const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
        key: addressDefinitions.state_abbr[index],
        text: state,
        value: addressDefinitions.state_abbr[index],
    }))
    
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' textAlign='center'>Sign Up</Header>
                <Form size='large'>
                    <Segment stacked>

                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Gym/ Studio Name'/>
                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
                        <Form.Input fluid icon='home' iconPosition='left' placeholder='Address' />
                        <Form.Group>
                            <Form.Input fluid placeholder='City' width={10}/>
                            <Form.Select fluid placeholder='State' options={stateOptions} width={6}/>
                        </Form.Group>
                        <Form.Input fluid placeholder='Zip Code' width={8}/>
                        <Form.Input fluid placeholder='Image (optional)' />

                        <Button fluid size='large'>
                            Login
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default SignUpContainer