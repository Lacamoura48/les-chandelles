export default function Home() {
  return (
    <>
      <section className="h-[32rem] w-full lg:pl-[10vw] lg:aspect-[1.8] lg:h-auto border-b border-b-pinkish bg-[url('/images/hero-image.jpg')] lg:bg-cover bg-center border flex flex-col justify-center lg:gap-10 gap-5">
        <h1 className="font-quahon text-violet lg:text-5xl lg:text-justify text-center text-4xl max-w-[34rem]">
          Atelier de fabrication de bougies personnalisées
        </h1>
        <button className="font-dm px-8 py-2 mx-auto lg:mx-0 w-fit bg-white text-lg text-violet border-2 border-violet rounded-xl shadow-[3px_4px_0_#874493] hover:shadow-[0px_0px_0_#874493] hover:translate-x-[3px] hover:translate-y-[4px] transition-all">
          Créer un compte
        </button>
      </section>
      <section>
        <h2 className="lg:text-5xl mx-auto text-3xl text-violet font-dm  text-center md:py-20 py-12 relative w-fit before:absolute before:w-20 before:h-20 before:rounded-full before:bg-pink-500 before:top-1/2 before:-translate-y-1/2 before:-left-5 before:-z-10 before:opacity-40">
          MEILLEURES VENTES
        </h2>
        <div className="lg:px-[8vw] px-2 lg:h-auto aspect-[1.2] h-[28rem] mx-auto grid grid-cols-4 md:gap-3 gap-2">
          <div className="bg-[url('/SVG/item.svg')] relative overflow-hidden bg-cover bg-center rounded-xl col-start-1 col-end-3 row-span-2">
            <div className="flex group items-end lg:p-4 p-1 justify-center bg-black hover:bg-opacity-20 bg-opacity-0 absolute inset-0 transition-colors duration-500">
              <div className="flex items-center group-hover:translate-y-0 translate-y-20 transition-transform gap-1">
                <h3 className="lg:text-lg  bg-white lg:px-6 py-1 w-fit rounded-md border border-black">
                  Lorem Ipsum{" "}
                  <span className="font-dm text-violet lg:text-xl">
                    300 <span className="text-base">DH</span>
                  </span>
                </h3>
                <button className="bg-white border border-black cursor-pointer hover:shadow-md rounded-md transition-all hover:scale-105 active:scale-75 p-2">
                  <img
                    className="w-5 h-5 object-fit"
                    src="/SVG/cart.svg"
                    alt="search"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[url('/images/meilleur-2.png')] bg-cover bg-center rounded-xl col-start-3 col-end-5"></div>
          <div className="bg-[url('/images/meilleur-3.png')] bg-cover bg-center rounded-xl col-span-2"></div>

          <div className="col-span-full flex md:gap-3 gap-2">
            <div className="bg-[url('/images/meilleur-3.png')] bg-cover bg-center rounded-xl flex-1"></div>
            <div className="bg-[url('/images/meilleur-5.png')] bg-cover bg-center rounded-xl flex-1"></div>
            <div className="bg-[url('/images/login-image.png')] bg-cover bg-center rounded-xl flex-1"></div>
          </div>
        </div>
      </section>
      <h3 className="font-quahon border-y border-y-pinkish lg:py-10 py-4 xl:text-6xl text-3xl text-violet text-center lg:mt-28 mt-14 lg:mb-20 mb-4">
        Crafting light, Sharing delight
      </h3>
      <section className="">
        <h2 className="text-5xl text-violet font-dm text-center lg:py-16 py-10 relative w-fit before:absolute before:w-20 before:h-20 before:rounded-full before:bg-pink-500 before:top-1/2 before:-translate-y-1/2 before:-left-5 before:-z-10 before:opacity-40 mx-auto">
          NOS PARFUMS
        </h2>
        <div className="lg:px-[8vw] xl:columns-4 sm:columns-3 columns-2 px-3 md:gap-5 gap-3 mx-auto break-inside-avoid mb-20">
          <a
            className="block w-full group md:mb-5 mb-3 rounded-xl overflow-hidden relative"
            href="#"
          >
            <img
              className="max-w-full rounded-xl group-hover:scale-110 transition-transform duration-500 ease-expo"
              src="https://images.unsplash.com/photo-1613068431228-8cb6a1e92573?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute w-full left-0 bottom-0 h-[30%] bg-white bg-gradient-to-r from-[#eb6577] to-[#874392] translate-y-full group-hover:translate-y-0 transition-transform flex justify-center items-center ease-expo duration-500">
              <p className="font-playfaire text-lg text-white font-bold">
                Perfum
              </p>
            </div>
          </a>
          <a
            className="block w-full group md:mb-5 mb-3 rounded-xl overflow-hidden relative"
            href="#"
          >
            <img
              className="max-w-full rounded-xl group-hover:scale-110 transition-transform duration-500 ease-expo"
              src="https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute w-full left-0 bottom-0 h-[30%] bg-white bg-gradient-to-r from-[#eb6577] to-[#874392] translate-y-full group-hover:translate-y-0 transition-transform flex justify-center items-center ease-expo duration-500">
              <p className="font-playfaire text-lg text-white font-bold">
                Perfum
              </p>
            </div>
          </a>
          <a
            className="block w-full group md:mb-5 mb-3 rounded-xl overflow-hidden relative"
            href="#"
          >
            <img
              className="max-w-full rounded-xl group-hover:scale-110 transition-transform duration-500 ease-expo"
              src="https://images.unsplash.com/photo-1603905179139-db12ab535ca9?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute w-full left-0 bottom-0 h-[30%] bg-white bg-gradient-to-r from-[#eb6577] to-[#874392] translate-y-full group-hover:translate-y-0 transition-transform flex justify-center items-center ease-expo duration-500">
              <p className="font-playfaire text-lg text-white font-bold">
                Perfum
              </p>
            </div>
          </a>
          <a
            className="block w-full group md:mb-5 mb-3 rounded-xl overflow-hidden relative"
            href="#"
          >
            <img
              className="max-w-full rounded-xl group-hover:scale-110 transition-transform duration-500 ease-expo"
              src="https://images.unsplash.com/photo-1603199941107-f247dc50472d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute w-full left-0 bottom-0 h-[30%] bg-white bg-gradient-to-r from-[#eb6577] to-[#874392] translate-y-full group-hover:translate-y-0 transition-transform flex justify-center items-center ease-expo duration-500">
              <p className="font-playfaire text-lg text-white font-bold">
                Perfum
              </p>
            </div>
          </a>
          <a
            className="block w-full group md:mb-5 mb-3 rounded-xl overflow-hidden relative"
            href="#"
          >
            <img
              className="max-w-full rounded-xl group-hover:scale-110 transition-transform duration-500 ease-expo"
              src="https://images.unsplash.com/photo-1549877696-a46dda28ffa8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute w-full left-0 bottom-0 h-[30%] bg-white bg-gradient-to-r from-[#eb6577] to-[#874392] translate-y-full group-hover:translate-y-0 transition-transform flex justify-center items-center ease-expo duration-500">
              <p className="font-playfaire text-lg text-white font-bold">
                Perfum
              </p>
            </div>
          </a>
          <a
            className="block w-full group md:mb-5 mb-3 rounded-xl overflow-hidden relative"
            href="#"
          >
            <img
              className="max-w-full rounded-xl group-hover:scale-110 transition-transform duration-500 ease-expo"
              src="https://images.unsplash.com/photo-1612198526331-66fcc90d67da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute w-full left-0 bottom-0 h-[30%] bg-white bg-gradient-to-r from-[#eb6577] to-[#874392] translate-y-full group-hover:translate-y-0 transition-transform flex justify-center items-center ease-expo duration-500">
              <p className="font-playfaire text-lg text-white font-bold">
                Perfum
              </p>
            </div>
          </a>
          <a
            className="block w-full group md:mb-5 mb-3 rounded-xl overflow-hidden relative"
            href="#"
          >
            <img
              className="max-w-full rounded-xl group-hover:scale-110 transition-transform duration-500 ease-expo"
              src="https://images.unsplash.com/photo-1612198526331-66fcc90d67da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute w-full left-0 bottom-0 h-[30%] bg-white bg-gradient-to-r from-[#eb6577] to-[#874392] translate-y-full group-hover:translate-y-0 transition-transform flex justify-center items-center ease-expo duration-500">
              <p className="font-playfaire text-lg text-white font-bold">
                Perfum
              </p>
            </div>
          </a>
        </div>
      </section>
      <section className="py-20">
        <h2 className="font-dm lg:text-3xl text-2xl max-w-2xl mx-auto w-fit mb-10 text-center">
          Abonnez-vous à nos emails
        </h2>
        <form action="" className="w-full pb-24 justify-center flex">
          <input
            type="email"
            className="lg:w-[24rem] border border-black py-2 px-4 focus:outline-none font-dm"
            placeholder="Email"
          />
          <button className="px-6 py-2 bg-black text-white font-dm">S'abboner</button>
        </form>
      </section>
    </>
  );
}
