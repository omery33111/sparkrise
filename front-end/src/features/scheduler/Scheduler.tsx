import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAllMonthsAsync, selectAllMonths } from './schedulerSlice';



const Scheduler = () => {

  const dispatch = useAppDispatch();

  const schedule = useAppSelector(selectAllMonths);

  useEffect(() => {
      dispatch(getAllMonthsAsync());
  }, [dispatch]);

  return (
    <div>

      {schedule.map((scheduler) => (
          <div key={scheduler.id}>
            {Array.from({ length: scheduler.days }, (_, index) => index + 1).map((number, index) => (
              <React.Fragment key={number}>
                <div style={{ display: "inline-block" }}>{number}</div>
                {(index + 1) % 6 === 0 && <br />}
              </React.Fragment>
            ))}
          </div>
        ))}



    </div>
  );
};



export default Scheduler;
