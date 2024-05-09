import { useQuery } from '@tanstack/react-query';
import { getAllCategories } from '../services/services';

const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });
};

export default useCategories;
