import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAllMonthsAsync, postMonthAsync, selectAllMonths } from './schedulerSlice';
import { Button, Card } from 'react-bootstrap';
import { selectIsLogged } from '../authentication/authenticationSlice';



const Scheduler = () => {

  const dispatch = useAppDispatch();

  const schedule = useAppSelector(selectAllMonths);

  const isLogged = useAppSelector(selectIsLogged)


  const handleButtonClick = () => {
    dispatch(postMonthAsync());
  };

  useEffect(() => {
      dispatch(getAllMonthsAsync());
  }, [dispatch]);

  return (

    <div>

    {isLogged && 
    <div>
    <Button variant = "success" onClick={handleButtonClick}>!חודש חדש עכשיו</Button>
    </div>}


      
    <div style = {{position: "relative", left: 330, top: 190}}>

    <div style = {{backgroundColor: "#D9A394", position: "absolute", left: -37, top: -40, width: "80vh", height: "80vh",
                    boxShadow: '0 14px 20px 0 rgba(0, 0, 0, 0.6), 0 1px 60px 0 rgba(0, 0, 0, 0.60)'}}></div>
      {schedule.map((scheduler) => (
        <div key={scheduler.id}>
          {Array.from({ length: scheduler.days }, (_, index) => index + 1).map((number, index) => (
            <React.Fragment key={number}>
              
              <Card style={{ backgroundColor: "white", color: "black", display: "inline-block", borderRadius: "0", width: "12vh", height: "12vh" }}>
              <div style={{ position: "relative", top: "10%", right: "-75%" }}>
                
              {number}

                </div>
              </Card>

              {(index + 1) % 6 === 0 && <br />}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>




    </div>
    
  );
};



export default Scheduler;
