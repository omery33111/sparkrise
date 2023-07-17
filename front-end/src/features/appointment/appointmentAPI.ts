import axios from "axios";
import { Appointment } from "../../models/Appointment";
import { appointmentURL } from "../../endpoints/endpoints";



  export function postAppointment(AppointmentData: any)
{
  return new Promise<{ data: Appointment }>((resolve) =>
    axios.post(`${appointmentURL}/post_appointment/`, AppointmentData).then((res) => resolve({ data: res.data })));
}
