import React from "react";
import { useForm, useFormState } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (data.email === user.email) {
      if (data.password === user.password) {
        navigate("/profile ");
      } else {
        alert("email or password didn't match");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <h2>Sign In</h2>
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
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};

export default SignIn;

// npm run dev
