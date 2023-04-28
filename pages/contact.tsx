import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Balancer from "react-wrap-balancer";

const Contact = () => {
  return (
    <>
      <Head>
        <title>メール連絡ページ</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-green-300 pt-[150px] pb-[130px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
        <div className="text-2xl mx-5">メールでの問い合わせ</div>
        <div className="text-red-700 mt-10 mb-5 underline text-xl font-bold hover:underline flex justify-center">
          <a href="mailto:jungle379@gmail.com">メールはこちらをクリック</a>
        </div>
        <div className="text-sm flex justify-center">
          <Balancer>※メーラーが自動で起動します！</Balancer>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
