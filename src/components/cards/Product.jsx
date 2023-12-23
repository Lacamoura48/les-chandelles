
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AddToFavoriteButton from '../buttons/AddToFavoriteButton'

function Product({bougie, favorited}) {

  return (
    <div className='relative group overflow-hidden'>
      <div className='top-3 right-3 absolute z-10 -translate-y-12 group-hover:translate-y-0 transition-transform'>
        <AddToFavoriteButton favorited={favorited} bougieId={bougie.id} />
      </div>
             
    <Link href={`/bougies/${bougie.id}`} className="w-full flex flex-col relative">
            <div className="aspect-square relative w-full max-w-[20rem] rounded-xl overflow-hidden">
              <Image
                fill
                className="w-full h-full object-cover"
                src="/images/hero-image.jpg"
                alt="bougie image"
              />
            </div>
            <div className="w-full text-start px-2">
              <h2 className="font-dm text-lg -mb-1">{bougie.name}</h2>
              <span
                href="/produits.html"
                className="hover:text-black text-gray-400 text-sm"
              >
                {bougie.categorie.name}
              </span>
              <p className="text-[#874392] font-bold text-xl mt-2">
                {bougie.price}
                <span className="font-normal text-xs text-gray-400">MAD</span>
              </p>
            </div>
          </Link>
          </div>)
}

export default Product