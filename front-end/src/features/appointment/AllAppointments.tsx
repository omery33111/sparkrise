import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAppointmentsAsync, selectAppointments } from './appointmentSlice';
import { getCallbacksAsync, selectCallbacks } from '../callback/callbackSlice';
import { Accordion } from 'react-bootstrap';

const AllAppointments = () => {


  const dispatch = useAppDispatch();


  const appointments = useAppSelector(selectAppointments);
  const callbacks = useAppSelector(selectCallbacks);


  useEffect(() => {
    dispatch(getAppointmentsAsync());
    dispatch(getCallbacksAsync());
  }, [dispatch]);


  const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month
const currentYear = currentDate.getFullYear();


  
  return (

    <div>
      <div style={{ height: '10vh' }} />
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <div style={{ marginRight: '22%', textAlign: 'right' }}>
          <h1 style = {{position: "relative", right: "-15%"}}>השאירו פרטים</h1>
          <Accordion style = {{textAlign: "right", width: "130%"}}>
            {callbacks.map((callback, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>
                  {callback.first_name} {callback.last_name}
                </Accordion.Header>
                <Accordion.Body>
                  <p>מיקום בארץ: {callback.location}</p>
                  <p>מספר טלפון: {callback.phone_number}</p>
                  <p>{callback.email} :אימייל</p>
                  <p>הודעה: {callback.message}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        <div style={{ textAlign: 'right' }}>
          <h1>תורים</h1>
          <Accordion  style = {{textAlign: "right", width: "130%"}}>
            {appointments.map((appointment, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>
                  {appointment.first_name} {appointment.last_name} - {appointment.time}
                </Accordion.Header>
                <Accordion.Body>
                  <p>תאריך: {appointment.date}.{currentMonth}.{currentYear}</p>
                  <p>הודעה: {appointment.message}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>

  )
}

export default AllAppointments