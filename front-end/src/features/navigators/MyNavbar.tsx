import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useAppDispatch } from '../../app/hooks'
import { useNavigate } from 'react-router-dom'
import { logoutAsync, reset } from '../authentication/authenticationSlice'



const MyNavbar = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const storedIsStaff = JSON.parse(localStorage.getItem('is_staff') as string);

  const onLogout = () => {
    dispatch(logoutAsync());
    dispatch(reset());
    window.location.reload();
  };

  return (

    <div>

      <Navbar className='text-center' data-bs-theme="dark" style={{ height: "80px", backgroundColor: '#4C0013' }}>

        <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <Nav>

            <Nav.Link href = "/" style={{ color: 'white'}}><h5>SPARKRISE</h5></Nav.Link>

          </Nav>

          <Nav>
        {storedIsStaff ? (
          <Nav.Link style = {{ position: 'absolute', top: 15, left: 1650 }}>
            <Button style = {{ color: 'white'}} variant = "none" onClick={() => onLogout()} >התנתקות</Button>
          </Nav.Link>
        ) : (
          <Nav.Link href="/authentication/login" style={{ color: 'white', position: 'absolute', top: 22, left: 1650 }}>
            התחברות כצוות
          </Nav.Link>
        )}
      </Nav>

        </Container>

      </Navbar>


    </div>

  )
}

export default MyNavbar