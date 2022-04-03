import SliderList from "../components/SliderList";
import Layout from "../components/Layout";

function Home({ goals }: any) {
  console.log("GOALS", goals);
  return (
    <Layout>
      <main className="grid grid-cols-3">
        <section className="p-6">
          <img src="Title.PNG" />
          <SliderList />
        </section>
        <section className="p-6">
          <div className="mt-24">
            <img src="Happy.GIF" alt="happy bean" />
          </div>
          <div></div>
        </section>
        <section className="p-6">
          <h2>TODO</h2>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
