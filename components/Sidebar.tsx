import { Checkbox, Input } from '@mantine/core';
import Image from 'next/image';

const Sidebar = () => {
    return (
        <div
            className="flex justify-center bg-[#F5F5F5] min-h-screen"
            style={{ position: 'sticky', top: 0 }}
        >
            <div className="ml-[62px] mr-[66px] mt-[42px]">
                <div className="font-medium w-[216px] mx-[42px] text-[24px] text-center">
                    エンジニアご紹介のお問い合わせ
                </div>
                <div className="font-medium w-[300px] mt-[30px] text-[12px]">
                    下記フォームへ必要事項をご記入の上、送信ください。
                </div>
                <div className="flex justify-center items-center mb-1">
                    <input
                        className="h-[50px] w-[140px] border-2 rounded mr-[20px]"
                        placeholder="姓"
                    />
                    <input
                        className="my-[14px] h-[50px] w-[140px] border-2 rounded"
                        placeholder="名"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <input
                        className="h-[50px] w-[300px] border-2 rounded"
                        placeholder="会社名"
                    />
                </div>
                <div className="my-[14px] flex justify-center items-center">
                    <input
                        className="h-[50px] w-[300px] border-2 rounded"
                        placeholder="会社のメールアドレス"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <input
                        className="h-[50px] w-[300px] border-2 rounded"
                        placeholder="電話番号(ハイフンなし)"
                    />
                </div>
                <div className="my-[14px] flex justify-center items-center">
                    <Input
                        component="select"
                        className="h-[50px] w-[300px] border-2 rounded"
                    >
                        <option value="-">部門を選択してください</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </Input>
                </div>
                <div className="flex justify-center items-center">
                    <Input
                        component="select"
                        className="mb-[14px] h-[50px] w-[300px] border-2 rounded"
                    >
                        <option value="-">役職を選択してください</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </Input>
                </div>
                <div className="my-[8px] flex items-start">
                    <Checkbox label="プライバシーポリシーに同意する" />
                </div>
                <div className="mt-[8px] mb-[10px] text-[14px]">
                    プライバシーポリシーに同意の上、送信ください。
                </div>
                <div className="flex justify-center items-center">
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