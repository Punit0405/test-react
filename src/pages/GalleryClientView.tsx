import React from 'react'
import Grid from '../components/Grid'
import { Image } from 'react-bootstrap'

const GalleryClientView = () => {
  return (
    <>
    <Image src='../../images11.jpg'  style={{maxHeight:"100%",maxWidth:"100%",objectFit:"cover"}}/>
    <Grid/>
    </>
    
  )
}

export default GalleryClientView