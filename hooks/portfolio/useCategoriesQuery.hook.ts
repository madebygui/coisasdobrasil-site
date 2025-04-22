import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/services/getCategories.services';

export function useCategoriesQueryHook() {
  return useQuery({
    queryFn: getCategories,
    queryKey: ['categories'],
  });
}
