import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import LoaderMini from "../ui/LoaderMini";

function LoginForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, isPending } = useLogin();

  function onSubmit(data) {
    if (!data.email || !data.password) return;
    login({ email: data.email, password: data.password });

    reset();
  }

  return (
    <div className="container mx-auto my-0 flex h-screen w-4/5 flex-col items-center justify-center gap-10">
      <div className="text-8xl font-bold text-pokpok-blue">AO</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex max-w-xl flex-col items-center justify-around gap-20 rounded-3xl bg-white bg-[url(src/images/ao_bg_1.jpeg)] p-20 shadow-md"
      >
        <input
          className="form-input min-w-80 rounded-md p-1.5 py-2 text-pokpok-blue"
          {...register("email", { required: "Email is requiered" })}
          placeholder="Email"
          disabled={isPending}
        />

        <input
          className="form-input min-w-80 rounded-md p-1.5 py-2 text-pokpok-blue"
          {...register("password", { required: "Password is requiered" })}
          placeholder="Password"
          disabled={isPending}
        />
        <input
          className="min-w-80 rounded-md bg-white py-2 text-lg  text-pokpok-blue"
          type="Submit"
          disabled={isPending}
        />
      </form>
    </div>
  );
}

export default LoginForm;
