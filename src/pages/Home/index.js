import React from 'react'
import logo from '../../assets/logo.png'

import './styles.css'

function Home() {
    return (
        <nav>
            <a href="/">
                <img className="logo" src={logo} alt="Nitflex"></img>
            </a>

            <a className="buttonLink" href="/">
                Novo Vídeo
            </a>
        </nav>
    )
}

export default Home
