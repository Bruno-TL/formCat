"use client";

import { useForm, SubmitHandler } from "react-hook-form";

export default function Signin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center items-center flex-col gap-8 mt-8 w-1/2 bg-white p-5 rounded-lg"
    >
      <div className="flex flex-col w-80 justify-center">
        <input
          {...register("email", { required: true })}
          placeholder="Email"
          className="w-full h-10 text-center rounded-lg bg-slate-950 text-white"
        />
        {errors.email && (
          <span className="text-red-600">This field is required</span>
        )}
      </div>

      <div className="flex flex-col w-80 justify-center">
        <input
          {...register("name", { required: true })}
          placeholder="Nome"
          className="w-full h-10 text-center rounded-lg bg-slate-950 text-white"
        />
        {errors.name && (
          <span className="text-red-600">This field is required</span>
        )}
      </div>

      <div className="flex flex-col w-80 justify-center">
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Senha"
          className="w-full h-10 text-center rounded-lg bg-slate-950 text-white"
        />
        {errors.password && (
          <span className="text-red-600">This field is required</span>
        )}
      </div>

      <div className="flex flex-col w-80 justify-center">
        <input
          type="password"
          {...register("passwordTest", { required: true })}
          placeholder="Confirme a Senha"
          className="w-full h-10 text-center rounded-lg bg-slate-950 text-white"
        />
        {errors.passwordTest && (
          <span className="text-red-600">This field is required</span>
        )}
      </div>

      <input type="submit" className="bg-lime-600 w-1/4 rounded-lg h-10" />
    </form>
  );
}
