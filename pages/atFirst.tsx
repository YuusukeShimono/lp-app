import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

const AtFirst = () => {
  return (
    <>
      <Head>
        <title>はじめに</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-green-300 pt-[150px] pb-[130px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
        <div className="text-2xl px-[10px]">はじめに</div>
        <div className="text-xl px-5">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AtFirst;
