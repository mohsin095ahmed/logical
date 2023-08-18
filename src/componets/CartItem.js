import { useSelector } from "react-redux";
export default function CartItem(){

    const items = useSelector((state) => state.allcart);
    console.log(items)
    return(
        <>
        <div>item {items.length}</div>
        
        </>
    )
}