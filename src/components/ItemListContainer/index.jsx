import React, { useState } from "react";
import { useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import {getProducts} from "../../mock/data"
import "./index.css";
import { useParams } from "react-router-dom";

function ListContainer(props) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading]= useState(false)
  const {categoryId}= useParams()

  useEffect(() => {
    setLoading(true)
    getProducts()
      .then((res) => {
        if(categoryId){
          setProducts(res.filter((item)=> item.category === categoryId))
}
        else{ setProducts(res)
        }
      })
      .catch((error) => console.log(error))
      .finally(()=> setLoading(false))
  }, [categoryId]);

  console.log(products)
  return (<div>
    {
      loading ? <p className="mt-4 text-center">Loading...</p>
      : <div className="container content">
      <h1 className="h1">{props.title}<span>{categoryId && categoryId} </span></h1>
      <h2 className="h2">{props.subTitle}</h2>
      <ItemList products={products}/>
    </div>
    }
  </div>

  );
}
export default ListContainer;
