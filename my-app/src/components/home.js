import React from "react";
import "../css/home.css"; // Impor file CSS yang berisi aturan latar belakang
import Navbar from "./navbar";

const Home = () => {
  return (
    <div className="flex flex-col justify-center text-white">
      <div className="flex overflow-hidden relative flex-col pb-20 w-full min-h-[960px] max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e3585d71ef1367106ed9cb7e7c5d613c903cb96b66bd69f2a5d1457f34307a0b?apiKey=ce9394cc03bc44b69c556af8634703ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3585d71ef1367106ed9cb7e7c5d613c903cb96b66bd69f2a5d1457f34307a0b?apiKey=ce9394cc03bc44b69c556af8634703ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3585d71ef1367106ed9cb7e7c5d613c903cb96b66bd69f2a5d1457f34307a0b?apiKey=ce9394cc03bc44b69c556af8634703ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3585d71ef1367106ed9cb7e7c5d613c903cb96b66bd69f2a5d1457f34307a0b?apiKey=ce9394cc03bc44b69c556af8634703ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3585d71ef1367106ed9cb7e7c5d613c903cb96b66bd69f2a5d1457f34307a0b?apiKey=ce9394cc03bc44b69c556af8634703ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3585d71ef1367106ed9cb7e7c5d613c903cb96b66bd69f2a5d1457f34307a0b?apiKey=ce9394cc03bc44b69c556af8634703ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3585d71ef1367106ed9cb7e7c5d613c903cb96b66bd69f2a5d1457f34307a0b?apiKey=ce9394cc03bc44b69c556af8634703ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3585d71ef1367106ed9cb7e7c5d613c903cb96b66bd69f2a5d1457f34307a0b?apiKey=ce9394cc03bc44b69c556af8634703ef&"
          className="object-cover absolute inset-0 size-full"
        />
        <Navbar />
        <div className="flex relative flex-col items-start mt-36 mb-5 ml-28 max-w-full text-base font-bold leading-5 w-[577px] max-md:mt-10">
          <div className="mb-3.5 mt-40 text-4xl">Welcome to</div>
          <div className="mt-1 text-7xl max-sm:mt-3 max-sm:mb-4">
            Light Fall Hotel
          </div>
          <div className="self-stretch text-5sm mt-5 leading-7 max-md:max-w-full">
            Selamat datang di Light Falls Hotel! Kami mengundang Anda untuk
            merasakan kenyamanan dan kemewahan yang kami tawarkan. Segera pesan
            kamar hotel Anda sekarang untuk pengalaman menginap yang tak
            terlupakan di Mercure Hotel.
          </div>
          <div className="justify-center px-5 py-2.5 mt-6 text-black rounded-md bg-slate-400 bg-opacity-80">
            About Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
