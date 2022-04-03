import { useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    if (email.length && password.length) {
      try {
        const userRes: any = await fetch("http://localhost:8080/user", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        const user = await userRes.json();
        if (user) {
          localStorage.setItem("userId", user.id);
          localStorage.setItem("username", user.name);
          localStorage.setItem("emotion", user.emotion);
          router.push("/");
        }
      } catch (e) {
        console.error("ERROR", e);
      }
    }
  };

  return (
    <Layout title="Login | WELLBEAN">
      <div className="h-full grid place-items-center">
        <div className="w-72">
          <h1 className="text-neutral-500 text-2xl font-bold mb-8">Login</h1>
          <label htmlFor="email" className="text-neutral-500 font-bold">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-1 mb-5 rounded-full focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="text-neutral-500 font-bold">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-1 rounded-full focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-red btn-red:hover mt-10"
            onClick={handleLogin}
          >
            Log in
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
