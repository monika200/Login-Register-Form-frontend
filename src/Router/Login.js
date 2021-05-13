import React from 'react';
import { Link } from 'react-router-dom';
import {  useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BACKEND_ENDPOINT } from './endpoint';
import './style.css';


const Form = () => {
   const history = useHistory();
  const { register, errors, handleSubmit } = useForm();


  const onSubmit = (data) => {
    console.log(data);
    // alert(JSON.stringify(data));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(`${BACKEND_ENDPOINT}/login`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("fetch data::", data);
        try {
          if (data.token) {
            localStorage.token=data.token;
            history.push("/home");
          } else alert(data.message);
        } catch (e) {
          alert(e.message);
        }
      });
  };

  return (
    <div className="App">
      <center>
        <h1 className="">Login Form</h1>
      </center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          ref={register({
            required: true,
          })}
        />
        {errors.email?.type === "required" && <p>Please Enter Your Email ID</p>}
        <label>Password</label>
        <input
          type="password"
          name="password"
          ref={register({
            required: true,
            minLength: 8,
          })}
        />
        {errors.password?.type === "required" && (
          <p>Please Enter Your Password</p>
        )}
		<p>
			Do not have an account? <Link to='/register'>register here</Link>
		</p>
		<p className=''>
			forgot passwrod? <Link to='/forgot'>reset here</Link>
		</p>

        <input type="submit" className="bg-success" />
      </form>
    </div>
  );
};

export default Form;