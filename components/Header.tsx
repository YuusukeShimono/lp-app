import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <div className="flex justify-between items-center h-[80px]">
                <div className="ml-12">
                    <Link href="/">
                        <Image
                            src="/Images/logo.png"
                            objectFit="cover" // 画像が親要素にフィットするようにする
                            alt=""
                            width={489}
                            height={81}
                        />
                    </Link>
                </div>
                <div className="ml-[29px] mr-8 my-10">
                    <button
                        type="submit"
                        style={{ display: 'block', margin: '8px 0' }}
                    >
                        <Image
                            src="/Images/button.png"
                            objectFit="cover" // 画像が親要素にフィットするようにする
                            alt=""
                            width={256}
                            height={50}
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
