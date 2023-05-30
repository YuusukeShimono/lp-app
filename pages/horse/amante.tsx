import Head from 'next/head';
import Balancer from 'react-wrap-balancer';

const Amante = () => {
    return (
        <>
            <Head>
                <title>アマンテビアンコ</title>
            </Head>
            <main className="min-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
                <div className="text-2xl font-bold mt-5">
                    アマンテビアンコ(2歳)
                </div>
                <div className="mt-10 mx-10 text-2xl">戦績</div>
                <h1 className="mx-10 text-xl">0-0-0-0(新馬)</h1>
                <div className="mt-10 mx-10 text-2xl">直近の情報</div>
                <h1 className="mx-10 text-xl my-5">
                    <Balancer>
                        5/28
                        <br />
                        助 手 美南坂良 58.9 - 42.4 - 27.8 - 13.5 馬ナリ
                        <br />
                        エリカエスティーム(新馬)馬ナリに1.3秒先行同入
                    </Balancer>
                </h1>
            </main>
        </>
    );
};

export default Amante;
