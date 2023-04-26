import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";

const ITEMS = [
  {
    href: "/",
    title: "4月",
  },
  {
    href: "/",
    title: "5月",
  },
];

const Result = () => {
  return (
    <>
      <Head>
        <title>結果ページ</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-green-300 pt-[150px] pb-[130px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
        <div className="text-2xl px-5 font-bold">月間結果</div>
        <div>
          {ITEMS.map((item) => {
            return (
              <div className="py-5 px-10 text-2xl hover:underline">
                <li>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Result;
