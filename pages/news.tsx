import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { client } from "@/libs/client";

type NewsProps = {
  contents: Content[];
};

type Content = {
  id: string;
  title: string;
  body: string;
};

export const getStaticProps = async () => {
  const data = await client.getList({
    endpoint: "blogs",
    queries: { q: "" },
  });
  return {
    props: data,
  };
};

const News = (props: NewsProps) => {
  const contents = props.contents;

  return (
    <>
      <Head>
        <title>詳細ページ</title>
      </Head>
      <Header />
      <div className="h-auto flex justify-center lg:justify-between bg-green-300">
        <div className="py-5 lg:px-40 px-10">
          <div className="mt-[10px]">
            <div className="sm:w-[300px]">
              <ul>
                {contents.map((content) => {
                  return (
                    <li key={content.id}>
                      <div className="my-5 py-5 px-5 font-bold text-xl lg:text-2xl bg-gray-100">
                        <Link href={`news/${content.id}`}>{content.title}</Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
