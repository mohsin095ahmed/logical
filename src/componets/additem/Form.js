
import { useRef, useState } from "react";
import styles from "../../styles/From.module.css"
import { Upload } from "../../../service/upload";
//import { getAll } from "../../../service/product";
export default function Form({render}){
  const [image, setimage] = useState()
  let proRef = useRef();
  let priRef = useRef();
  let colorRef = useRef()
  let imageRef = useRef()

  
 
  async function add(){

    let file = imageRef.current.files;
    console.log(file)
    try{
      const res =await Upload(file);
      console.log(res);
      setimage(res);
       
    }catch(err){
      console.log(err)
    }
}

 async function AddData(e){
  e.preventDefault()
      let name = proRef.current.value;
      let price = priRef.current.value;
      let color = colorRef.current.value;
      
        

      
   let data = await fetch("api/products/products",{
   method : "POST",
   body:JSON.stringify({
    name,price,color,
    imageSrc :image,
   }),
   headers:{
     "Content-Type": "application/json"
     }
             });
             
       render('yes')     
             //data = await data.json();
       //console.log(data)    
         }

       

    return(
      <>
      <div className={styles.form}>
         
             <label for="" >Enter product name :</label>
             <input  ref={proRef} type=" text" id="my-name"/><br/>

             
             <label for="" >Enter product price :</label>
             <input type="text" ref={priRef} id="my-price"/><br/>

              
             <label for="" >Enter product color :</label>
             <input ref={colorRef} type=" text" id="my-pro-color"/><br/>

             <label for="">select main picture:</label>
            <input ref={imageRef}  type="file" id="my-img"></input><br></br><br></br>
            
               <button  onClick={add}>image upload</button>
               <br/><br/>
               
               <img src={image}/>
            <button onClick={AddData}>ADD PRODUCTS</button>
         
        </div>
      </>
    )
}

  