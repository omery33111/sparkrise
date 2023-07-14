import axios from "axios";
import { schedulerURL } from "../../endpoints/endpoints";
import { Schedule } from "../../models/Scheduler";



export function getAllMonths() {
  return new Promise<{ data: Schedule[] }>((resolve) =>
    axios.get(`${schedulerURL}/get_month/`).then((res) => resolve({ data: res.data }))
  );
}
