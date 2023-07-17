import { useEffect, useState } from 'react';
import { putAppointmentAsync, selectSingleAppointment, getAppointmentAsync } from './administratorSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';



const ChangeAppointment = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const [newDate, setNewDate] = useState<string>("");
  const [newTime, setNewTime ] = useState<string>("");


  const handleSubmit = async (event: any) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('time', newTime);
    formData.append('date', newDate);
  
    try {
      await dispatch(putAppointmentAsync({ appointmentData: formData, id: String(appointment.id) }));
  
      toast.success('התור עודכן בהצלחה!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
  
      navigate('/administrator/get_appointments/');
    } catch (error) {
      toast.error('.שגיאה בעדכון התור. נסה שוב');
    }
  };

  const appointment = useAppSelector(selectSingleAppointment);

  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      dispatch(getAppointmentAsync(Number(id)));
    }
  }, [id, dispatch]);

  return (
<div style = {{overflowX: "hidden"}}>
  <div style={{ height: "200px"}} />
  <Form onSubmit={handleSubmit}>
    <Row className="justify-content-center mt-3">
      <Col md={2}>
        <Form.Group controlId="formTime" style = {{textAlign: "right"}}>
          <Form.Label>זמן</Form.Label>
          <Form.Control
          style={{ textAlign: "right"}}
            type="time"
            onChange={(event) => setNewTime(event.target.value)}
            required>
          </Form.Control>
        </Form.Group>
      </Col>
    </Row>

    <Row className="justify-content-center mt-3">
      <Col md={2}>
        <Form.Group controlId="formDate" style = {{textAlign: "right"}}>
          <Form.Label>תאריך</Form.Label>
          <Form.Control
          style={{ textAlign: "right" }}
            type="number"
            min="0"
            max="32"
            onChange={(event) => setNewDate(event.target.value)}
            required
          />
        </Form.Group>
      </Col>
    </Row>
    <br/>

    <Row className="justify-content-center mt-3">
      <Button style={{ width: "400px" }} variant="warning" type="submit">
        סיום עריכה
      </Button>
    </Row>

    <Row className="justify-content-center mt-3">
      <Button
        onClick={() => {
          navigate(`/administrator/get_appointments/`);
        }}
        variant="secondary"
        style={{ width: "200px" }}>
        ביטול
      </Button>
    </Row>

    <br />
  </Form>
</div>
  );
};

export default ChangeAppointment;
