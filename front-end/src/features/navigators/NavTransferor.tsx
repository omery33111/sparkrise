import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'



const NavTransferor = () => {



  return (

    <div>
        
        <Navbar data-bs-theme="dark" style={{ height: "130px", background: 'linear-gradient(to right, #4C0013, #6F4E37, #6F4E37, #B89D80, #6F4E37, #6F4E37, #4C0013)' ,
        boxShadow: '0 14px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 20px 0 rgba(0, 0, 0, 0.20)' }}>

    <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        <Nav>
            <Nav.Link href="#pricing" style={{ color: 'white', position: "absolute", top: 45, left: "63%" }}>
                <h5>אודותיי</h5>
            </Nav.Link>
        </Nav>

        <Nav>
            <Nav.Link href="/scheduler/get_month" style={{ color: 'white', position: "absolute", top: 45, left: "46.5%" }}>
                <h5>קביעת פגישה</h5>
            </Nav.Link>
        </Nav>

        <Nav>
            <Nav.Link href="#callback" style={{ color: 'white', position: "absolute", top: 45, left: "31%" }}>
                <h5>יצירת קשר</h5>
            </Nav.Link>
        </Nav>

    </Container>

</Navbar>

    </div>

  )
}

export default NavTransferor