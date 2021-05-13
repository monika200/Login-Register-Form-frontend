import './style.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { BACKEND_ENDPOINT } from './endpoint';
const Form = () => {
  const { register, errors, handleSubmit, watch } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    // alert(JSON.stringify(data));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    };
    fetch(`${BACKEND_ENDPOINT}/register`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        //console.log("fetch data::", data);
        alert(data.message);
        try {
          // await Auth.signIn(email, password);
          // userHasAuthenticated(true);
          if (data.message === "Registration successful..!!") {
            history.push("/login");
          }
        } catch (e) {
          alert(e.message);
        }
      });
  };

  return (
    <div className="App container">
      <center>
        <h1 className="text-uppercase">Registration Form</h1>
      </center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="">Name</label>
        <input type="text" name="name" placeholder=" Your Name " ref={register({ required: true })} />
        {errors.name && <p>First name is required</p>}
        <label>Email</label>
        <input
        placeholder=" something@mail.com "
          type="email"
          name="email"
          ref={register({
            required: true,
          })}
        />
        {errors.email?.type === "required" && <p>Your input is required</p>}
        <label>Password</label>
        <input
        placeholder="Choose a strong password"
          type="password"
          name="password"
          ref={register({
            required: true,
            minLength: 8,
          })}
        />
        {errors.password?.type === "required" && <p>Your input is required</p>}
        {errors.password?.type === "minLength" && (
          <p>Your password must be larger then 8 characters</p>
        )}
        <label>Retype Password</label>
        <input
        placeholder=" Type your password again "
          type="password"
          name="retype_password"
          ref={register({
            required: true,
            minLength: 8,
          })}
        />
        {errors.retype_password?.type === "required" && (
          <p>Your input is required</p>
        )}
        {errors.retype_password?.type === "minLength" && (
          <p>Your password must be larger then 8 characters</p>
        )}
        {watch("password") !== watch("retype_password") && (
          <p>Retype the Correct Password</p>
        )}

        <input className="bg-primary" type="submit" />
      </form>
    </div>
  );
};

export default Form;