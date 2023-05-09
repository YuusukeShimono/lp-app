import Head from "next/head";
import Balancer from "react-wrap-balancer";

const amante = () => {
  return (
    <>
      <Head>
        <title>アマンテビアンコ(2歳)</title>
      </Head>
      <main className="min-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
        <div className="text-2xl font-bold">アマンテビアンコ(2歳)</div>
        <div className="mt-10 mx-10 text-2xl">戦績</div>
        <h1 className="mx-10 text-xl">0-0-0-0</h1>
        <div className="mt-10 mx-10 text-2xl">直近の情報</div>
        <h1 className="mx-10 text-sm my-5">
          <Balancer>
            5/5
            <br />
            在厩場所：ノーザンファーム天栄
            <br />
            天栄担当者「今週も登坂回数は週2回と先週と変わりないものの、両日ともに14-13ペースで乗り込んでいます。まだ良化途上の部分はあるものの、徐々に脚取りの力強さは増してきている印象です。この感じであれば、来月のデビューを見据えて進めていくことが出来そうです。馬体重は551kgです」
          </Balancer>
        </h1>
      </main>
    </>
  );
};

export default amante;
