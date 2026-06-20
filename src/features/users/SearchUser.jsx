import { useForm } from 'react-hook-form';
import { cn } from '../../utils/cn';
import Button from '../../ui/Button';
import toast from 'react-hot-toast';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const containerStyles = cn(
  'relative flex flex-col gap-2 md:w-auto items-center md:items-start',
);

const formStyles = cn(
  'flex items-center justify-center gap-2 w-full md:w-auto',
);

const inputStyles = cn(
  'w-36 rounded-xl bg-gray-200 p-2 text-gray-800 transition-all duration-200 text-sm',
  'focus:outline-none focus:ring-2 focus:ring-blue-500',
  'border border-gray-400 dark:border-gray-700',
  'dark:bg-gray-800 dark:text-gray-200',
  'md:w-56',
);

const dropdownStyles = cn(
  'absolute top-full left-0 mt-1 w-full md:max-w-[224px] bg-white dark:bg-gray-900',
  'border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50 overflow-hidden',
  'flex flex-col',
);

const historyRowStyles = cn(
  'flex items-center justify-between px-3 py-2 text-sm text-gray-700 dark:text-gray-300',
  'hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-150',
);

function SearchUser() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('searchHistory');
    return saved ? JSON.parse(saved) : [];
  });

  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const onSubmit = (formData) => {
    const username = formData.username.trim();
    if (!username) return;

    setHistory((prev) => {
      const filtered = prev.filter(
        (item) => item.toLowerCase() !== username.toLowerCase(),
      );
      return [username, ...filtered].slice(0, 5);
    });

    setIsOpen(false);
    reset();
    navigate(`/user/${username}`);
  };

  const onerror = (errors) => {
    if (errors.username) toast.error(errors.username.message);
  };

  const handleTagClick = (username) => {
    setIsOpen(false);
    navigate(`/user/${username}`);
  };

  const handleClearItem = (e, usernameToDelete) => {
    e.stopPropagation();
    setHistory((prev) => prev.filter((item) => item !== usernameToDelete));
  };

  return (
    <div
      className={containerStyles}
      ref={containerRef}
    >
      <form
        onSubmit={handleSubmit(onSubmit, onerror)}
        className={formStyles}
      >
        <input
          type="text"
          placeholder="Username"
          className={inputStyles}
          onFocus={() => setIsOpen(true)}
          autoComplete="off"
          {...register('username', { required: 'Username is required' })}
        />
        <Button
          text="Search"
          type="submit"
          variant="primary"
          className="whitespace-nowrap px-4 py-2 text-sm"
        />
      </form>

      {isOpen && history.length > 0 && (
        <div className={dropdownStyles}>
          <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:border-gray-800 dark:bg-gray-950">
            <span>Recent</span>
            <button
              type="button"
              onClick={() => setHistory([])}
              className="font-semibold text-red-500 hover:underline"
            >
              Clear All
            </button>
          </div>

          {history.map((user) => (
            <div
              key={user}
              onClick={() => handleTagClick(user)}
              className={historyRowStyles}
              style={{ cursor: 'pointer' }}
            >
              <span className="truncate font-medium">🕒 {user}</span>

              <Button
                text="✕"
                variant="secondary"
                onClick={(e) => handleClearItem(e, user)}
                className="h-5 w-5 rounded-full bg-transparent p-1 text-[9px] text-gray-400 hover:bg-gray-200 hover:text-red-500 dark:hover:bg-gray-700"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchUser;
