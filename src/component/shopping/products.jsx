import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export function Products(){

    let params = useParams()
    const [products, setProducts] = useState([{id:0, title:"", price:"", description:"", category:"", image:"", rating:{rate:0, count:0}}])

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(res=>res.json())
        .then(products=>{
            setProducts(products)
        })
    })
    return(
        <div>
            <h1>Products</h1>
            <div className="row">
                <div className="col-2">
                    <div className="d-flex flex-wrap flex-column">
                        {
                            products.map(product=>
                                <div key={product.id} className="card m-2 p-2" style={{width:"200px"}}>
                                    <img src={product.image} height="140px" alt="" />
                                    <div className="card-body">
                                        <Link to={`details/${product.id}`} className="btn btn-danger w-100">Details</Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="col-10  ps-4">
                    <Outlet />
                </div>
            </div>
            <p><Link to={`/`}>Back to Categories</Link></p>
        </div>
    )
}