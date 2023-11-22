import products from "../../../data/products.json";
export default function handler(req, res) {
  const product = products.find((data) => data.image === req.query.id);
  res.status(200).json(product);
}
