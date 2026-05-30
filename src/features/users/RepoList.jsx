import { cn } from '../../utils/cn';

const gridStyles = cn('grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 w-full');

const cardStyles = cn(
  'block p-5 rounded-xl border transition-all duration-300',
  'border-gray-200 bg-white hover:border-blue-500 hover:shadow-md hover:-translate-y-1',
  'dark:border-gray-800 dark:bg-gray-800/30 dark:hover:border-blue-400',
);

const repoNameStyles = cn(
  'text-lg font-semibold text-gray-950 dark:text-gray-50 group-hover:text-blue-500 transition-colors',
);

const descStyles = cn(
  'text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed',
);

const metaContainerStyles = cn(
  'flex items-center gap-4 mt-4 text-xs text-gray-500 dark:text-gray-400',
);

function RepoList({ repos }) {
  if (repos?.length === 0) {
    return (
      <p className="py-6 text-center text-gray-500 dark:text-gray-400">
        No public repositories found.
      </p>
    );
  }

  return (
    <div className="mt-8 w-full border-t border-gray-100 pt-6 dark:border-gray-800">
      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
        Latest Repositories
      </h3>

      <div className={gridStyles}>
        {repos?.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className={cardStyles}
          >
            <h4 className={repoNameStyles}>{repo.name}</h4>

            <p className={descStyles}>
              {repo.description || 'No description provided.'}
            </p>

            <div className={metaContainerStyles}>
              {repo.language && (
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                  {repo.language}
                </span>
              )}
              <span className="flex items-center gap-0.5">
                ⭐ {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-0.5">
                🍴 {repo.forks_count}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default RepoList;
