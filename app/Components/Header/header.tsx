import React from "react";
import Image from "next/image";
 
const Header = () => {
  return (
    <div className="flex w-full h-[135px] bg-[#A29875]  gap-28 items-center pl-8">
      <div className="logo">
        <Image src="/images/Group 14222.png" alt="" width={242.56} height={87.45} />
      </div>
      <div className="w-[769.89px] h-14">
        <input
          type="search"
          name="text"
          placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"
          className="w-[650px] h-14 px-7 py-4 outline-none rounded-l-xl"
        ></input>
        <input type="submit" name="button" value={"Search"} className="cursor-pointer bg-white pt-[15.6px] pb-4 px-7 -ml-6 rounded-r-xl"></input>
      </div>
    </div>
  );
};

export default Header;