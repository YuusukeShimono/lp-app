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
                        5/21
                        <br />
                        助 手 美南坂稍 56.6 - 41.6 - 27.3 - 13.7 馬ナリ
                        <br />
                        アーレンダール(古馬2勝)馬ナリを0.4秒追走同入
                        <br />
                        5/24
                        <br />助 手 美南坂重 66.4 - 48.0 - 30.8 - 14.9 馬ナリ
                    </Balancer>
                </h1>
            </main>
        </>
    );
};

export default Amante;
