import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <>
            <Head>
                <title>ホーム</title>
            </Head>
            <div className="flex h-auto">
                <div className="max-w-[854px]">
                    <Header />
                    <main className="h-auto">
                        <div className="w-full">
                            <Image
                                src="/Images/FV.png"
                                objectFit="cover"
                                alt=""
                                width={854}
                                height={545}
                            />
                        </div>
                        <div className="flex justify-center">
                            <div className="mt-24 mb-8">
                                <Image
                                    src="/Images/catch.png"
                                    objectFit="cover"
                                    alt=""
                                    width={619}
                                    height={284}
                                />
                            </div>
                        </div>
                        <div className="my-10">
                            <div className="flex justify-center">
                                <div>
                                    <Image
                                        src="/Images/Frame.png"
                                        objectFit="cover"
                                        alt=""
                                        width={790}
                                        height={278}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mb-24 text-16px h-[58px] w-[586px] mx-[137px]">
                            <h1>
                                「アプリ」「事業開発」などの企画から上流に参画ができる人材や
                                <br />
                                「ブロックチェーン」「AI」先進技術にも対応可能な人材をご紹介します。
                            </h1>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/Images/inner.png"
                                objectFit="cover"
                                alt=""
                                width={852}
                                height={278}
                            />
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/Images/onayami.png"
                                objectFit="cover"
                                alt=""
                                width={852}
                                height={1000}
                            />
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/Images/解決.png"
                                objectFit="cover"
                                alt=""
                                width={852}
                                height={1000}
                            />
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/Images/title.png"
                                objectFit="cover"
                                alt=""
                                width={720}
                                height={1000}
                            />
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/Images/tokutyo.png"
                                objectFit="cover"
                                alt=""
                                width={720}
                                height={1000}
                            />
                        </div>
                        <div className="flex justify-center">
                            <button>
                                <Image
                                    src="/Images/button.png"
                                    objectFit="cover"
                                    alt=""
                                    width={256}
                                    height={50}
                                />
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <button>
                                <Image
                                    src="/Images/Framer0.png"
                                    objectFit="cover"
                                    alt=""
                                    width={852}
                                    height={50}
                                />
                            </button>
                        </div>
                        <div className="h-[842px] w-[852px] bg-blue-700"></div>
                        <div className="h-[998px] w-[847px]"></div>
                        <div className="flex justify-center">
                            <Image
                                src="/Images/flow.png"
                                objectFit="cover"
                                alt=""
                                width={852}
                                height={1000}
                            />
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/Images/company.png"
                                objectFit="cover"
                                alt=""
                                width={852}
                                height={1000}
                            />
                        </div>
                    </main>
                    <Footer />
                </div>
                <div className="">
                    <Sidebar />
                </div>
            </div>
        </>
    );
};

export default Home;
