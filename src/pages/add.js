import { useRef, useState } from "react"
import { Upload } from "../../service/upload";
export default function add(){
    const imageRef = useRef();
    const [image, setimage] = useState()
    async function  adds(){
        const file = imageRef.current.files;
        
        console.log(file);
        
    try{
        const res =  await Upload(file)
        setimage (res)
        //console.log(imgpath);
        console.log(res)
    }catch(err){
        console.log(err +"hfhgh")
    }
      
   }
    return(
        <>
           <input type="file" ref={imageRef}/>
           <button onClick={adds}>upload</button>
            <img src={image}/>            
        </>
    )
}