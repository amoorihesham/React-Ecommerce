import axios from 'axios';

export async function getAllCategories() {
  return await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
}

export function getProducts() {
  return axios.get('https://ecommerce.routemisr.com/api/v1/products');
}
export function getBrands() {
  return axios.get('https://ecommerce.routemisr.com/api/v1/brands');
}
