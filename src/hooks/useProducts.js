import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services/services';

const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    retry: false,
  });
};

export default useProducts;
