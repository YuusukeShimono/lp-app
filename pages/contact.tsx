import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const Contact = () => {
  return (
    <>
      <Head>
        <title>メール連絡ページ</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-green-300 pt-[150px] pb-[130px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
        <div className="text-2xl">メールでの問い合わせ</div>
        <div className="text-red-700 my-10 underline text-xl font-bold hover:underline flex justify-center">
          <a href="mailto:jungle379@gmail.com">メールはこちらをクリック</a>
        </div>
        <div className="text-sm">
          <Balancer>
            ※メーラーが起動しますので本文入力後、送信して下さい！
          </Balancer>
        </div>
        <div className="text-2xl mt-5">予想の参照先</div>
        <div>
          <Link href=""></Link>
        </div>
        <div>
          <Link href=""></Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
