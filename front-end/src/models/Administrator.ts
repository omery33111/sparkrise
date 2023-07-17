import { Appointment } from "./Appointment";
import { Callback } from "./Callback";




export interface AdministratorState {
    appointments: Appointment[],
    appointment: Appointment,
    callbacks: Callback[]
  };