import { useQuery } from '@tanstack/react-query';
import { getBrands } from '../services/services';
const useBrands = () => {
  return useQuery({
    queryKey: ['brands'],
    queryFn: getBrands,
  });
};

export default useBrands;
