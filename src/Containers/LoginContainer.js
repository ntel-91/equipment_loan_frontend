import React, { useState } from 'react'
import _ from 'lodash'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'


const LoginContainer = () => {
    
    const [ name, setName ] = useState('')
    const [ password, setPassword ] = useState('')
    
    const handleSubmit = () => {
        
    }

    

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' textAlign='center'>Login</Header>
                <Form size='large' onSubmit={handleSubmit}>
                    <Segment stacked>
                        <Form.Input 
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='Gym/ Studio Name' 
                            onChange={e => setName(e.target.value)}
                        />
                        <Form.Input 
                            fluid 
                            icon='lock' 
                            iconPosition='left' 
                            placeholder='Password' 
                            type='password'
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button fluid size='large'>
                            Submit
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )    
}

export default LoginContainer