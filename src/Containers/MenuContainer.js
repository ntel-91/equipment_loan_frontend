import React, { Component } from 'react'
import { Menu, Modal, Button, Image, Header } from 'semantic-ui-react'
import LoginModal from '../Components/LoginModal'
import SignUpModal from '../Components/SignUpModal'

class MenuContainer extends Component {
    
    
    handleClick = (e, {name}) => {
        
    }

    render(){
        return (
            <Menu secondary>
                <Menu.Item
                    name='home'
                />
                <Menu.Item
                    name='about'
                />
            <Menu.Menu position='right'>
                <Menu.Item>
                    <LoginModal/>
                </Menu.Item>
                <Menu.Item>
                    <SignUpModal/>
                </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default MenuContainer