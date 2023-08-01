import Image from 'next/image';

const Footer = () => {
    return (
        <div className="h-[364px] w-full bg-[#373737] flex justify-center items-center">
            <div className="my-24 mx-[205px] bg-white h-[172px] w-[443px] rounded-xl flex justify-center items-center">
                <div>
                    <h1 className="ml-10 mt-8">
                        <Image
                            src="/Images/linelogo.png"
                            objectFit="cover"
                            alt=""
                            width={193}
                            height={76}
                        />
                    </h1>
                    <h2 className="ml-[77px] mt-[1px] mb-[47px] h-[16px] w-[80px] text-[16px]">
                        友だち登録
                    </h2>
                </div>
                <div>
                    <h1 className="my-10">
                        <Image
                            src="/Images/line.png"
                            objectFit="cover"
                            alt=""
                            width={90}
                            height={91}
                        />
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;
