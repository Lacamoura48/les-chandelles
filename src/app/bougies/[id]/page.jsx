import axios from '@/libs/axios'
import React from 'react'

export default async function Bougie({params}) {

  const { data } = await axios.get(`/api/products/${params.id}`)
  return (
    <div className='h-56'>{data.name}</div>
  )
}
