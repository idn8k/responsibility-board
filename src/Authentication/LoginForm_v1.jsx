import { useState } from "react";
import { useLogin } from "./useLogin";
import Loader from "../ui/Loader";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  if (isPending) return <Loader />;

  return (
    <div className="container mx-auto my-0 flex h-screen w-4/5 flex-col items-center justify-center gap-10">
      <div className="text-8xl font-bold text-pokpok-blue">AO</div>
      <form
        className="container flex max-w-xl flex-col items-center justify-around gap-20 rounded-3xl bg-white bg-[url(src/images/ao_bg_1.jpeg)] p-20 shadow-md"
        onSubmit={handleSubmit}
      >
        <input
          className="form-input min-w-80 rounded-md p-1.5 py-2 text-pokpok-blue"
          placeholder="Email"
          value={email}
          type="email"
          id="email"
          autoComplete="email"
          disabled={isPending}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-input min-w-80 rounded-md p-1.5 py-2 text-pokpok-blue"
          placeholder="Password"
          value={password}
          type="password"
          id="password"
          disabled={isPending}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="min-w-80 rounded-md bg-[#26393f] py-2 text-xl font-bold text-white mix-blend-hard-light">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
