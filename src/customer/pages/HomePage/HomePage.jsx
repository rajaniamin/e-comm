import React from 'react'
import MainCarousel from '../../components/homeCarousel/MainCarousel'
import HomeSecCarousel from '../../components/HomeSeccarousel/HomeSecCarousel'
import { mens_kurta } from '../../../Data/mens_kurta'

const HomePage=()=>{
    return (
        <div>
           <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSecCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSecCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSecCarousel data={mens_kurta} sectionName={"Men's Tees"}/>
        <HomeSecCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
        <HomeSecCarousel data={mens_kurta} sectionName={"Women's Tees"}/>
        </div>
        
        </div>
    )
}

export default HomePage