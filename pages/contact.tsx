import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>メール連絡ページ</title>
      </Head>
      <Header />
      <main className="h-[400px] bg-green-300 py-10">
        <div className="text-2xl">メールでの問い合わせ</div>
        <div className="text-red-700 my-10 text-xl font-bold hover:underline flex justify-center">
          <a href="mailto:jungle379@gmail.com">メールはこちらをクリック</a>
        </div>
        <div className="text-sm">
          ※メーラーが起動しますので本文入力後、送信して下さい！
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Contact;
