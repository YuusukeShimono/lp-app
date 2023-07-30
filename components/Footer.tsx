import Image from 'next/image';

const Footer = () => {
    return (
        <div className="h-[364px] w-full bg-black">
            <div className="my-24 mx-[205px] bg-white h-[172px] w-[443px] rounded-xl">
                <h1></h1>
                <h2>
                    <Image
                        src="/Images/line.png"
                        objectFit="cover"
                        alt=""
                        width={90}
                        height={91}
                    />
                </h2>
            </div>
        </div>
    );
};

export default Footer;
