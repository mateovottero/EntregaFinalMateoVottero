import React from "react";
import { useEffect, useState } from "react";
import { getItem } from "../../mock/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../service/firebase";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loader, setLoader] = useState(false)
  const {id} = useParams()


//   useEffect(() => {
//     getItem(id)
//       .then((res) => setProducto(res))
//       .catch((error) => console.log(error));
//   }, [])
//   return (
//   <div>
//     <ItemDetail producto={producto}/>
//   </div>
//   )
// };
useEffect(()=>{
  setLoader(true)
  const collectionProd = collection(db, "productos")
  const referenciaAlDoc= doc(collectionProd, id)
  getDoc(referenciaAlDoc)
  .then((res)=> setProducto({id:res.id, ...res.data()}))
  .catch((error)=>console.log(error))
  .finally(()=>setLoader(false))
},[])

  return (
    <div>
     {loader ? <p>cargando...</p>  : <ItemDetail producto={producto} />}
    </div>
  );
}

export default ItemDetailContainer;
