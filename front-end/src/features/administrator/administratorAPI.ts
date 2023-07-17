import axios from "axios";
import { Appointment } from "../../models/Appointment";
import { Callback } from "../../models/Callback";
import { administratorURL } from "../../endpoints/endpoints";



export function getAppointments()
{
  const myToken = JSON.parse(localStorage.getItem("token") as string)
  const accessToken = myToken ? myToken.access : "";
  let config = {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    }
  return new Promise<{ data: Appointment[] }>((resolve) =>
    axios.get(`${administratorURL}/get_appointments/`, config).then((res) => resolve({ data: res.data })));
}



export function getAppointment(id: number) {
  const myToken = JSON.parse(localStorage.getItem("token") as string)
  const accessToken = myToken ? myToken.access : "";
  let config = {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    }
  return new Promise<{ data: Appointment }>((resolve) =>
    axios.get(`${administratorURL}/get_appointment/${id}/`, config).then((res) => resolve({ data: res.data }))
  );
}



export function putAppointment(appointmentData: any, id: string) {
  const myToken = JSON.parse(localStorage.getItem("token") as string)
    const accessToken = myToken ? myToken.access : "";
    let config = {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      }
  return new Promise<{ data: Appointment }>((resolve) =>
    axios.put(`${administratorURL}/put_appointment/${id}/`, appointmentData, config).then((res) => resolve({ data: res.data }))
  );
}



export function deleteAppointment(id: string) {
  const myToken = JSON.parse(localStorage.getItem("token") as string)
  const accessToken = myToken ? myToken.access : "";
  let config = {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    }
  return new Promise<{ data: Appointment }>((resolve) =>
    axios.delete(`${administratorURL}/delete_appointment/${id}/`, config).then((res) => resolve({ data: res.data }))
  );
}





export function getCallbacks()
{
  const myToken = JSON.parse(localStorage.getItem("token") as string)
  const accessToken = myToken ? myToken.access : "";
  let config = {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    }
  return new Promise<{ data: Callback[] }>((resolve) =>
    axios.get(`${administratorURL}/get_callbacks/`, config).then((res) => resolve({ data: res.data })));
}



export function deleteCallback(id: string) {
  const myToken = JSON.parse(localStorage.getItem("token") as string)
  const accessToken = myToken ? myToken.access : "";
  let config = {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    }
  return new Promise<{ data: Callback }>((resolve) =>
    axios.delete(`${administratorURL}/delete_callback/${id}/`, config).then((res) => resolve({ data: res.data }))
  );
}
