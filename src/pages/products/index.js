import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
//import { getAll,  } from "../../../service/product";
import Form from "@/componets/additem/Form";
import { useSelector } from "react-redux";


export default function ProductList() {
  const [mounted, setMounted] = useState(false);
  const[item, setitem] = useState(0);
  const[products, setProducts] = useState();
   const render = (d)=>{
    console.log(d);
    setitem(item + 1)
   }
   //console.log(item + "ff")
   
  const items = useSelector(state => state.allcart);
  console.log(items);
   
       async function getProduct(){
        
     let response = await fetch("api/products/products");
     setProducts( await response.json())
     
       }
//console.log(products)
  useEffect(() => {
    setMounted(true);
    getProduct()
  },[item]);



    

  if (!mounted || !products || !products.length) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className="bg-white">
      <Form render={render}/>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    width={1000}
                    height={1000}
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p><br/>
                     <button className="text-white bg-blue-700" onClick={()=>addCart(product)}>Add to Cart</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
          <button  className="relative float-right bg-blue-600 ">add items</button>
    </div>
  );
}

//export async function getServerSideProps() {
  //const products = getAll();
  //return {
    //props: {
    //  products,
    //},
  //};
//}
