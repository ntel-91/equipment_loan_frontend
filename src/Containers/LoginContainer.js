import React, { useState } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'


const LoginContainer = (props) => {
    
    const [ accountName, setAccountName ] = useState('')
    const [ password, setPassword ] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const gymData = {
            accountName: accountName,
            password: password
        }
        handleLogin(gymData)
    }

    const handleLogin = (loginData) => { 
        fetch("http://localhost:3001/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(loginData)
        })
        .then(res => res.json())
        .then(response => {
            if(response.errors) {
                alert(response.errors)
            } else {
                localStorage.setItem("token", response.token)
                console.log(props)
                props.history.push('/')
                
            }
        })
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
                            placeholder='Account Name' 
                            onChange={e => setAccountName(e.target.value)}
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