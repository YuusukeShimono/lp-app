import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BackgroundImageSlider } from "@/components/Slider";
import { staticPath } from "@/lib/$path";

const images = [staticPath.$1_jpeg, staticPath.$2_jpeg, staticPath.$3_jpeg];

const Home = () => {
  return (
    <>
      <Head>
        <title>TOP</title>
      </Head>
      <Header />
      <main className="h-auto bg-green-300">
        <div className="py-10">
          <BackgroundImageSlider images={images} />
        </div>
        <div></div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
