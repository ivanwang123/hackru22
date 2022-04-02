import { useState } from "react";
import Layout from "../components/Layout";

function Register() {
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
      } catch (e) {
        console.error("ERROR", e);
      }
    }
  };

  return (
    <Layout title="Register | WELLBEAN">
      <h1>Register</h1>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleRegister}>
        Register
      </button>
    </Layout>
  );
}

export default Register;
