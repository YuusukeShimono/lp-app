import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

const Result04 = () => {
  return (
    <>
      <Head>
        <title>23/04の結果</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-green-300 pt-[150px] pb-[130px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
        <div className="text-2xl mx-5">23年4月の結果</div>
        <div>単勝回収率</div>
        <h1>500--320</h1>
        <h2>64%</h2>
        <div>複勝回収率</div>
        <h1>500--670</h1>
        <h2>134%</h2>
      </main>
      <Footer />
    </>
  );
};
export default Result04;
