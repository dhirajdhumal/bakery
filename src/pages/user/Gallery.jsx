import React from 'react'
import GalleryCard from '../../componenets/GalleryCard'
import {cakes, pastriesDessertsCreations, specialCelebrations, bakeryFreshness} from '../../data/gallery'

const Gallery = () => {
  return (
    <>
      <GalleryCard title = "Cakes" img = {cakes} />
      <GalleryCard title = "Pastries & Desserts" img = {pastriesDessertsCreations} />
      <GalleryCard title = "Special Celebrations" img = {specialCelebrations} />
      <GalleryCard title = "Bakery Freshness" img = {bakeryFreshness} />
    </>
  )
}

export default Gallery