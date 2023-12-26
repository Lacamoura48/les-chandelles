import AddToCartButton from "@/components/buttons/AddToCartButton";
import axios from "@/libs/axios";
import React from "react";

export default async function Bougie({ params }) {
  const { data } = await axios.get(`/api/products/${params.id}`);

  return (
    <main className="font-quahon">
      <section className="max-w-6xl flex flex-col md:flex-row px-2 md:px-0 md:gap-14 gap-8 mx-auto my-12">
        <div className="flex-1">
          <div className="w-full aspect-[1.2]">
            <img
              className="w-full h-full object-cover"
              src="/assets/images/hero-image.jpg"
              alt=""
            />
          </div>
          <div className="flex w-full gap-1">
            <div className="flex-1 aspect-square">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="sdkjf"
              />
            </div>
            <div className="flex-1 aspect-square">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="flex-1 aspect-square">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 md:pt-6">
          <h1 className="text-5xl font-dm text-violet md:mb-2">{data.name}</h1>
          <p className="text-gray-600 text-lg text-justify pr-2 md:pr-0">
            {data.description}
          </p>
          <h2 className="text-2xl font-dm">
            PRIX :
            <span className="text-violet text-3xl">
              {data.price}<span className="text-base"> DH</span>
            </span>
          </h2>
          <div className="flex flex-col md:w-fit w-full gap-3">
            <div className="flex gap-2">
              <input
                value="1"
                className="border border-black rounded-lg md:w-16 w-full px-3 py-1 text-xl font-dm"
                type="number"
                name="quantity"
                id="quantity"
              />
              <AddToCartButton id={data.id} title={data.name} price={data.price} quantity={1} mainPic={"/candle-hand.png"} />
            </div>
            <button className="rounded-xl bg-violet text-white md:py-2 py-3 text-xl font-dm">
              Acheter maintenant
            </button>
          </div>
        </div>
      </section>
      <h2 className="lg:text-5xl text-3xl text-violet font-dm text-center md:py-14 py-6">
        VOUS AIMEREZ AUSSI
      </h2>
      <section>
        <div className="max-w-6xl grid grid-cols-2 lg:grid-cols-4 lg:mx-auto mb-12 gap-5 px-2 md:px-0">
          <button href="/produit.html" className="w-full flex flex-col">
            <div className="aspect-square relative w-full max-w-[20rem] rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="./assets/images/hero-image.jpg"
                alt="bougie image"
              />
            </div>
            <div className="w-full text-start px-2">
              <h2 className="font-dm text-lg -mb-1">Lorem ipsum dolo</h2>
              <a
                href="/produits.html"
                className="hover:text-black text-gray-400 text-sm"
              >
                Kids
              </a>
              <p className="text-[#874392] font-bold text-xl md:mt-2">
                59.99<span className="font-normal text-xs text-gray-400"> MAD</span>
              </p>
            </div>
          </button>
          <button href="/produit.html" className="w-full flex flex-col">
            <div className="aspect-square relative w-full max-w-[20rem] rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="./assets/images/hero-image.jpg"
                alt="bougie image"
              />
            </div>
            <div className="w-full text-start px-2">
              <h2 className="font-dm text-lg -mb-1">Lorem ipsum dolo</h2>
              <a
                href="/produits.html"
                className="hover:text-black text-gray-400 text-sm"
              >
                Kids
              </a>
              <p className="text-[#874392] font-bold text-xl md:mt-2">
                59.99<span className="font-normal text-xs text-gray-400"> MAD</span>
              </p>
            </div>
          </button>
          <button href="/produit.html" className="w-full flex flex-col">
            <div className="aspect-square relative w-full max-w-[20rem] rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="./assets/images/hero-image.jpg"
                alt="bougie image"
              />
            </div>
            <div className="w-full text-start px-2">
              <h2 className="font-dm text-lg -mb-1">Lorem ipsum dolo</h2>
              <a
                href="/produits.html"
                className="hover:text-black text-gray-400 text-sm"
              >
                Kids
              </a>
              <p className="text-[#874392] font-bold text-xl md:mt-2">
                59.99<span className="font-normal text-xs text-gray-400"> MAD</span>
              </p>
            </div>
          </button>
          <button href="/produit.html" className="w-full flex flex-col">
            <div className="aspect-square relative w-full max-w-[20rem] rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="./assets/images/hero-image.jpg"
                alt="bougie image"
              />
            </div>
            <div className="w-full text-start px-2">
              <h2 className="font-dm text-lg -mb-1">Lorem ipsum dolo</h2>
              <a
                href="/produits.html"
                className="hover:text-black text-gray-400 text-sm"
              >
                Kids
              </a>
              <p className="text-[#874392] font-bold text-xl md:mt-2">
                59.99<span className="font-normal text-xs text-gray-400"> MAD</span>
              </p>
            </div>
          </button>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="lg:text-5xl text-3xl text-violet font-dm text-center md:py-14 py-6">
          MEILLEURES VENTES
        </h2>
        <div className="max-w-4xl px-2 lg:px-0 lg:h-[56rem] h-[28rem] mx-auto grid grid-cols-4 md:gap-3 gap-2">
          <div className="bg-violet rounded-xl col-start-1 col-end-3 row-span-2"></div>
          <div className="bg-red-500 rounded-xl col-start-3 col-end-5"></div>
          <div className="bg-violet rounded-xl col-span-2"></div>

          <div className="col-span-full flex md:gap-3 gap-2">
            <div className="bg-violet rounded-xl flex-1"></div>
            <div className="bg-violet rounded-xl flex-1"></div>
            <div className="bg-violet rounded-xl flex-1"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
