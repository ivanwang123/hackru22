import { useState } from "react";
import Layout from "../components/Layout";

function Login() {
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
        console.log("USER", user);
        if (user) {
          localStorage.setItem("userId", user.id);
        }
      } catch (e) {
        console.error("ERROR", e);
      }
    }
  };

  return (
    <Layout title="Login | WELLBEAN">
      <div className="flex flex-col">
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleLogin}>
          Log in
        </button>
      </div>
    </Layout>
  );
}

export default Login;
