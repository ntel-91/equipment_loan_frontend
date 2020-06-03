import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

const SignUpContainer = () => {
    

    
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' textAlign='center'>Sign Up</Header>
                <Form size='large'>
                    <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />

                    <Button fluid size='large'>
                        Login
                    </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    //     <Form>
    //         <Form.Group widths='equal'>
    //             <Form.Input fluid label='First name' placeholder='First name' />
    //             <Form.Input fluid label='Last name' placeholder='Last name' />
    //         </Form.Group>
    //         <Form.Checkbox label='I agree to the Terms and Conditions' />
    //     <Form.Button>Submit</Form.Button>
    //   </Form>
    )
}

export default SignUpContainer