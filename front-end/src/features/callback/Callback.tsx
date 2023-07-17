import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useAppDispatch } from '../../app/hooks';
import { postCallbackAsync } from './callbackSlice';

const Callback = () => {
  const dispatch = useAppDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const callbackData = {
      first_name: firstName,
      last_name: lastName,
      location: location,
      phone_number: phoneNumber,
      email: email,
      message: message || 'ללא הודעה.'
    };

    dispatch(postCallbackAsync(callbackData));

    setFirstName('');
    setLastName('');
    setLocation('');
    setPhoneNumber('');
    setEmail('');
    setMessage('');

  };

  return (

    
    <div >

        
 <Container fluid style={{ backgroundColor: "#8B6C50", height: "450px", width: "72%", borderRadius: '15px', position: "relative", transform: "translateX(0px) translateY(260px)",
             boxShadow: '0 14px 12px 0 rgba(0, 0, 0, 0.4), 0 1px 60px 0 rgba(0, 0, 0, 0.30)'}}>

    <div style={{ textAlign: "right", position: "relative", left: -90, top: -220}}>
    <Col md={9}>
        
      <div style={{ height: '250px' }} />
      
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center mt-3">
          <Col md={6}>
            <Row>
              <Col>
                <Form.Group controlId="formLastName">
                  <Form.Label style = {{color: "white"}}>שם משפחה</Form.Label>
                  <Form.Control
                  style = {{textAlign: 'right', boxShadow: '0 14px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 30px 0 rgba(0, 0, 0, 0.30)'}}
                    type="text"
                    value = {lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formFirstName">
                  <Form.Label style = {{color: "white"}}>שם פרטי</Form.Label>
                  <Form.Control
                  style = {{textAlign: 'right', boxShadow: '0 14px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 30px 0 rgba(0, 0, 0, 0.30)'}}
                    type="text"
                    value = {firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
              <Form.Group controlId="formPhoneNumber">
                  <Form.Label style = {{color: "white"}}>מספר טלפון</Form.Label>
                  <Form.Control
                  style = {{textAlign: 'right', boxShadow: '0 14px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 30px 0 rgba(0, 0, 0, 0.30)'}}
                    type="text"
                    value = {phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
              <Form.Group controlId="formLocation">
              <Form.Label style = {{color: "white"}}>איזור בארץ</Form.Label>
              <Form.Select
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                required
                style = {{textAlign: "right"}}
              >
                <option value="">בחר איזור</option>
                <option value="צפון">צפון</option>
                <option value="מרכז">מרכז</option>
                <option value="דרום">דרום</option>
                <option value="אילת">אילת</option>
                
              </Form.Select>
            </Form.Group>
                
              </Col>
            </Row>
            <Form.Group controlId="formEmail">
              <Form.Label style = {{color: "white"}}>כתובת אימייל</Form.Label>
              <Form.Control
              style = {{textAlign: 'right', boxShadow: '0 14px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 30px 0 rgba(0, 0, 0, 0.30)'}}
                type="email"
                value = {email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label style = {{color: "white"}}>הודעה <small>(לא חובה)</small></Form.Label>
              <Form.Control
              style = {{textAlign: 'right', boxShadow: '0 14px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 30px 0 rgba(0, 0, 0, 0.30)'}}
                as="textarea"
                value = {message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Form.Group>
            <br/>
            <Button variant="success" type="submit" style={{ width: "40%", position: "relative", left: "-29%",
                                                            boxShadow: '0 14px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 30px 0 rgba(0, 0, 0, 0.30)'}}>
              !שלח פרטים
            </Button>
          </Col>
        </Row>
      </Form>
    </Col>
    </div>


  </Container>

  <div style={{ color: 'white', position: "absolute", transform: "translateX(1260px) translateY(-120px)"}}>

  <h3>קבלת ייעוץ לפגישה</h3>

  <div style = {{textAlign: "right", position: "relative", transform: "translateX(-150px) translateY(25px)"}}>
    ,אני מאפשרת דיאלוג ראשוני למען תיאום והבנה של התהליך<br />
    .נושא ומהות התהליך ועוד פרטים עניניים<br />
    <br />
    !מלאו פרטים ואחזור אליכם עם כל המידע הדרוש תוך 24 שעות
    

  </div>

  </div>

  <img style={{ position: "relative", bottom: -65, left: 1230, filter: "invert(100%)"}}
          className="d-block w-10"
          src={require('../../images/24.png')}
          alt="24 hours"
          height="170"
          width = "170"/>


</div>

  );
};

export default Callback;
