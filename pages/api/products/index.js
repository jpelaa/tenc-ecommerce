import products from "../../../data/products.json";
export default function handler(req, res) {
  console.log(req.query, " (req.query ");
  res.status(200).json(products);
}
