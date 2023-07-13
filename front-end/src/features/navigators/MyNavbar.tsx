import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'



const MyNavbar = () => {



  return (

    <div>

      <Navbar data-bs-theme="dark" style={{ height: "80px", backgroundColor: '#4C0013' }}>

        <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <Nav>

            <Nav.Link href="#pricing" style={{ color: 'white', position: 'absolute', top: 22, left: 850 }}><h5>SPARKRISE</h5></Nav.Link>

          </Nav>

        </Container>

      </Navbar>


    </div>

  )
}

export default MyNavbar