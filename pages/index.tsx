import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <>
      <Head>
        <title>TOP</title>
      </Head>
      <Header />
      <main>
        <Carousel
          maw={320}
          mx="auto"
          withIndicators
          height={200}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          <Carousel.Slide>1</Carousel.Slide>
          <Carousel.Slide>2</Carousel.Slide>
          <Carousel.Slide>3</Carousel.Slide>
        </Carousel>
        div
        <div>
          <Link href="/news">link</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
