import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import "../components/Signup.css";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/signin");
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>Sign Up</h2>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Sign Up</button>
      <p>Already Have Account ?</p>
      <Link to="/signin">Sign In</Link>
    </form>
  );
};

export default SignUp;
