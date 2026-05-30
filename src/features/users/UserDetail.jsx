import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from './useUser';
import { useRepos } from './useRepos';
import { cn } from '../../utils/cn';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';
import RepoList from './RepoList';


const mainLayoutStyles = cn(
  'max-w-4xl mx-auto my-8 p-6 w-full',
  'flex flex-col gap-6',
);

const backButtonContainerStyles = cn(
  'self-start flex items-center justify-start',
);

const topSectionStyles = cn(
  'flex flex-col md:flex-row gap-8 items-center md:items-start w-full',
);

const avatarStyles = cn(
  'w-40 h-40 rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-md',
  'object-cover transition-transform duration-300 hover:scale-105',
);

const infoContainerStyles = cn(
  'flex-1 space-y-4 text-center md:text-left w-full',
);

const nameStyles = cn('text-3xl font-bold text-gray-900 dark:text-gray-100');
const usernameStyles = cn(
  'text-xl text-blue-600 dark:text-blue-400 font-medium',
);
const bioStyles = cn(
  'text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl',
);

const statsGridStyles = cn(
  'grid grid-cols-3 mx-auto gap-4 max-w-md pt-4 border-t border-b border-gray-100 dark:border-gray-800 py-4',
);

const statCardStyles = cn('text-center');
const statNumberStyles = cn(
  'text-xl font-bold text-gray-800 dark:text-gray-200',
);
const statLabelStyles = cn('text-xs text-gray-400 uppercase tracking-wider');


function UserDetail() {
  const { username } = useParams();
  const navigate = useNavigate();

  const {
    user,
    isLoading: isLoadingUser,
    error: userError,
  } = useUser(username);
  const {
    repos,
    isLoading: isLoadingRepos,
    error: reposError,
  } = useRepos(username);

  if (isLoadingUser || isLoadingRepos) {
    return (
      <div className="flex min-h-[400px] flex-1 items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (userError || reposError) {
    return (
      <div className="flex min-h-[400px] flex-1 flex-col items-center justify-center space-y-4">
        <p className="text-lg font-medium text-red-500">
          {userError?.message || reposError?.message || 'Something went wrong.'}
        </p>
        <Button
          text="Go Back"
          variant="secondary"
          onClick={() => navigate(-1)}
        />
      </div>
    );
  }

  if (!user) return null;

  const {
    avatar_url,
    name,
    login,
    bio,
    public_repos,
    followers,
    following,
    html_url,
  } = user;

  return (
    <main className={mainLayoutStyles}>
      <div className={backButtonContainerStyles}>
        <Button
          text="&larr; Back"
          variant="secondary"
          className="px-4 py-1.5 text-sm font-medium"
          onClick={() => navigate(-1)}
        />
      </div>

      <div className={topSectionStyles}>
        <img
          src={avatar_url}
          alt={`${login}'s avatar`}
          className={avatarStyles}
        />

        <div className={infoContainerStyles}>
          <div>
            <h2 className={nameStyles}>{name || login}</h2>
            <p className={usernameStyles}>@{login}</p>
          </div>

          <p className={bioStyles}>
            {bio || "This developer hasn't added a bio yet."}
          </p>

          <div className={statsGridStyles}>
            <div className={statCardStyles}>
              <div className={statNumberStyles}>{public_repos}</div>
              <div className={statLabelStyles}>Repositories</div>
            </div>
            <div className={statCardStyles}>
              <div className={statNumberStyles}>{followers}</div>
              <div className={statLabelStyles}>Followers</div>
            </div>
            <div className={statCardStyles}>
              <div className={statNumberStyles}>{following}</div>
              <div className={statLabelStyles}>Following</div>
            </div>
          </div>

          <div className="pt-4">
            <a
              href={html_url}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                text="View GitHub Profile"
                variant="primary"
                className="mx-auto px-6 py-2.5"
              />
            </a>
          </div>
        </div>
      </div>

      <RepoList repos={repos} />
    </main>
  );
}

export default UserDetail;
