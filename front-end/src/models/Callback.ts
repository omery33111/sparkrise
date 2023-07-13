


export interface Callback {
    id?: string;
    first_name: string;
    last_name: string;
    location: string;
    phone_number: string;
    email: string;
    message?: string;
  }
  
  export interface CallbackState {
    callbacks: Callback[];
  }

