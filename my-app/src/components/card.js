import React from 'react'

export default function card() {
  return (
    <div>
      <div className="flex flex-col text-black max-w-[351px]">
      <div className="flex overflow-hidden relative z-10 flex-col pt-20 aspect-[0.99] leading-[170%]">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/80658b35734a565b57d3bed7f061806e17de9dff8f732d615169b91fa7059350?apiKey=ce9394cc03bc44b69c556af8634703ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/80658b35734a565b57d3bed7f061806e17de9dff8f732d615169b91fa7059350?apiKey=ce9394cc03bc44b69c556af8634703ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/80658b35734a565b57d3bed7f061806e17de9dff8f732d615169b91fa7059350?apiKey=ce9394cc03bc44b69c556af8634703ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/80658b35734a565b57d3bed7f061806e17de9dff8f732d615169b91fa7059350?apiKey=ce9394cc03bc44b69c556af8634703ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/80658b35734a565b57d3bed7f061806e17de9dff8f732d615169b91fa7059350?apiKey=ce9394cc03bc44b69c556af8634703ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/80658b35734a565b57d3bed7f061806e17de9dff8f732d615169b91fa7059350?apiKey=ce9394cc03bc44b69c556af8634703ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/80658b35734a565b57d3bed7f061806e17de9dff8f732d615169b91fa7059350?apiKey=ce9394cc03bc44b69c556af8634703ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/80658b35734a565b57d3bed7f061806e17de9dff8f732d615169b91fa7059350?apiKey=ce9394cc03bc44b69c556af8634703ef&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-start pt-1.5 pr-20 pb-3 pl-5 mt-52 rounded-none bg-white bg-opacity-70">
          <div className="text-xl font-semibold">Family Luxe</div>
          <div className="text-lg">Rp.680.000</div>
        </div>
      </div>
      <div className="flex flex-col items-start pt-14 pr-20 pb-6 pl-5 mt-0 w-full text-base bg-indigo-300 rounded-none">
        <div className="text-xl font-bold leading-9">FACILITY</div>
        <div className="leading-7">
          Kamar Mandi Dalam
          <br />
          Wifi
          <br />2 Dewasa
          <br />2 Makan <br />1 Ranjang Single
        </div>
        <div className="justify-center px-5 py-2.5 mt-11 ml-11 whitespace-nowrap rounded-md bg-slate-400">
          Pesan
        </div>
      </div>
    </div>
    </div>
  )
}
