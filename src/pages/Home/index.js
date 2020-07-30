import React from 'react'
import BannerMain from '../../components/BannerMain'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'

import './styles.css'

import dadosInicias from '../../data/dados_iniciais.json'


function Home() {
    return(
        <div>
            <Menu />

            <BannerMain 
                videoTitle={dadosInicias.categorias[0].videos[0].titulo}
                url={dadosInicias.categorias[0].videos[0].url}
                videoDescription={'O que é Front End?'}
            />

            <Carousel
                ignoreFirstVideo
                category={dadosInicias.categorias[0]}
            />

            <Carousel
                ignoreFirstVideo
                category={dadosInicias.categorias[1]}
            />

            <Carousel
                ignoreFirstVideo
                category={dadosInicias.categorias[2]}
            />

            <Carousel
                ignoreFirstVideo
                category={dadosInicias.categorias[3]}
            />      

            <Carousel
                ignoreFirstVideo
                category={dadosInicias.categorias[4]}
            />

            <Footer />
        </div>
    )
}

export default Home
