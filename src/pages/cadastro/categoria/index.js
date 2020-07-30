import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'

function RegisterCategory() {
    
    const body = {
    name: '',
    description: '',
    color: '#cc0000'
    }

    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState(body)
    


    function setValue(key, value) {
        setCategory({
            ...category,
            [key]: value
        })
    }

    function send(event) {
        event.preventDefault()
        
        setCategories([
            ...categories,
            category
        ])

        setCategory(body)
    }

    function handleChange(event){
        //const { getAttribute, value } = event.target

        setValue(
            event.target.getAttribute('name'),
            event.target.value
        )
    }

    return (
        <PageDefault>
            <h1>
                Página de Cadastro de Categoria: {category.name}
            </h1>

            <form>
                <FormField
                    label="Nome da categoria: "
                    name="name"
                    type="text"
                    value={category.name}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição: "
                    name="description"
                    type="textarea"
                    value={category.description}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor: "
                    name="color"
                    type="color"
                    value={category.color}
                    onChange={handleChange}
                />

                <button type="submit" onClick={send}>Enviar</button>
            </form>

            <ul>
                {categories.map((categories, index) => {
                    return (
                        <li key={`${categories}-${index}`}>
                            {categories.name}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default RegisterCategory
