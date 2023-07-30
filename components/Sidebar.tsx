import Image from 'next/image';

const Sidebar = () => {
    return (
        <div
            className="flex justify-center"
            style={{ position: 'sticky', top: 0 }}
        >
            <div className="ml-[62px] mr-[66px] mt-[42px]">
                <div className="font-medium w-[216px] mx-[42px] text-[24px] text-center">
                    エンジニアご紹介のお問い合わせ
                </div>
                <div className="font-medium w-[300px] mt-[30px] text-[12px]">
                    下記フォームへ必要事項をご記入の上、送信ください。
                </div>
                <div>
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
        </div>
    );
};

export default Sidebar;
