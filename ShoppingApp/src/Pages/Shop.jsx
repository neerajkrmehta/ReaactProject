import React from 'react'
import { Hero } from '../Component/Hero/Hero'
import { Popular } from '../Component/Popular/Popular'
import { Offers } from '../Component/Offers/Offers'
import { NewCollections } from '../Component/NewCollections/NewCollections'
import { NewsLetter } from '../Component/NewsLetter/NewsLetter'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}
