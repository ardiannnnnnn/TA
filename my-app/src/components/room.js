import React from 'react'
import g1 from '../asset/Group 89.png'
import g2 from '../asset/Group 90.png'
import g3 from '../asset/Group 91.png'

export default function Room() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-20 bg-white max-md:px-5">
      <div className="mt-7 text-3xl font-bold leading-9 text-black">
        Our choice
      </div>
      <div className="text-4xl font-bold leading-10 text-black max-md:max-w-full">
        The best room just for you!
      </div>
      <div className="justify-between mt-9 w-full max-w-[1195px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex overflow-hidden relative flex-col items-start pt-20 pr-20 pb-6 pl-3.5 w-full aspect-[0.54]">
      <img
        loading="lazy"
        src={g1}
        className="object-cover absolute inset-0 size-full"
      /> 
      <div className="relative pt-1.5 mt-60 font-semibold leading-[170%]">
        Family Luxe
      </div>
      <div className="relative mb-0 text-lg leading-8">Rp.680.000</div>
      <div className="relative mt-7 font-bold leading-9">FACILITY</div>
      <div className="relative text-base leading-7">
        Kamar Mandi Dalam
        <br />
        Wifi
        <br />2 Dewasa
        <br />2 Makan <br />1 Ranjang Single
      </div>
      <div className="relative justify-center px-5 py-2.5 mt-9 mb-0 ml-11 text-base whitespace-nowrap rounded-md bg-slate-400">
        Pesan
      </div>
    </div>
    <div className="flex overflow-hidden relative flex-col items-start pt-20 pr-20 pb-6 pl-3.5 w-full aspect-[0.54]">
      <img
        loading="lazy"
        src={g2}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative pt-1.5 mt-60 font-semibold leading-[170%]">
        Family Luxe
      </div>
      <div className="relative mb-0 text-lg leading-8">Rp.680.000</div>
      <div className="relative mt-7 font-bold leading-9">FACILITY</div>
      <div className="relative text-base leading-7">
        Kamar Mandi Dalam
        <br />
        Wifi
        <br />2 Dewasa
        <br />2 Makan <br />1 Ranjang Single
      </div>
      <div className="relative justify-center px-5 py-2.5 mt-9 mb-0 ml-11 text-base whitespace-nowrap rounded-md bg-slate-400">
        Pesan
      </div>
    </div>
    <div className="flex overflow-hidden relative flex-col items-start pt-20 pr-20 pb-6 pl-3.5 w-full aspect-[0.54]">
      <img
        loading="lazy"
        src={g3}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative pt-1.5 mt-60 font-semibold leading-[170%]">
        Family Luxe
      </div>
      <div className="relative mb-0 text-lg leading-8">Rp.680.000</div>
      <div className="relative mt-7 font-bold leading-9">FACILITY</div>
      <div className="relative text-base leading-7">
        Kamar Mandi Dalam
        <br />
        Wifi
        <br />2 Dewasa
        <br />2 Makan <br />1 Ranjang Single
      </div>
      <div className="relative justify-center px-5 py-2.5 mt-9 mb-0 ml-11 text-base whitespace-nowrap rounded-md bg-slate-400">
        Pesan
      </div>
    </div>
        </div>
      </div>
    </div>
    </div>
  )
}
