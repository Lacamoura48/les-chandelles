"use client"
import Product from "@/components/cards/Product";
import axios from "@/libs/axios";
import { useEffect, useState } from "react";

 export default function Bougies() {
   const [bougies, setBougies] = useState([])
   const [favorites, setFavorites] = useState([])
    useEffect(()=>{
      async function fetchData(){
        await axios.get('/api/products').then((res)=> {
          setBougies([...res.data])
        })
        await axios.get('/api/favorites').then((res)=> {
          setFavorites([...res.data])
        })
      }
      fetchData()
    }, [])

  return (
    <>
      
      <section className="max-w-7xl mx-auto pt-4 lg:pt-20 font-quahon">
        <div className="flex items-center h-[5rem] px-2 lg:mx-0">
          <div className="flex-1">
            <a
              href="/"
              className="flex items-center gap-2 text-lg hover:underline"
            >
              <img src="/SVG/chevron.svg" alt="chevron" />
              All category
            </a>
          </div>
          <div className="flex-1">
            <h1 className="text-violet font-dm text-2xl lg:text-4xl text-center">
              CARMÉLITE
            </h1>
          </div>
          <div className="flex-1">
            <select
              name=""
              id=""
              className="block rounded-lg border border-black px-3 ml-auto text-lg"
            >
              <option value="abboner">Chocolat</option>
              <option value="d">Vanille</option>
              <option value="f">chi l3ba</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center gap-4 py-2 lg:py-10">
          <span className="text-gray-500">TRIER PAR :</span>
          <button>Popularité</button>
          <button>Prix</button>
        </div>
      </section>
      <section>
        <div className="max-w-7xl grid grid-cols-2 lg:grid-cols-4 lg:mx-auto mb-12 gap-5 mx-5">
            {bougies.map((item)=>{
                return <Product bougie={item} favorited={favorites.find((bg)=> bg.product_id == item.id)} />
            })}
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

          <div className="col-span-full flex  md:gap-3 gap-2">
            <div className="bg-violet rounded-xl flex-1"></div>
            <div className="bg-violet rounded-xl flex-1"></div>
            <div className="bg-violet rounded-xl flex-1"></div>
          </div>
        </div>
      </section>

    </>
  );
}
