import { useParams } from "react-router-dom"


export function JeweleryDetails(){
    let params = useParams()
    return(
        <div>
            <dt>Details</dt>
            <dd>Category:{params.category}</dd>
            <dd>Size:{params.size}</dd>
        </div>
    )
}