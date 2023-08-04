import { useState, ChangeEvent } from 'react';
import { Checkbox, Input } from '@mantine/core';
import Image from 'next/image';

const Sidebar = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [department, setDepartment] = useState('-');
    const [position, setPosition] = useState('-');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const handleCompanyChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCompany(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePhonenumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const handleDepartmentChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setDepartment(e.target.value);
    };
    const handlePositionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPosition(e.target.value);
    };

    const handleSubmit = async () => {
        // フォームの入力内容をまとめる
        const formData = {
            firstName,
            lastName,
            company,
            email,
            phoneNumber,
            department,
            position,
        };

        try {
            setIsSubmitting(true);

            // フォームの内容をサーバーサイドエンドポイントに送信
            const response = await fetch(
                'http://localhost:3000/api/sendEmail',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                },
            );

            if (response.ok) {
                // メール送信成功時の処理（ポップアップ表示など）
                alert('メールを送信しました');
            } else {
                // メール送信失敗時の処理（ポップアップ表示など）
                alert('メールの送信に失敗しました');
            }
        } catch (error) {
            console.error('エラー:', error);
            alert('エラーが発生しました');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                    <input
                        className="my-[14px] h-[50px] w-[140px] border-2 rounded"
                        placeholder="名"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                </div>
                <div className="flex justify-center items-center">
                    <input
                        className="h-[50px] w-[300px] border-2 rounded"
                        placeholder="会社名"
                        value={company}
                        onChange={handleCompanyChange}
                    />
                </div>
                <div className="my-[14px] flex justify-center items-center">
                    <input
                        className="h-[50px] w-[300px] border-2 rounded"
                        placeholder="会社のメールアドレス"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="flex justify-center items-center">
                    <input
                        className="h-[50px] w-[300px] border-2 rounded"
                        placeholder="電話番号(ハイフンなし)"
                        value={phoneNumber}
                        onChange={handlePhonenumberChange}
                    />
                </div>
                <div className="mt-[14px] flex justify-center items-center h-[50px] w-[300px] mx-[10px]">
                    <Input
                        component="select"
                        className="h-[50px] w-full border-1 rounded"
                        value={department}
                        onChange={handleDepartmentChange}
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
                        value={position}
                        onChange={handlePositionChange}
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
                    <button disabled={isSubmitting} onClick={handleSubmit}>
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
