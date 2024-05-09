import axios from 'axios';

export async function getAllCategories() {
  return await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
}
