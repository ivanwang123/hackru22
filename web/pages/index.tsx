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
        setMood("Nothing.GIF");
        break;
    }
    console.log(mood);
  };

  console.log("GOALS", goals);
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
            <img src={mood} alt="happy bean" />
          </div>
          <div>
            <p className="text-center my-2 text-dark-red-orange">
              How are you feeling?
            </p>
            <div className="flex space-x-10 text-xs text-gray-400">
              <div onClick={(e) => onMoodClick(e, "")}>
                <img className="h-10" src="Bean-Happy.PNG"></img>
                <p>Happy</p>
              </div>
              <div onClick={(e) => onMoodClick(e, "Tired")}>
                <img className="h-10" src="Bean-Tired.PNG"></img>
                <p>Tired</p>
              </div>
              <div onClick={(e) => onMoodClick(e, "Stressed")}>
                <img className="h-10" src="Bean-Stressed.PNG"></img>
                <p>Stressed</p>
              </div>
              <div onClick={(e) => onMoodClick(e, "Sleepy")}>
                <img className="h-10" src="Bean-Sleepy.PNG"></img>
                <p>Sleepy</p>
              </div>
              <div onClick={(e) => onMoodClick(e, "Angry")}>
                <img className="h-10" src="Bean-Angry.PNG"></img>
                <p>Angry</p>
              </div>
              <div onClick={(e) => onMoodClick(e, "Excited")}>
                <img className="h-10" src="Bean-Excited.PNG"></img>
                <p>Excited</p>
              </div>
            </div>
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
