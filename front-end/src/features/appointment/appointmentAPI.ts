import axios from "axios";
import { Appointment } from "../../models/Appointment";
import { appointmentURL } from "../../endpoints/endpoints";



  export function postAppointment(AppointmentData: any)
{
  return new Promise<{ data: Appointment }>((resolve) =>
    axios.post(`${appointmentURL}/post_appointment/`, AppointmentData).then((res) => resolve({ data: res.data })));
}



export function getAppointments()
{
  const myToken = JSON.parse(localStorage.getItem("token") as string)
  const accessToken = myToken ? myToken.access : "";
  let config = {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    }
  return new Promise<{ data: Appointment[] }>((resolve) =>
    axios.get(`${appointmentURL}/get_appointments/`, config).then((res) => resolve({ data: res.data })));
}
