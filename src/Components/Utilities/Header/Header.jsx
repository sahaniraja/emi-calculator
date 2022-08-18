import React from 'react'
import {Navbar,Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
    <Navbar style={{backgroundColor:'#abdbdb'}} expand='lg'>
      <Container fluid>
        <Navbar.Brand className='text-dark'><Link to={'/'} className='navbar-brand'><i className='fa fa-calculator'/>Calculator</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
            <Nav className='me-auto my-2 my-lg-0' navbarScroll>
                <Link to={'/homeloan'} className='text-dark navbar-brand' >Home Loan</Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header