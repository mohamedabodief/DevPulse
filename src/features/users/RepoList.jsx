import { useState } from 'react';
import { cn } from '../../utils/cn';

const gridStyles = cn('grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 w-full');

const cardStyles = cn(
  'block p-5 rounded-xl border transition-all duration-300',
  'border-gray-200 bg-white hover:border-blue-500 hover:shadow-md hover:-translate-y-1',
  'dark:border-gray-800 dark:bg-gray-800/30 dark:hover:border-blue-400'
);

const repoNameStyles = cn(
  'text-lg font-semibold text-gray-950 dark:text-gray-50 group-hover:text-blue-500 transition-colors'
);

const descStyles = cn(
  'text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed'
);

const metaContainerStyles = cn(
  'flex items-center gap-4 mt-4 text-xs text-gray-500 dark:text-gray-400'
);

const controlsStyles = cn(
  'flex flex-col sm:flex-row gap-3 items-center justify-between mt-4 p-3 w-full',
  'bg-gray-50 dark:bg-gray-800/20 rounded-xl border border-gray-100 dark:border-gray-800'
);

const inputStyles = cn(
  'w-full sm:w-64 rounded-lg bg-white dark:bg-gray-900 p-2 text-xs text-gray-800 dark:text-gray-200',
  'focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-gray-700'
);

const selectStyles = cn(
  'w-full sm:w-auto rounded-lg bg-white dark:bg-gray-900 p-2 text-xs text-gray-800 dark:text-gray-200',
  'focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-gray-700 cursor-pointer'
);

const chartCardStyles = cn(
  'w-full p-5 mb-6 rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800/10',
  'flex flex-col gap-4'
);

function RepoList({ repos }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('updated');

  if (repos?.length === 0) {
    return (
      <p className="py-6 text-center text-gray-500 dark:text-gray-400">
        No public repositories found.
      </p>
    );
  }

  const langStats = repos?.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});

  const topLanguages = Object.entries(langStats || {})
    .map(([name, count]) => ({
      name,
      count,
      percentage: Math.round((count / repos.length) * 100),
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 4);

  const filteredRepos = repos?.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const sortedRepos = [...filteredRepos].sort((a, b) => {
    if (sortBy === 'stars') return b.stargazers_count - a.stargazers_count;
    if (sortBy === 'forks') return b.forks_count - a.forks_count;
    if (sortBy === 'updated') return new Date(b.updated_at) - new Date(a.updated_at);
    return 0;
  });

  return (
    <div className="mt-8 w-full border-t border-gray-100 pt-6 dark:border-gray-800">
      
      {topLanguages.length > 0 && (
        <div className={chartCardStyles}>
          <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            📊 Top Languages & Skills
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topLanguages.map((lang) => (
              <div key={lang.name} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-gray-700 dark:text-gray-300">
                  <span>{lang.name}</span>
                  <span>{lang.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 dark:bg-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        Latest Repositories ({sortedRepos.length})
      </h3>

      <div className={controlsStyles}>
        <input
          type="text"
          placeholder="🔍 Filter repositories..."
          className={inputStyles}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-[11px] text-gray-400 uppercase tracking-wider font-bold whitespace-nowrap">Sort by:</span>
          <select
            className={selectStyles}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="updated">📅 Recently Updated</option>
            <option value="stars">⭐ Most Stars</option>
            <option value="forks">🍴 Most Forks</option>
          </select>
        </div>
      </div>

      {sortedRepos.length === 0 && (
        <div className="text-center py-10 mt-6 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/10 rounded-xl border border-dashed border-gray-200 dark:border-gray-800">
          No repositories match &quot;{searchTerm}&quot; 🔍
        </div>
      )}

\      {sortedRepos.length > 0 && (
        <div className={gridStyles}>
          {sortedRepos.map((repo) => (
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
      )}
    </div>
  );
}

export default RepoList;