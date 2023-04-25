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
      <main className="h-[400px] bg-green-300 py-10">
        <div className="text-2xl">月間結果</div>
        <div>※データ集計後、作成します！</div>
      </main>
      <Footer />
    </>
  );
};

export default Result;
