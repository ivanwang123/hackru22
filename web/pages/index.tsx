import SliderList from "../components/SliderList";
import Layout from "../components/Layout";
import TodoList from "../components/TodoList";
import { useState, useEffect } from "react";

function Home({ goals }: any) {
  const [mood, setMood] = useState<string>("Happy.GIF");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    console.log("USERNAME", localStorage.getItem("username"));
    setName(localStorage.getItem("username") || "");
  }, []);

  const onMoodClick = (e: any, m: string) => {
    console.log(m);
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
    console.log(mood);
  };

  console.log("GOALS", goals);
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
                className="cursor-pointer"
              >
                <img className="h-10" src="Bean-Happy.PNG"></img>
                <p
                  className={`mt-0.5 ${
                    mood === "Happy.GIF" && "font-bold text-dark-red-orange"
                  }`}
                >
                  Happy
                </p>
              </div>
              <div
                onClick={(e) => onMoodClick(e, "Tired")}
                className="cursor-pointer"
              >
                <img className="h-10" src="Bean-Tired.PNG"></img>
                <p
                  className={`mt-0.5 ${
                    mood === "Tired.GIF" && "font-bold text-dark-red-orange"
                  }`}
                >
                  Tired
                </p>
              </div>
              <div
                onClick={(e) => onMoodClick(e, "Stressed")}
                className="cursor-pointer"
              >
                <img className="h-10" src="Bean-Stressed.PNG"></img>
                <p
                  className={`mt-0.5 ${
                    mood === "Stressed.GIF" && "font-bold text-dark-red-orange"
                  }`}
                >
                  Stressed
                </p>
              </div>
              <div
                onClick={(e) => onMoodClick(e, "Sleepy")}
                className="cursor-pointer"
              >
                <img className="h-10" src="Bean-Sleepy.PNG"></img>
                <p
                  className={`mt-0.5 ${
                    mood === "Sleepy.GIF" && "font-bold text-dark-red-orange"
                  }`}
                >
                  Sleepy
                </p>
              </div>
              <div
                onClick={(e) => onMoodClick(e, "Angry")}
                className="cursor-pointer"
              >
                <img className="h-10" src="Bean-Angry.PNG"></img>
                <p
                  className={`mt-0.5 ${
                    mood === "Angry.GIF" && "font-bold text-dark-red-orange"
                  }`}
                >
                  Angry
                </p>
              </div>
              <div
                onClick={(e) => onMoodClick(e, "Excited")}
                className="cursor-pointer"
              >
                <img className="h-10" src="Bean-Excited.PNG"></img>
                <p
                  className={`mt-0.5 ${
                    mood === "Excited.GIF" && "font-bold text-dark-red-orange"
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
