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
                        6/4
                        <br />助 手
                        <br />
                        美南Ｗ重 73.8 - 57.4 - 42.0 - 13.2 位置[5] 馬ナリ
                    </Balancer>
                </h1>
            </main>
        </>
    );
};

export default Amante;
