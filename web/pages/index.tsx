import SliderList from "../components/SliderList";
import Layout from "../components/Layout";
import TodoList from "../components/TodoList";
import { useState, useEffect } from "react";

function Home() {
  const [mood, setMood] = useState<string>("Happy.GIF");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    setName(localStorage.getItem("username") || "");

    onMoodClick(null, localStorage.getItem("emotion") || "");
  }, []);

  const onMoodClick = async (e: any, m: string) => {
    switch (m) {
      case "Happy":
        setMood("Happy.GIF");
        break;
      case "Tired":
        setMood("Tired.GIF");
        break;
      case "Stressed":
        setMood("Stressed.GIF");
        break;
      case "Sleepy":
        setMood("Sleepy.GIF");
        break;
      case "Angry":
        setMood("Angry.GIF");
        break;
      case "Excited":
        setMood("Excited.GIF");
        break;
      default:
        setMood("Happy.GIF");
        break;
    }
    localStorage.setItem("emotion", m);
    await fetch(
      `http://localhost:8080/user/update/${localStorage.getItem("userId")}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emotion: m,
        }),
      }
    );
  };

  return (
    <Layout>
      <main className="grid grid-cols-3">
        <section className="p-12">
          <img src="Title.png" className="mb-5" />
          <SliderList />
        </section>
        <section className="flex flex-col items-center justify-center p-6 py-12">
          <h1 className="text-4xl text-white font-bold">{name}</h1>
          <div className="max-w-[24rem] mt-5">
            <img src={mood} alt="happy bean" />
          </div>
          <div className="mt-5">
            <p className="text-center text-lg my-2 text-dark-red-orange">
              How are you feeling?
            </p>
            <div className="flex space-x-10 text-xs text-gray-400">
              <div
                onClick={(e) => onMoodClick(e, "Happy")}
                className="flex flex-col items-center cursor-pointer"
              >
                <img className="h-10" src="Bean-Happy.PNG"></img>
                <p
                  className={`mt-0.5 px-1.5 py-0.5 ${
                    mood === "Happy.GIF" &&
                    "bg-dark-red-orange rounded-full text-white"
                  }`}
                >
                  Happy
                </p>
              </div>
              <div
                onClick={(e) => onMoodClick(e, "Tired")}
                className="flex flex-col items-center cursor-pointer"
              >
                <img className="h-10" src="Bean-Tired.PNG"></img>
                <p
                  className={`mt-0.5 px-1.5 py-0.5 ${
                    mood === "Tired.GIF" &&
                    "bg-dark-red-orange rounded-full text-white"
                  }`}
                >
                  Tired
                </p>
              </div>
              <div
                onClick={(e) => onMoodClick(e, "Stressed")}
                className="flex flex-col items-center cursor-pointer"
              >
                <img className="h-10" src="Bean-Stressed.PNG"></img>
                <p
                  className={`mt-0.5 px-1.5 py-0.5 ${
                    mood === "Stressed.GIF" &&
                    "bg-dark-red-orange rounded-full text-white"
                  }`}
                >
                  Stressed
                </p>
              </div>
              <div
                onClick={(e) => onMoodClick(e, "Sleepy")}
                className="flex flex-col items-center cursor-pointer"
              >
                <img className="h-10" src="Bean-Sleepy.PNG"></img>
                <p
                  className={`mt-0.5 px-1.5 py-0.5 ${
                    mood === "Sleepy.GIF" &&
                    "bg-dark-red-orange rounded-full text-white"
                  }`}
                >
                  Sleepy
                </p>
              </div>
              <div
                onClick={(e) => onMoodClick(e, "Angry")}
                className="flex flex-col items-center cursor-pointer"
              >
                <img className="h-10" src="Bean-Angry.PNG"></img>
                <p
                  className={`mt-0.5 px-1.5 py-0.5 ${
                    mood === "Angry.GIF" &&
                    "bg-dark-red-orange rounded-full text-white"
                  }`}
                >
                  Angry
                </p>
              </div>
              <div
                onClick={(e) => onMoodClick(e, "Excited")}
                className="flex flex-col items-center cursor-pointer"
              >
                <img className="h-10" src="Bean-Excited.PNG"></img>
                <p
                  className={`mt-0.5 px-1.5 py-0.5 ${
                    mood === "Excited.GIF" &&
                    "bg-dark-red-orange rounded-full text-white"
                  }`}
                >
                  Excited
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="p-12">
          <img src="Title.png" className="mb-5 opacity-0" />
          <TodoList />
        </section>
      </main>
    </Layout>
  );
}

export default Home;
