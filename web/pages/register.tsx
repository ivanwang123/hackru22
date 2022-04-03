import { useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

function Register() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = async () => {
    if (email.length && name.length && password.length) {
      try {
        const userRes: any = await fetch("http://localhost:8080/user/create", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            name: name,
            password: password,
          }),
        });
        const user = await userRes.json();
        console.log("USER", user);
        localStorage.setItem("userId", user.id);
        localStorage.setItem("username", user.name);
        router.push("/");
      } catch (e) {
        console.error("ERROR", e);
      }
    }
  };

  return (
    <Layout title="Register | WELLBEAN">
      <div className="h-full grid place-items-center">
        <div className="w-72">
          <h1 className="text-neutral-500 text-2xl font-bold mb-8">Register</h1>
          <label htmlFor="email" className="text-neutral-500 font-bold">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-1 mb-5 rounded-full focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="name" className="text-neutral-500 font-bold">
            Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-1 mb-5 rounded-full focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="password" className="text-neutral-500 font-bold">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-1 mb-5 rounded-full focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-red btn-red:hover mt-10"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
