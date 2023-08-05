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
                <form
                    action="https://lpsite.form.newt.so/v1/2Dv_UrJgX"
                    method="post"
                >
                    <div className="flex justify-center items-center mb-1">
                        <input
                            className="h-[50px] w-[140px] border-2 rounded mr-[20px]"
                            placeholder="姓"
                            name="firstName"
                            id="firstName"
                            type="text"
                        />
                        <input
                            className="my-[14px] h-[50px] w-[140px] border-2 rounded"
                            placeholder="名"
                            name="lastName"
                            id="lastName"
                            type="text"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <input
                            className="h-[50px] w-[300px] border-2 rounded"
                            placeholder="会社名"
                            id="company"
                            name="company"
                            type="text"
                        />
                    </div>
                    <div className="my-[14px] flex justify-center items-center">
                        <input
                            className="h-[50px] w-[300px] border-2 rounded"
                            placeholder="会社のメールアドレス"
                            id="email"
                            name="email"
                            type="email"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <input
                            className="h-[50px] w-[300px] border-2 rounded"
                            placeholder="電話番号(ハイフンなし)"
                            id="phoneNumber"
                            name="phoneNumber"
                            type="text"
                        />
                    </div>
                    <div className="mt-[14px] flex justify-center items-center h-[50px] w-[300px] mx-[10px]">
                        <Input
                            component="select"
                            className="h-[50px] w-full border-1 rounded"
                            id="department"
                            name="department"
                        >
                            <option value="-">部門を選択してください</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </Input>
                    </div>
                    <div className="mt-[4px] flex justify-center items-center mb-[14px] h-[50px] w-[300px] mx-[10px]">
                        <Input
                            component="select"
                            className="h-[50px] w-full border-1 rounded"
                            id="position"
                            name="position"
                        >
                            <option value="-">役職を選択してください</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </Input>
                    </div>
                    <div className="my-[8px] flex justify-start">
                        <Checkbox label="プライバシーポリシーに同意する" />
                    </div>
                    <div className="mt-[8px] mb-[10px] text-[14px] flex justify-start">
                        プライバシーポリシーに同意の上、送信ください。
                    </div>
                    <div className="flex justify-center items-center">
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
    );
};

export default Sidebar;
