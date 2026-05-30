import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../services/apiGithub';

export function useUser(username) {
  const { data: user, isLoading, error } = useQuery({
    queryKey: ['user', username],
    queryFn: () => getUser(username),
    enabled: !!username,
  });

  return { user, isLoading, error };
}
