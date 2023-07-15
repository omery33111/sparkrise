import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from './features/navigators/MyNavbar';
import MyFooter from './features/navigators/MyFooter';
import { LoggedOff, LoggedOn } from './features/authentication/authenticationSlice';
import { useAppDispatch } from './app/hooks';




function App() {

  const dispatch = useAppDispatch()

  const myToken = JSON.parse(localStorage.getItem('token') as string)
  const accessToken = myToken?.access
  const isStaff = myToken?.is_staff

useEffect(() => {
  if (accessToken) {
    localStorage.setItem('token', JSON.stringify({ access: accessToken, is_staff: isStaff }))
    dispatch(LoggedOn())
  } if (accessToken == null) {
    localStorage.removeItem('is_staff')
    localStorage.removeItem('token')
    dispatch(LoggedOff())
  }
}, [accessToken, isStaff])



  return (
    <div className="App">

      <MyNavbar />

      <Outlet />

      <MyFooter />
      
    </div>
  );
}



export default App;
