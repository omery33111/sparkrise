import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from './features/navigators/MyNavbar';
import MyFooter from './features/navigators/MyFooter';
import { LoggedOff, LoggedOn } from './features/authentication/authenticationSlice';
import { useAppDispatch } from './app/hooks';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



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
}, [accessToken, isStaff, dispatch])




  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>

      <MyNavbar />

      <Outlet />

      <MyFooter />
      
    </div>
  );
}



export default App;
