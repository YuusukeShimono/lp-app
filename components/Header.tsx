import Link from "next/link";
import { IconContext } from "react-icons";
import { GiHorseHead } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <div className="flex justify-between h-[100px] mx-20 my-10">
        <IconContext.Provider value={{ size: "100px" }}>
          <div>
            <GiHorseHead />
          </div>
        </IconContext.Provider>
        <div className="flex justify-evenly my-10 font-bold text-xl">
          <div>
            <Link href="/news">予想</Link>
          </div>
          <div className="mx-10">
            <Link href="/">結果</Link>
          </div>
          <div>
            <Link href="/">連絡する</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
