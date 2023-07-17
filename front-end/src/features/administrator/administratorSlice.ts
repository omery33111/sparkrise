import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { deleteAppointment, deleteCallback, getAppointment, getAppointments, getCallbacks, putAppointment } from "./administratorAPI";
import { AdministratorState } from "../../models/Administrator";



const initialState: AdministratorState = {
    appointments: [],
    appointment: {id: "",
                  first_name: "",
                    last_name: "",
                    time: "",
                    date: "",
                    message: ""},
    callbacks: []
  };



export const getCallbacksAsync = createAsyncThunk(
    'administrator/getCallbacks',
    async () => {
      const response = await getCallbacks();
      return response.data;
    }
  );

  
  export const deleteCallbackAsync = createAsyncThunk(
    'administrator/deleteCallback',
    async (id: string) => { await deleteCallback(id);
    return { id };
    }
  );



export const getAppointmentsAsync = createAsyncThunk(
    'administrator/getAppointments',
    async () => {
      const response = await getAppointments();
      return response.data;
    }
  );
  

export const getAppointmentAsync = createAsyncThunk(
  'administrator/getAppointment',
  async (id: number) => {
    const response = await getAppointment(id);
    return response.data;
  }
);


  export const putAppointmentAsync = createAsyncThunk(
    'administrator/putAppointment',
    async (data: {appointmentData: any, id: string}) => {
    const response = await putAppointment(data.appointmentData, data.id);
    return response;
    }
  )
  

  export const deleteAppointmentAsync = createAsyncThunk(
    'administrator/deleteAppointment',
    async (id: string) => { await deleteAppointment(id);
    return { id };
    }
  );





  export const administratorSlice = createSlice({
    name: 'administrator',
    initialState,
    reducers: {
      do: (state) => {
      },
  
      },
    extraReducers: (builder) => {
      builder
        .addCase(getCallbacksAsync.fulfilled, (state, action) =>
        {
          state.callbacks = action.payload;
        })
        .addCase(deleteCallbackAsync.fulfilled, (state, action) => {
          state.callbacks = state.callbacks.filter(callback => callback.id !== action.payload.id)
        })

        .addCase(getAppointmentsAsync.fulfilled, (state, action) =>
        {
          state.appointments = action.payload;
        })
        .addCase(getAppointmentAsync.fulfilled, (state, action) =>
        {
          state.appointment = action.payload
        })
        .addCase(putAppointmentAsync.fulfilled, (state, action) => {
          state.appointment = { ...state.appointment, ...action.payload }
        })
        .addCase(deleteAppointmentAsync.fulfilled, (state, action) => {
          state.appointments = state.appointments.filter(appointment => appointment.id !== action.payload.id)
        })

    },
  });




export const selectAllCallbacks = (state: RootState) => state.administrator.callbacks;

export const selectSingleAppointment = (state: RootState) => state.administrator.appointment;
export const selectAllAppointments = (state: RootState) => state.administrator.appointments;

export default administratorSlice.reducer;
