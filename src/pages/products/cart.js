import React from "react";
import {  useDispatch, useSelector , shallowEqual} from "react-redux";
import  { useState, useEffect } from "react";
//import CartItem from "@/componets/cartItem";
import Image from "next/image";
import { remove } from "@/store/cartSlice";
const CartItem =()=>{
    const [ mount ,setmount] = useState("false");


     const dispath = useDispatch()
        const items = useSelector( state => state.allcart.cart);
        console.log(items);

    
         function removehandler(id){
         dispath(remove(id))
        }

    useEffect(()=>{
        setmount(true);
    
    },[])

      
       
       

         return(
        <>
         <div> cart</div>
       {items.map((item)=>(
        <div>
             {console.log(item.imageSrc)}
            <Image
             src={item.imageSrc}
             alt="sdsd"
             height={350}
             width={450}
             />
           <br/>           
           <span> color :{item.color}</span>
            <p>Quntinty :{item.Qantity}</p>
            <span>  price :{item.price}</span>
            <button className="inline-block bg-blue-900 text-white" onClick={()=>{removehandler(item.id)}} >remove</button>

        </div>
       ))}  


         <div>cart item {items.length} </div>
        </>
    )
}
export default CartItem;