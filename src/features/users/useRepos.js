import { useQuery } from '@tanstack/react-query';
import { getRepos } from '../../services/apiGithub';

export function useRepos(username) {
  const {
    data: repos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['repos', username],
    queryFn: () => getRepos(username),
    enabled: !!username,
  });
  console.log('repos', repos);
  return { repos, isLoading, error };
}
