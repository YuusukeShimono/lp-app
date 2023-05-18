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
                        5/5
                        <br />
                        在厩場所：ノーザンファーム天栄
                        <br />
                        天栄担当者「今週は週2回の坂路コースでの14-13ペースの調教に加えて、週1回周回コースで4ハロン15-15ペースで乗り込んでいます。坂路・周回共に脚取りはしっかりとしていますし、アクシデントには気を付けながら更なる状態アップを目指して乗り込んでいきます。馬体重は545kgです」
                        <br />
                        <br />
                        5/18、美浦トレセンへ移動済み。
                    </Balancer>
                </h1>
            </main>
        </>
    );
};

export default Amante;
