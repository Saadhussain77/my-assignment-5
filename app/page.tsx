import Image from "next/image";
import Header from "./Components/Header/header";

export default function Home() {
  return (
    <div className="">
      <Header />

      <div className="flex h-[550] ">
        <div className="content-center w-6/12 pl-36 py-20">
          <h1 className="text-3xl w-3/4 font-mono font-bold pb-4 mt-10 leading-10">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="font-mono text-[#787054] text-xl py-5 leading-10">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <button className="bg-[#A29875] font-mono hover:bg-[#968444] text-white px-8 py-2 rounded-lg mt-6">
            Explore Now
          </button>
        </div>
        <div className="relative w-6/12 h-[500px]">
          <Image
           src="/images/rs-layer-wrap ⏵ rs-layer.png"
            alt=""
            width={350} 
            height={200} 
            className=" mx-16 rounded-tl-[150px] rounded-br-[150px] my-7"
             />
             <div className="absolute border-solid border-[1px] top-4 left-5 w-[315px] h-[440px] my-7 mx-[60px] rounded-tl-[150px] rounded-br-[150px]">

             </div>
        </div>
      </div>
    </div>
  );
}