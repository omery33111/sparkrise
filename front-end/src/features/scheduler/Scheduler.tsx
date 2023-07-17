import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAllMonthsAsync, postMonthAsync, selectAllMonths } from './schedulerSlice';
import { Button, Card } from 'react-bootstrap';
import { selectIsLogged } from '../authentication/authenticationSlice';
import Appointment from '../appointment/Appointment';
import { selectDay, selectSelectedDay } from '../appointment/appointmentSlice';



const Scheduler = () => {

  const dispatch = useAppDispatch();

  const schedule = useAppSelector(selectAllMonths);

  const storedIsStaff = JSON.parse(localStorage.getItem('is_staff') as string);

  const handleButtonClick = () => {
    dispatch(postMonthAsync());
  };

  useEffect(() => {
      dispatch(getAllMonthsAsync());
  }, [dispatch]);

  const selectedDay = useAppSelector(selectSelectedDay);

  const handleDayClick = (day: number) => {
    if (day === selectedDay) {
      dispatch(selectDay(null)); // Un-choose the day if already selected
    } else {
      dispatch(selectDay(day)); // Choose the clicked day
    }
  };

  return (

    <div>

        <Appointment />

        {storedIsStaff && 
    <div style = {{position: "absolute", top: "15%", left: "33%"}}>
    <Button style = {{boxShadow: '0 14px 20px 0 rgba(0, 0, 0, 0.6), 0 1px 60px 0 rgba(0, 0, 0, 0.60)'}} variant = "success" onClick={handleButtonClick}>!חודש חדש עכשיו</Button>
    </div>}

    <div style = {{ position: "absolute", left: 270, top: 260 }}>

    <div style = {{backgroundColor: "#D9A394", position: "absolute", left: -37, top: -50, width: "92vh", height: "70vh",
                    boxShadow: '0 14px 20px 0 rgba(0, 0, 0, 0.6), 0 1px 60px 0 rgba(0, 0, 0, 0.60)'}}></div>
      {schedule.map((scheduler) => (
        <div key={scheduler.id}>
          {Array.from({ length: scheduler.days }, (_, index) => index + 1).map((number, index) => (
            <React.Fragment key={number}>
              
              <Card
                  style={{
                    backgroundColor: number === selectedDay ? '#D9A394' : 'white',
                    color: "black",
                    display: "inline-block",
                    borderRadius: "0",
                    width: "12vh",
                    height: "12vh",
                  }}
                  onClick={() => handleDayClick(number)}
                >
                  <div style={{ position: "relative", top: "10%", right: "-75%" }}>{number}</div>
                </Card>

              {(index + 1) % 7 === 0 && <br />}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>



    <div style = {{height: "60vh"}} />
    </div>
    
  );
};



export default Scheduler;
