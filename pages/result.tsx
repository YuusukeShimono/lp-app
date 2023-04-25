import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

const Result = () => {
  return (
    <>
      <Head>
        <title>結果ページ</title>
      </Head>
      <Header />
      <main className="h-full bg-green-300"></main>
      <Footer />
    </>
  );
};
export default Result;
