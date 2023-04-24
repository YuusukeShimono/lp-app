import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>TOP</title>
      </Head>
      <Header />
      <main>
        div
        <div>
          <Link href="/news">link</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
