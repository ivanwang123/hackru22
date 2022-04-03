import { GetServerSideProps } from "next";
import SliderList from "../components/SliderList";
import Layout from "../components/Layout";
import { useState } from "react";

function Home({ goals }: any) {
  const [mood, setMood] = useState<string>("Happy.GIF");

  const onMoodClick = (e: any, m : string) => {
    console.log(m)
    switch(m){
      case "Tired":
        setMood("Tired.GIF")
        break
      case "Stressed":
        setMood("Stressed.GIF")
        break
      case "Sleepy":
        setMood("Sleepy.GIF")
        break
      case "Angry":
        setMood("Angry.GIF")
        break
      case "Excited":
        setMood("Excited.GIF")
        break
      default:
        setMood("Nothing.GIF")
        break
    }
    console.log(mood)
  };

  console.log("GOALS", goals);
  return (
    <Layout>
      <main className="grid grid-cols-3">
        <section className="p-6">
          <img src="Title.PNG"/>
          <SliderList goals={goals} />
        </section>
        <section className="p-6">
          <div className="mt-14" >
            <img src={mood} alt="happy bean"/>
          </div>
          <div>
            <p className="text-center my-2 text-dark-red-orange">How are you feeling?</p>
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
        <section className="p-6">
          <h2>TODO</h2>
        </section>
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const goalsRes = await fetch(
    "http://localhost:8080/goals/169dc3b3-64f2-4d68-bf58-a26639afc0a7"
  );
  const goals = await goalsRes.json();

  return {
    props: { goals },
  };
  return {
    props: {},
  };
};

export default Home;
