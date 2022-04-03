import SliderList from "../components/SliderList";
import Layout from "../components/Layout";
import TodoList from "components/TodoList";
import { useState, useEffect } from "react";

function Home() {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    console.log("USERNAME", localStorage.getItem("username"));
    setName(localStorage.getItem("username") || "");
  }, []);

  return (
    <Layout>
      <main className="grid grid-cols-3 h-full">
        <section className="p-12">
          <img src="Title.png" className="mb-5" />
          <SliderList />
        </section>
        <section className="flex flex-col items-center justify-center p-6 py-12">
          <h1 className="text-4xl text-white font-bold">{name}</h1>
          <div className="max-w-[24rem] mt-5">
            <img src="Happy.GIF" alt="happy bean" />
          </div>
        </section>
        <section className="p-12">
          <TodoList />
        </section>
      </main>
    </Layout>
  );
}

export default Home;
