import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'

function RegisterCategory() {

    const [categories, setCategories] = useState([])

    const body = {
        name: 'Na',
        description: 'Te',
        color: '#000000'
    }

    const [category, setCategory] = useState(body)

    function setValue(key, value) {
        setCategory({
            ...category,
            [key]: value
        })

        console.log(category)
    }

    function send(event) {
        event.preventDefault()
        
        setCategories([
            ...categories,
            category
        ])
    }

    function handleChange(event){
        setValue(
            event.target.getAttribute('name'),
            event.target.value
        )
    }

    return (
        <PageDefault>
            <h1>
                Página de Cadastro de Categoria: {body.name}
            </h1>

            <form>
                <label>Nome da Categoria: </label>
                
                <div>
                    <label>Nome: </label>
                    <input
                        name="name"
                        type="text"
                        value={body.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Descrição: </label>
                    <textarea
                        name="description"
                        value={body.description}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Cor:</label>
                    <input
                        name="color"
                        type="color"
                        value={body.color}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" onClick={send}>Enviar</button>
            </form>

            <ul>
                {categories.map((categories, index) => {
                    return (
                        <li key={`${categories}-${index}`}>
                            {categories}
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
