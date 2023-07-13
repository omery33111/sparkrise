import axios from "axios";
import { schedulerURL } from "../../endpoints/endpoints";
import { Schedule } from "../../models/Scheduler";



export function getSingleMonth(id: string) {
  return new Promise<{ data: Schedule }>((resolve) =>
    axios.get(`${schedulerURL}/get_month/${id}/`).then((res) => resolve({ data: res.data }))
  );
}



export function getAllMonths() {
  return new Promise<{ data: Schedule[] }>((resolve) =>
    axios.get(`${schedulerURL}/get_scheduler/`).then((res) => resolve({ data: res.data }))
  );
}
