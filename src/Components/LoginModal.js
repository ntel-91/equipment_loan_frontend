import React from 'react'
import { Modal, Button } from 'semantic-ui-react'

const LoginModal = () => {
    return (
        <Modal trigger={<Button>Login</Button>}>
            <Modal.Header>Login</Modal.Header>
            <Modal.Content>
                <Button>Gym</Button>
                <Button>User</Button>
            </Modal.Content>
        </Modal>
    )
}

export default LoginModal
