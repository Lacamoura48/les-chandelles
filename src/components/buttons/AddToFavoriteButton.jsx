"use client"
import axios from '@/libs/axios';
import React, { useEffect } from 'react'

function AddToFavoriteButton({bougieId, favorited}) {

    async function addToFavorites(e){
        e.stopPropagation();
        const {data, error} = await axios.post(`/api/favorites`, {product_id: bougieId});
      }

  return (
    <button onClick={addToFavorites} className="hover:bg-white buttonEffect cursor-pointer hover:shadow-md rounded-xl p-2 bg-white">
    <img
      className="w-5 h-5 object-fit"
      src={favorited ? "/SVG/heart-full.svg" : "/SVG/heart.svg"}
      alt="heart"
    />
  </button>
  )
}

export default AddToFavoriteButton