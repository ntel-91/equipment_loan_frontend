import React from 'react'
import { Link } from 'react-router-dom'
import { Modal, Button } from 'semantic-ui-react'

const SignUpModal = () => {
    return (
        <Modal trigger={<Button primary>Sign Up</Button>}>
            <Modal.Header>Sign Up</Modal.Header>
            <Modal.Content>
                <Link to='/signup'>
                    <Button>Gym</Button>
                </Link>
                <Button>User</Button>
            </Modal.Content>
        </Modal>
    )
}

export default SignUpModal
