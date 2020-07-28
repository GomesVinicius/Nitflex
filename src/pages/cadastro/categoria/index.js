import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'

function RegisterCategory() {
    return (
        <PageDefault>
            <h1>
                Página de Cadastro de Categoria
            </h1>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default RegisterCategory
