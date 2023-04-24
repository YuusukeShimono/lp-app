import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [search, setSearch] = useState<{ contents: Content[] }>();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const q = event.currentTarget.query.value;
    const data = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ q }),
    });
    const json = await data.json();
    setSearch(json);
  };

  const contents = search ? search.contents : props.contents;

  return (
    <>
      <Head>
        <title>詳細ページ</title>
      </Head>
      <Header />
      <div className="h-auto flex justify-center lg:justify-between">
        <div className="py-5 lg:px-40 px-10">
          <div className="mt-[10px]">
            <div className="w-[300px] lg:w-full" id="target">
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
