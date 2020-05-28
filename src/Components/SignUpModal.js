import React from 'react'
import { Modal, Button } from 'semantic-ui-react'

const SignUpModal = () => {
    return (
        <Modal trigger={<Button primary>Sign Up</Button>}>
            <Modal.Header>Sign Up</Modal.Header>
            <Modal.Content>
                <Button>Gym</Button>
                <Button>User</Button>
            </Modal.Content>
        </Modal>
    )
}

export default SignUpModal
