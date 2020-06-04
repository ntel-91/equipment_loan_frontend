import React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const LoginModal = () => {

    return (
        <Modal trigger={<Button>Login</Button>}>
            <Modal.Header>Login</Modal.Header>
            
            <Modal.Content>
                <Link to='/login'>
                    <Button>Gym</Button>
                </Link>
                <Button>User</Button>
            </Modal.Content>
        </Modal>
    )
}

export default LoginModal
