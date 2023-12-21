import React from 'react'

function Product() {
  return (
    <button href="/produit.html" className="w-full flex flex-col">
            <div className="aspect-square relative w-full max-w-[20rem] rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/images/hero-image.jpg"
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
              <p className="text-[#874392] font-bold text-xl mt-2">
                59.99
                <span className="font-normal text-xs text-gray-400">MAD</span>
              </p>
            </div>
          </button>
  )
}

export default Product