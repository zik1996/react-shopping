import { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"

export function Details(){
    let params = useParams()
    const [product, setProduct] = useState({id:0, title:"", price:"", description:"", category:"", image:"", rating:{rate:0, count:0}})
    const [toggle, setToggle] = useState(true)

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res=>res.json())
        .then(product=>{
            setProduct(product)
        })
    },[params.id])

    function handleToggleClick(){
        setToggle(!toggle)
    }
    return(
        <div>
            <div>
            <h1>Details</h1>
            <div className="row">
                <div className="col-3">
                    <img src={product.image} width="100%"  height="250px" alt="" />
                </div>
                <div className="col-9">
                    <dl>
                        <dt>Title</dt>
                        <dd>{product.title}</dd>
                        <dt>Price</dt>
                        <dd>&#8377;{product.price}</dd>
                        <dt>Rating</dt>
                        <dd>{product.rating.rate} <span className="bi bi-star-fill text-success"></span> [product.rating.count]</dd>
                        <dd>
                            <Link onClick={handleToggleClick} to={`description`}>Description</Link>
                        </dd>
                        <dd style={{display:toggle?"block":"none"}}><Outlet /></dd>
                    </dl>
                </div>
            </div>
            <p><Link to={`/products/${product.category}`}>Back to category</Link></p>
            </div>
        </div>
    )
}