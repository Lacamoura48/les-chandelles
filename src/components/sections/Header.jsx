import React from 'react'

function Header() {
  return (
    <>
     <h3 className="bg-violet text-center text-white sm:text-xl text-lg py-1">
      Livraison partout au Maroc
    </h3>
    <nav
      className="border-b border-b-pinkish sticky z-[10] top-0 md:px-[10vw] px-4 bg-[rgba(255,255,255,0.5)] backdrop-blur"
    >
      <ul className="flex justify-between items-center h-[4rem]">
        <li className="font-dm text-xl flex-1 hidden lg:block">EUR (€)</li>
        <li className="flex-1">
          <img
            className="md:w-44 w-32 lg:mx-auto"
            src="/SVG/logo.svg"
            alt="les chandelles logo"
          />
        </li>
        <li className="flex justify-end gap-1 flex-1">
          <buttons
            className="hover:bg-white cursor-pointer hover:shadow-md rounded-xl transition-all hover:scale-105 active:scale-75 p-2"
          >
            <img
              className="w-5 h-5 object-fit"
              src="/SVG/search.svg"
              alt="search"
            />
          </buttons>
          <buttons
            className="hover:bg-white hidden md:block cursor-pointer hover:shadow-md rounded-xl transition-all hover:scale-105 active:scale-75 p-2"
          >
            <img
              className="w-5 h-5 object-fit"
              src="/SVG/heart.svg"
              alt="search"
            />
          </buttons>
          <buttons
            className="hover:bg-white cursor-pointer hover:shadow-md rounded-xl transition-all hover:scale-105 active:scale-75 p-2"
          >
            <img
              className="w-5 h-5 object-fit"
              src="/SVG/user.svg"
              alt="search"
            />
          </buttons>
          <buttons
            className="hover:bg-white cursor-pointer hover:shadow-md rounded-xl transition-all hover:scale-105 active:scale-75 p-2"
          >
            <img
              className="w-5 h-5 object-fit"
              src="/SVG/cart.svg"
              alt="search"
            />
          </buttons>
        </li>
      </ul>
    </nav>
    <div
      className="relative after:content-[''] after:absolute after:top-0 after:right-0 after:bg-gradient-to-l after:from-white after:to-transparent after:w-10 after:h-full"
    >
      <ul
        className="flex justify-start px-5 md:px-0 md:justify-center gap-10 py-2 md:overflow-x-auto overflow-x-scroll"
      >
        <li className="shrink-0">
          <a href="#" className="text-violet text-lg font-dm">COLLECTION DE NOËL</a>
        </li>
        <li className="shrink-0">
          <a href="#" className="text-violet text-lg font-dm">POUR LA MAISON</a>
        </li>
        <li className="shrink-0">
          <a href="#" className="text-violet text-lg font-dm">DÉCORATION</a>
        </li>
        <li className="shrink-0">
          <a href="#" className="text-violet text-lg font-dm">CADEAUX</a>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Header