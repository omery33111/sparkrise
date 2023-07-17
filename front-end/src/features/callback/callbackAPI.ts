import axios from "axios";
import { Callback } from "../../models/Callback";
import { callbackURL } from "../../endpoints/endpoints";



  export function postCallback(callbackData: Callback)
{
  return new Promise<{ data: Callback }>((resolve) =>
    axios.post(`${callbackURL}/post_callback/`, callbackData).then((res) => resolve({ data: res.data })));
}



export function getCallbacks()
{
  const myToken = JSON.parse(localStorage.getItem("token") as string)
  const accessToken = myToken ? myToken.access : "";
  let config = {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    }
  return new Promise<{ data: Callback[] }>((resolve) =>
    axios.get(`${callbackURL}/get_callbacks/`, config).then((res) => resolve({ data: res.data })));
}
