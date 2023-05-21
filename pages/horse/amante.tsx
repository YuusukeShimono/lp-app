import Head from 'next/head';
import Balancer from 'react-wrap-balancer';

const Amante = () => {
    return (
        <>
            <Head>
                <title>アマンテビアンコ(2歳)</title>
            </Head>
            <main className="min-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
                <div className="text-2xl font-bold">アマンテビアンコ(2歳)</div>
                <div className="mt-10 mx-10 text-2xl">戦績</div>
                <h1 className="mx-10 text-xl">
                    0-0-0-0(新馬) →6/17デビュー予定？
                </h1>
                <div className="mt-10 mx-10 text-2xl">直近の情報</div>
                <h1 className="mx-10 text-sm my-5">
                    <Balancer>
                        5/21
                        <br />
                        助 手 美南坂稍 56.5 - 41.6 - 27.3 - 13.7 馬ナリ
                        <br />
                        アーレンダール(古馬２勝)馬ナリを0.4秒追走同入
                    </Balancer>
                </h1>
            </main>
        </>
    );
};

export default Amante;
