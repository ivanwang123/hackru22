import { GetServerSideProps } from "next";
import SliderList from "../components/SliderList";
import Layout from "../components/Layout";

function Home({ data }: any) {
  console.log("DATA", data);
  return (
    <Layout>
      <main className="grid grid-cols-3">
        <section className="p-6">
          <SliderList />
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
  // const res = await fetch("http://localhost:8080");
  // const data = await res.json();

  // return {
  //   props: { data },
  // };
  return {
    props: {},
  };
};

export default Home;
