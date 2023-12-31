import axios from "axios";
import { schedulerURL } from "../../endpoints/endpoints";
import { Schedule } from "../../models/Scheduler";



export function getAllMonths() {
  return new Promise<{ data: Schedule[] }>((resolve) =>
    axios.get(`${schedulerURL}/get_month/`).then((res) => resolve({ data: res.data }))
  );
}


export function getMonth(id: string) {
  return new Promise<{ data: Schedule }>((resolve) =>
    axios.get(`${schedulerURL}/single_month/${id}/`).then((res) => resolve({ data: res.data }))
  );
}


export function postMonth() {
  return new Promise<{ data: any }>((resolve) =>
    axios.post(`${schedulerURL}/post_month/`).then((res) => resolve({ data: res.data }))
  );
}
