import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/getProducts.services';

export function useProductsQueryHook(category_id: string) {
  return useQuery({
    queryFn: () => getProducts(category_id),
    queryKey: ['products', category_id],
    enabled: !!category_id,
    retry: false,
  });
}
