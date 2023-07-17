import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import Scheduler from './features/scheduler/Scheduler';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './features/navigators/HomePage';
import Login from './features/authentication/Login';
import AllAppointments from './features/appointment/AllAppointments';



const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>

    <BrowserRouter>

    <Routes>

          <Route path = "/" element={<App />}>

            <Route path = "/" element = {<HomePage />} />

            <Route path = "/scheduler/get_month" element={<Scheduler />} />

            <Route path = "/authentication/login" element={<Login />} />

            <Route path = "/appointment/get_appointments" element={<AllAppointments />} />

          </Route>
        </Routes>

    </BrowserRouter>
    
    </Provider>
  </React.StrictMode>
);
