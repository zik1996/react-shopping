import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

export function Description(){
    let params = useParams()
    const [product, setProduct] = useState({id:0, title:"", price:"", description:"", category:"", image:"", rating:{rate:0, count:0}})

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res=>res.json())
        .then(product=>{
            setProduct(product)
        })
    },[params.id])

    return(
        <div>
            {product.description}
        </div>
    )
}