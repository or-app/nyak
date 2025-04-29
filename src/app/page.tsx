import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen pt-20">
      
      {/* 自己紹介*/}
      <div>
          <div  className="flex flex-col items-center content-center justify-center pb-10">
            <Image src="/ico.jpg" alt="Logo" unoptimized width={200} height={200} className="h-50 w-50 mr-0 rounded-full border-4 border-gray-600" /> 
            <p className="text-gray-800 text-center text-2xl pt-10 nyak-color"><ruby>社甘<rp>(</rp><rt>しゃっかん</rt><rp>)</rp></ruby> <ruby>疒<rp>(</rp><rt>にゃく</rt><rp>)</rp></ruby></p>
            <p className="text-gray-800 text-center text-1xl pt-2 nyak-color">映像制作とプログラミング、割となんでもします。</p>
            <div className="flex pt-5">
              <a href="https://x.com/nyakukonyaku"><Image src="/x.svg" alt="Logo" unoptimized width={200} height={200} className="h-6 w-6 mr-4" /> </a>
              <a href="https://www.youtube.com/channel/UCAoYdKiquahmtahltyC2a9A"><Image src="/yt.svg" alt="Logo" unoptimized width={200} height={200} className="h-6 w-6 mr-4" /> </a>
              <a href="https://www.amazon.co.jp/hz/wishlist/ls/3ID20HKG47QQT?ref_=wl_share"><Image src="/amazon.svg" alt="Logo" unoptimized width={200} height={200} className="h-6 w-6 mr-4 " /> </a>
            </div>
          </div>
      </div>
      {/* 実績 */}
      <div>
        <p className="text-center text-2xl pb-5">制作実績</p>
        <div className="text-center">
          <div className="flex flex-wrap justify-center">
              <iframe className="w-64 h-36 rounded-xl m-5" width="480" height="270" src="https://www.youtube.com/embed/J6j74qOO9LY?si=YKVBhauD4UPsgv-F&autoplay=1&mute=1&loop=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
              <iframe className="w-64 h-36 rounded-xl m-5" width="480" height="270" src="https://www.youtube.com/embed/1YKATtmczPs?si=YKVBhauD4UPsgv-F&autoplay=1&mute=1&loop=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
              <a href="https://www.foriio.com/works/1499693"><Image src="/charact_webcomponent.jpg" width={200} height={200}  alt="Charact Webcomponent 制作" className="w-64 h-36 rounded-xl m-5"/> </a>
              <iframe className="w-64 h-36 rounded-xl m-5" width="480" height="270" src="https://www.youtube.com/embed/RlAae_CrhII?si=YKVBhauD4UPsgv-F&autoplay=1&mute=1&loop=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>  
              <iframe className="w-64 h-36 rounded-xl m-5" width="480" height="270" src="https://www.youtube.com/embed/n6smirq8gpk?si=YKVBhauD4UPsgv-F&autoplay=1&mute=1&loop=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>  
        </div>
      </div>
      
    </main>
  );
}
