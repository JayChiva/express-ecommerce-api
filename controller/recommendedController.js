import { products } from '../constants/products.js';

export const getRecommended = (req, res) => {
  const recommended = products.slice(0, 3);
  res.status(200).send(recommended);
};
