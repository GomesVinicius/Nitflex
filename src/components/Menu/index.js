import React from 'react'
import logo from '../../assets/logo.png'
import ButtonLink from '../ButtonLink'

import { Link } from 'react-router-dom'

import './styles.css'

function Menu() {
    return (
        <nav className="home">
            <Link to="/">
                <img className="logo" src={logo} alt="Nitflex" />
            </Link>

            <ButtonLink as={Link} className="buttonLink" to="/cadastro/video">
                Novo Vídeo
            </ButtonLink>
        </nav>
    )
}

export default Menu
