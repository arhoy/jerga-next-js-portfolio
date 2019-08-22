import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import BsNavLink from '../links/BsNavLink';

import '../../scss/components/header.scss';
import Link from 'next/link';

export default class Header extends React.Component {
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
  render() {
    return (
      <div>
        <Navbar
          className='port-navbar port-default absolute'
          color='transparent'
          dark
          expand='md'
        >
          <NavbarBrand className='port-navbar-brand' href='/'>
            Alex Quasar
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem className='port-navbar-item'>
                <BsNavLink className='port-navbar-link' label='Home' path='/' />
              </NavItem>
              <NavItem>
                <BsNavLink
                  className='port-navbar-link'
                  label='About'
                  path='/about'
                />
              </NavItem>
              <NavItem>
                <BsNavLink
                  className='port-navbar-link'
                  label='Blog'
                  path='/blog'
                />
              </NavItem>
              <UncontrolledDropdown className='port-navbar-link' nav inNavbar>
                <DropdownToggle className='port-navbar-link' nav caret>
                  Porfolio
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>CraveJs</DropdownItem>
                  <DropdownItem>Dash-Intel</DropdownItem>
                  <DropdownItem>
                    <Link href='/portfolios'>
                      <a> Portfolio </a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Login</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
