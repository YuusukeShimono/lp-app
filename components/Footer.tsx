import Link from "next/link";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { BsFolder2Open } from "react-icons/bs";
import { TfiPencilAlt } from "react-icons/tfi";

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
    <div className="bg-yellow-400 h-[100px] w-[100%] fixed bottom-0">
      <div className="flex justify-center text-xl font-bold pt-[10px]">
        built in 2023
      </div>
      {isMobile && (
        <div className="flex justify-evenly mt-[15px] mb-5 font-bold text-sm">
          <IconContext.Provider value={{ size: "50px" }}>
            <div>
              <Link href="/news">
                <TfiPencilAlt />
                予想確認
              </Link>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "50px" }}>
            <div className="mx-10">
              <Link href="/result">
                <BsFolder2Open />
                結果確認
              </Link>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "50px" }}>
            <div>
              <Link href="/contact">
                <FaEnvelopeOpenText />
                連絡する
              </Link>
            </div>
          </IconContext.Provider>
        </div>
      )}
    </div>
  );
};

export default Footer;
