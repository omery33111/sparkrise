import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Accordion } from 'react-bootstrap';
import { deleteAppointmentAsync, deleteCallbackAsync, getAppointmentsAsync, getCallbacksAsync, selectAllAppointments, selectAllCallbacks } from './administratorSlice';
import { toast } from 'react-toastify';



const AllAppointments = () => {


  const dispatch = useAppDispatch();

  const appointments = useAppSelector(selectAllAppointments);
  const callbacks = useAppSelector(selectAllCallbacks);


  useEffect(() => {
    dispatch(getAppointmentsAsync());
    dispatch(getCallbacksAsync());
  }, [dispatch]);


  const currentDate = new Date();
// const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month
const currentYear = currentDate.getFullYear();


// RESIZING THE PAGE FOR THE NEEDS OF THE DATA AMOUNT
const [pageHeight, setPageHeight] = useState(0);

useEffect(() => {
  const calculatePageHeight = () => {
    const windowHeight = window.innerHeight;
    const calculatedHeight = windowHeight * 0.8;
    setPageHeight(calculatedHeight);
  };

  calculatePageHeight();
  window.addEventListener('resize', calculatePageHeight);

  return () => {
    window.removeEventListener('resize', calculatePageHeight);
  };
}, []);


const handleAppointmentDelete = async (id: string) => {
  try {
    await dispatch(deleteAppointmentAsync(id));
    const deletedAppointment = appointments.find((appointment) => appointment.id === id);
    if (deletedAppointment) {
      toast.success(`התור של '${deletedAppointment.first_name} ${deletedAppointment.last_name}' נמחק בהצלחה!`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  } catch (error) {
    toast.error('.שגיאה במחיקת התור. נסה שוב');
  }
};


const handleCallbackDelete = async (id: string) => {
  try {
    await dispatch(deleteCallbackAsync(id));
    const deletedCallback = callbacks.find((callback) => callback.id === id);
    if (deletedCallback) {
      toast.success(`הפרטים של '${deletedCallback.first_name} ${deletedCallback.last_name}' נמחקו בהצלחה!`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  } catch (error) {
    toast.error('.שגיאה במחיקת השיחה. נסה שוב');
  }
};


  
  return (

    <div style={{ height: `${pageHeight}px` }}>
      <div style={{ height: '10vh' }} />
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: "#D9A394", height: "90%"}}>
        <div style={{ marginRight: '22%', textAlign: 'right' }}>
          <br/>
          <h1 style = {{color: "white", position: "relative", right: "-15%"}}>השאירו פרטים</h1>
          <br/>
          <Accordion style = {{width: "130%"}}>
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

                  <p style={{ position: "absolute", right: "", transform: "translateY(-40px)" }}>
                <span>
                <a onClick={() => handleCallbackDelete(callback.id)} style={{ color: "red", cursor: "pointer" }}>מחק</a>
                </span>
              </p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        <div style={{ textAlign: 'right' }}>
          <br />
          <h1 style={{ color: "white", position: "relative", right: 25 }}>תורים</h1>
          <br />
          <Accordion style={{ width: "130%" }}>
            {appointments.map((appointment, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>
                  {appointment.first_name} {appointment.last_name} - {appointment.time}
                </Accordion.Header>
                <Accordion.Body>
                  <p>תאריך: {appointment.date}.{currentMonth}.{currentYear}</p>
                  <p>הודעה: {appointment.message}</p>

                  <p style={{ position: "absolute", right: "", transform: "translateY(-40px)" }}>
                <span>
                  <a href={"/administrator/get_appointment/" + appointment.id} style={{ color: "blue", textDecoration: "none" }}>ערוך</a>
                </span>{" "}
                |{" "}
                <span>
                  <a onClick = {() => handleAppointmentDelete(appointment.id)} style={{ color: "red", cursor: "pointer" }}>מחק</a>
                </span>
              </p>

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