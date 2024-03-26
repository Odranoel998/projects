import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PageRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    await signup(values);
    console.log(values);
  });

  return (
    <div className="bg-zinc-800 max-w-md pd-10 rounded-md">
      <h1>Register {user}</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-2"
          placeholder="Username"
        />
        {errors.username && <p className="text-red-500">username required</p>}
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-2"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">email required</p>}
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-2"
          placeholder="Password"
        />
        {errors.password && <p className="text-red-500">password required</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
