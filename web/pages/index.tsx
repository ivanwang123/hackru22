import { GetServerSideProps } from "next";
import SliderList from "../components/SliderList";
import Layout from "../components/Layout";

function Home({ goals }: any) {
  console.log("GOALS", goals);
  return (
    <Layout>
      <main className="grid grid-cols-3">
        <section className="p-6">
          <SliderList goals={goals} />
        </section>
        <section className="p-6">
          <h1>WellBean</h1>
          <img src="happy.GIF" alt="happy bean" />
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
