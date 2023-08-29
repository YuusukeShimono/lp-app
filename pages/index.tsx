import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import { Checkbox, Input } from '@mantine/core';
import Link from 'next/link';
import Carousels from '@/components/Carousel';

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
                                src="/Images/nochipc.png"
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
                        <div className="flex justify-center mt-20">
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
                        <div className="flex justify-center mt-16 mb-[75px]">
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
                            <Image
                                src="/Images/Framer0.png"
                                objectFit="cover"
                                alt=""
                                width={852}
                                height={50}
                            />
                        </div>
                        <div className="h-[842px] w-[852px] bg-blue-700">
                            <div className="flex justify-center items-center">
                                <h1 className="mt-20 text-[16px] text-[#FFAF96]">
                                    Recruitment
                                </h1>
                            </div>
                            <div className="flex justify-center items-center mb-[41px]">
                                <h1 className="mt-[28px] text-white text-[38px] font-bold">
                                    事例紹介
                                </h1>
                            </div>
                            <Carousels />
                        </div>
                        <div className="h-[998px] bg-white">
                            <div className="flex justify-center items-center">
                                <h1 className="mt-20 text-[16px] text-[#F4511E]">
                                    Comparison
                                </h1>
                            </div>
                            <div className="flex justify-center items-center mb-[24px]">
                                <h1 className="mt-[28px] text-[#0036A8] text-[38px] font-bold">
                                    他社比較
                                </h1>
                            </div>
                            <div className="flex justify-center items-center mb-[24px]">
                                <h1 className="h-12 mb-15 w-[412px] text-[16px] font-bold">
                                    ここにテキストが入ります。ここにテキストが入ります。
                                    ここにテキストが入ります。ここにテキストが入ります。
                                </h1>
                            </div>
                            <div className="flex justify-center items-center">
                                <h1 className="h-[60px] w-[200px] bg-[#DADADA]"></h1>
                                <h1 className="h-[60px] w-[250px] bg-[#0036A8]">
                                    <p className="text-white text-[24px] justify-center flex items-center mt-[11px]">
                                        LABOGY
                                    </p>
                                </h1>
                                <div className="h-[60px] w-[250px] bg-[#DADADA]">
                                    <h1 className="text-[24px] flex justify-center items-center my-[12px]">
                                        他社
                                    </h1>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <h1 className="h-[92px] w-[200px] bg-[#F8F7F6]">
                                    ここにテキスト
                                </h1>
                                <h1 className="h-[92px] w-[250px] bg-[#D6D3D0] border-x-[#0036A8] border-2">
                                    ここにテキスト
                                </h1>
                                <h1 className="h-[92px] w-[250px] bg-[#F8F7F6]">
                                    ここにテキスト
                                </h1>
                            </div>
                            <div className="flex justify-center items-center">
                                <h1 className="h-[92px] w-[200px] bg-[#F8F7F6]">
                                    ここにテキスト
                                </h1>
                                <h1 className="h-[92px] w-[250px] bg-[#D6D3D0] border-x-[#0036A8] border-2">
                                    ここにテキスト
                                </h1>
                                <h1 className="h-[92px] w-[250px] bg-[#F8F7F6]">
                                    ここにテキスト
                                </h1>
                            </div>
                            <div className="flex justify-center items-center">
                                <h1 className="h-[92px] w-[200px] bg-[#F8F7F6]">
                                    ここにテキスト
                                </h1>
                                <h1 className="h-[92px] w-[250px] bg-[#D6D3D0] border-x-[#0036A8] border-2">
                                    ここにテキスト
                                </h1>
                                <h1 className="h-[92px] w-[250px] bg-[#F8F7F6]">
                                    ここにテキスト
                                </h1>
                            </div>
                            <div className="flex justify-center items-center">
                                <h1 className="h-[92px] w-[200px] bg-[#F8F7F6]">
                                    ここにテキスト
                                </h1>
                                <h1 className="h-[92px] w-[250px] bg-[#D6D3D0] border-x-[#0036A8] border-2">
                                    ここにテキスト
                                </h1>
                                <h1 className="h-[92px] w-[250px] bg-[#F8F7F6]">
                                    ここにテキスト
                                </h1>
                            </div>
                            <div className="flex justify-center items-center">
                                <h1 className="h-[92px] w-[200px] bg-[#F8F7F6]">
                                    ここにテキスト
                                </h1>
                                <h1 className="h-[92px] w-[250px] bg-[#D6D3D0] border-x-[#0036A8] border-b-[#0036A8] border-2">
                                    ここにテキスト
                                </h1>
                                <h1 className="h-[92px] w-[250px] bg-[#F8F7F6]">
                                    ここにテキスト
                                </h1>
                            </div>
                            <div className="mt-10 flex justify-center">
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
                        </div>
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
                        <div className="h-[998px] w-[847px]">
                            <div className="mx-[124px] mt-24 flex justify-center items-center">
                                <h1 className="text-[38px] text-[#0036A8] w-[230px]">
                                    お問い合わせ
                                </h1>
                            </div>
                            <div className="mx-[124px] mt-6 flex justify-center items-center">
                                <h2 className="w-[606px] text-[24px] text-[#0036A8]">
                                    下記フォームへ必要事項をご記入の上、送信ください。
                                </h2>
                            </div>
                            <div className="mt-[41px] h-[87px] flex justify-center items-center">
                                <h3 className="w-[368px] text-[16px]">
                                    フルリモート、業務委託、フレキシブルな働き方で
                                    優秀な即戦力IT人材をお探しの企業様は、
                                    <br />
                                    ぜひお気軽にお問い合わせください。
                                </h3>
                            </div>
                            <div>
                                <form action="" method="post">
                                    <div className="h-[420px] w-[555px] mx-auto p-4 mt-[41px] flex flex-col items-center">
                                        <div className="flex justify-center items-center mb-4">
                                            <input
                                                className="h-[50px] w-[243px] border-2 rounded mr-[33px]"
                                                placeholder="姓"
                                                name="firstName"
                                                id="firstName"
                                                type="text"
                                            />
                                            <input
                                                className="my-[14px] h-[50px] w-[243px] border-2 rounded"
                                                placeholder="名"
                                                name="lastName"
                                                id="lastName"
                                                type="text"
                                            />
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <input
                                                className="h-[50px] w-[519px] border-2 rounded"
                                                placeholder="会社名"
                                                name="company"
                                                id="company"
                                                type="text"
                                            />
                                        </div>
                                        <div className="my-[14px] flex justify-center items-center">
                                            <input
                                                className="h-[50px] w-[519px] border-2 rounded"
                                                placeholder="会社のメールアドレス"
                                                name="email"
                                                id="email"
                                                type="email"
                                            />
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <input
                                                className="h-[50px] w-[519px] border-2 rounded"
                                                placeholder="電話番号(ハイフンなし)"
                                                name="phoneNumber"
                                                id="phoneNumber"
                                                type="text"
                                            />
                                        </div>
                                        <div className="my-[14px] flex justify-center items-center h-[50px] w-[519px]">
                                            <Input
                                                component="select"
                                                className="border-1 rounded h-full w-full"
                                                name="department"
                                                id="department"
                                            >
                                                <option value="-">
                                                    部門を選択してください
                                                </option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </Input>
                                        </div>
                                        <div className="flex justify-center items-center h-[50px] w-[519px]">
                                            <Input
                                                component="select"
                                                className="h-full w-full border-1 rounded"
                                                name="position"
                                                id="position"
                                            >
                                                <option value="-">
                                                    役職を選択してください
                                                </option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </Input>
                                        </div>
                                    </div>
                                    <div className="w-[555px] mx-auto px-4">
                                        <div className="mb-[15px] flex justify-start text-[16px]">
                                            <Checkbox label="プライバシーポリシーに同意する" />
                                        </div>
                                        <div className="flex">
                                            <div className="mt-[23px] mb-[41px] text-[#0071C1] text-[14px] flex justify-start">
                                                <Link href="/">
                                                    プライバシーポリシー
                                                </Link>
                                            </div>
                                            <div className="mt-[23px] mb-[41px] text-[14px]">
                                                に同意の上、送信ください。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <button type="submit">
                                            <Image
                                                src="/Images/button.png"
                                                objectFit="cover"
                                                alt=""
                                                width={256}
                                                height={50}
                                            />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
                <Sidebar />
            </div>
        </>
    );
};

export default Home;
