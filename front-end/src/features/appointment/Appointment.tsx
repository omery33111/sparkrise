import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { postAppointmentAsync, selectSelectedDay } from './appointmentSlice';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';



const Appointment = () => {
  const dispatch = useAppDispatch();
  const savedDate = useAppSelector(selectSelectedDay);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');


  const currentDate = new Date();
  // const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month
  const currentYear = currentDate.getFullYear();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
  
    const appointmentData = {
      first_name: firstName,
      last_name: lastName,
      time: time,
      date: savedDate,
      message: message || 'ללא הודעה.',
    };
  
    try {
      await dispatch(postAppointmentAsync(appointmentData));
      toast.success(`התור נקבע בהצלחה לשעה ${time} לתאריך ${savedDate}.${currentMonth}.${currentYear}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      setFirstName('');
      setLastName('');
      setTime('');
      setMessage('');
    } catch (error) {
      toast.error('.שגיאה בקביעת התור. נסה שוב');
    }
  };
  

  return (
    <div>
      <div style={{ textAlign: "right", width: "40%", position: "relative", left: "71%", transform: "translateY(75%)"}}>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Row>
                <Col>
                  <Form.Group controlId="formLastName">
                    <Form.Label>שם משפחה</Form.Label>
                    <Form.Control
                      type="text"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      required
                      style = {{textAlign: "right", boxShadow: '0 7px 10px 0 rgba(0, 0, 0, 0.6), 0 1px 20px 0 rgba(0, 0, 0, 0.20)'}}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>שם פרטי</Form.Label>
                    <Form.Control
                      type="text"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      required
                      style = {{textAlign: "right", boxShadow: '0 7px 10px 0 rgba(0, 0, 0, 0.6), 0 1px 20px 0 rgba(0, 0, 0, 0.20)'}}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="formTime">
                    <Form.Label className="justify-content-center mt-2">זמן</Form.Label>
                    <Form.Control
                      as="select"
                      type = "time"
                      value={time}
                      onChange={(event) => setTime(event.target.value)}
                      required
                      style={{ textAlign: "right", boxShadow: '0 7px 10px 0 rgba(0, 0, 0, 0.6), 0 1px 20px 0 rgba(0, 0, 0, 0.20)' }}
                    >
                      <option value="">בחר זמן</option>
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="14:00">14:00</option>
                      <option value="14:30">14:30</option>
                      <option value="15:00">15:00</option>
                      <option value="15:30">15:30</option>
                      <option value="16:00">16:00</option>
                      <option value="16:30">16:30</option>
                      <option value="17:00">17:00</option>
                      <option value="17:30">17:30</option>
                      <option value="18:00">18:00</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formMessage">
                <Form.Label className="justify-content-center mt-2">הודעה (לא חובה)</Form.Label>
                <Form.Control
                  as="textarea"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  style = {{textAlign: "right", boxShadow: '0 7px 10px 0 rgba(0, 0, 0, 0.6), 0 1px 20px 0 rgba(0, 0, 0, 0.20)'}}
                />
              </Form.Group>
              <br />
              {!savedDate && (
                <p style={{ color: 'red', position: "absolute", bottom: "-1%" }}>.בחר תאריך מלוח השנה</p>
              )}
              <Button
                style = {{boxShadow: '0 7px 10px 0 rgba(0, 0, 0, 0.6), 0 1px 20px 0 rgba(0, 0, 0, 0.20)'}}
                disabled={!savedDate}
                variant="success"
                type="submit">
                שלח פרטים
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default Appointment;
