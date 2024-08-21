import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export function Home(){
    let navigate = useNavigate()
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/categories`)
        .then(res=>res.json())
        .then(categories=>{
            setCategories(categories)
        })
    })

    function handleLoginClick(){
        navigate("login")
    }
    return(
        <div>
            
            <h1>Home</h1>
            <button className="btn btn-primary mb-4"  onClick={handleLoginClick}>Login</button>
            <ol>
                {
                    categories.map(category=>
                        <li key={category}><Link to={`/products/${category}`}>{category}</Link></li>
                    )
                }
            </ol>
        </div>
    )
}