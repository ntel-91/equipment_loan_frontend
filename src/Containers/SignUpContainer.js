import React, { useState } from 'react'
import faker from 'faker'
import _ from 'lodash'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

const SignUpContainer = () => {
    
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [img, setImg] = useState('')
    
    const addressDefinitions = faker.definitions.address
    const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
        key: addressDefinitions.state_abbr[index],
        text: state,
        value: addressDefinitions.state_abbr[index],
    }))
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const gymData = {
            name: name,
            password: password,
            address: address,
            city: city,
            state: state,
            zip: zip,
            img: img
        }
        handleSignUp(gymData)
    }

    const handleSignUp = (data) => {
        fetch('http://localhost:3000/api/v1/gyms',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"   
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

     

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' textAlign='center'>Sign Up</Header>
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
                        <Form.Input 
                            fluid 
                            icon='home' 
                            iconPosition='left' 
                            placeholder='Address' 
                            onChange={e => setAddress(e.target.value)}
                        />
                        <Form.Group>
                            <Form.Input 
                                fluid 
                                placeholder='City' 
                                width={10}
                                onChange={e => setCity(e.target.value)}
                            />
                            <Form.Select 
                                fluid 
                                placeholder='State' 
                                options={stateOptions} 
                                width={6}
                                onChange={(e, { value }) => setState(value)}
                            />
                        </Form.Group>
                        <Form.Input 
                            fluid 
                            placeholder='Zip Code' 
                            width={8}
                            onChange={e => setZip(e.target.value)}
                        />
                        <Form.Input 
                            fluid 
                            placeholder='Image (optional)' 
                            onChange={e => setImg(e.target.value)}
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

export default SignUpContainer