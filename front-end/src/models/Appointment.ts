


export interface Appointment {
    id: string;
    first_name: string;
    last_name: string;
    time: string;
    date: string;
    message?: string;
  }
  
  export interface AppointmentState {
    appointments: Appointment[];
    selectedDate: number;
  }
