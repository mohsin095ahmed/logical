import { getById } from "../../../../service/product";

export default function handler(req, res) {
    if(req.method === "GET"){
    const {productId} = req.query;
    console.log(productId);
    const product = getById(productId);
     return res.status(200).json(product);
  }
  return res.status(404).send();
}