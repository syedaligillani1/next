'use client'
import { useEffect, useState } from "react"

export default function page() {


    const [product , setProduct] = useState([]); 

    useEffect(()=>{

        async function fetchProducts ()
        {
            try {

            const res = await fetch('https://dummyjson.com/products')
     
             const data = await res.json();
             console.log(data);

            setProduct(data.products)
            } catch (error) {
                
                console.error(error)
            }
        }    

        fetchProducts()}

    ,[])

  return (
    <div>
      <h1>Product List</h1>
      

        <ul>
            {product.map((item:any)=>(

                <li>{item.title}</li>          
                ))
            }
        </ul>

    </div>
  )
}
