import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'

function RegisterVideo() {
    return (
        <PageDefault>
            <h1>
                Página de Cadastro de Vídeo
            </h1>

            <Link to="/cadastro/category">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default RegisterVideo
