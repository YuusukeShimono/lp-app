import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BackgroundImageSlider } from "@/components/Slider";
import { staticPath } from "@/lib/$path";
import Link from "next/link";

const images = [
  staticPath.$1_jpeg,
  staticPath.$2_jpeg,
  staticPath.$3_jpeg,
  staticPath.$4_jpeg,
];

const Home = () => {
  return (
    <>
      <Head>
        <title>ホームページ</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-green-300 pt-[100px] pb-[130px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
        <div className="py-10">
          <BackgroundImageSlider images={images} />
        </div>
        <div className="pb-5 px-[5px]" text-xl>
          天皇賞(春)記者会見(別タブで開きます)
        </div>
        <div className="text-sm px-5">
          <Link
            href="https://www.youtube.com/watch?v=PbcqwoN8cys"
            target="_blank"
          >
            天皇賞・記者会見①(タイトルホルダー)
          </Link>
        </div>
        <div className="text-sm px-5 pt-[5px] pb-10">
          <Link
            href="https://www.youtube.com/watch?v=OYgoTZeqK94"
            target="_blank"
          >
            天皇賞・記者会見②(アスクビクターモア)
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
