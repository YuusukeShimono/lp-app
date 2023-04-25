import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="bg-yellow-400 h-[150px]">
        <div className="flex justify-center text-2xl font-bold pt-5">
          built in 2023
        </div>
        {isMobile && (
          <div className="flex justify-evenly mt-10 mb-5 font-bold text-xl">
            <div>
              <Link href="/news">予想</Link>
            </div>
            <div className="mx-10">
              <Link href="/result">結果</Link>
            </div>
            <div>
              <Link href="/contact">連絡する</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
