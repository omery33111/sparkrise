import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import Scheduler from './features/scheduler/Scheduler';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Callback from './features/callback/Callback';



const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>

    <BrowserRouter>

    <Routes>

      <Route path = "/" element={<App />} />


      <Route path = "/callback/post_callback/" element={<Callback />} />


      <Route path = "/scheduler/get_month">
        <Route index element = {<Scheduler />} />
        <Route path = ":id" element = {<Scheduler />} />
      </Route>
      
    </Routes>


    </BrowserRouter>
    
    </Provider>
  </React.StrictMode>
);
