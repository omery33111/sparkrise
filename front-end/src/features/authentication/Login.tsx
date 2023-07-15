import { useEffect, useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useNavigate } from 'react-router-dom';
import { loginAsync, reset } from "./authenticationSlice"
import { Button } from 'react-bootstrap';



const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });

      const { username, password } = formData;

      const navigate = useNavigate();
      const dispatch = useAppDispatch();

      const { userName, isSuccess } = useAppSelector(
        (state) => state.authentication
      );


      useEffect(() =>
      {
          if (isSuccess)
          {
              navigate("/")
          }

          dispatch(reset())

      }, [userName, isSuccess, navigate, dispatch])


      const onChange = (e:any) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
      };

      const onSubmit = (e: any) => {
        e.preventDefault();
      
        const userData = {
          username,
          password,
        };
        dispatch(loginAsync(userData))
  };

  return (
    <div className="container d-flex justify-content-center">
      
  <form className="form-group col-md-6" onSubmit={onSubmit}>
  <div style = {{height: "200px"}} />
  <h1 className="text-center">
      <FaSignInAlt /> התחברות
    </h1>
    <p className="text-center">הזן את פרטי המשתמש</p>

    <div className="form-group">
      <input
      style = {{textAlign: "right"}}
        type="text"
        className="form-control"
        id="username"
        name="username"
        value={username}
        placeholder="הזן שם משתמש"
        onChange={onChange}
      />
    </div><br/>

    <div className="form-group">
      <input
      style = {{textAlign: "right"}}
        type="password"
        className="form-control"
        id="password"
        name="password"
        value={password}
        placeholder="סיסמה"
        onChange={onChange}
      />
    </div><br/>

    <div className="form-group text-center">
      <Button type="submit" className="btn btn-success">
        התחברות
      </Button><br/><br/>
    </div>
  </form>
  
</div>


  )
}

export default Login
