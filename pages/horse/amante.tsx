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
                        <br />
                        5/25
                        <br />
                        助 手 美南Ｗ稍 84.5 - 67.9 - 52.8 - 38.3 - 11.8 位置[4]
                        馬ナリ クアトロマジコ(障未勝)馬ナリの内0.8秒追走同入
                        <br />
                        宮田敬介調教師「25日に南Ｗコースで併せて追い切りを行いました。道中は3頭縦列の2番手から進め、直線では真ん中に進路を取りましたが、最後は先頭を走っていた馬と同入、後ろから追い掛けてきた馬には半馬身ほど先着する形で終えています。口向きには多少の硬さはあるものの、コントロールを欠くことなく、道中はしっかりと折り合って走ることが出来ていましたね。直線でもスムーズに加速して行くことが出来ていましたし、少し息遣いに荒さはあるものの、それが走りに影響している印象はありませんでした。5ハロンから67.9秒と、もう1つほど時計が遅くても良いと考えていた中で、余裕のある手応えで最後まで走れていましたし、Ｗコースでの速め1本目としては十分合格点を与えられる内容だったと思います。このまま第3回東京開催3週目に組まれている、Ｄ1,400ｍ戦を目標に調整していきたいと思います」
                    </Balancer>
                </h1>
            </main>
        </>
    );
};

export default Amante;
