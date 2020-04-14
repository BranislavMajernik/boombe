import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';    

export default class Menu extends Component{

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render(){
        return(
            <div>
            <Navbar style={{backgroundColor: '#3377AA'}} dark expand="md">
            <NavbarBrand href="/">Business Opportunity Orchestrator MBE</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/">Orchestrator</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/provider">Provider</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/about">About</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
            </div>
        );
    }
}