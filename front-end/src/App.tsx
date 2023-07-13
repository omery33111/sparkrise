import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from './features/navigators/MyNavbar';
import HomePage from './features/navigators/HomePage';
import MyFooter from './features/navigators/MyFooter';




function App() {



  return (
    <div className="App">

      <MyNavbar />

      <Outlet />
      <HomePage />

      <MyFooter />
      
    </div>
  );
}



export default App;
