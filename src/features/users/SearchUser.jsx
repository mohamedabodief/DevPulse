import { useForm } from 'react-hook-form';
import { cn } from '../../utils/cn';
import Button from '../../ui/Button';
import toast from 'react-hot-toast';
import { useUser } from './useUser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const formStyles = cn('flex items-center justify-center md:gap-2 gap-1');
const inputStyles = cn(
  'w-40 space-x-2 rounded-lg bg-gray-200 p-2 text-gray-800',
  'focus:outline-none focus:ring-2 focus:ring-blue-500',
  'border border-gray-400',
  'dark:bg-gray-800 dark:text-gray-200',
  'md:w-48',
);

function SearchUser() {
  const [searchUsername, setSearchUsername] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const { isLoading, data, error } = useUser(searchUsername);

  const onSubmit = (formData) => {
    setSearchUsername(formData.username);
    reset();
    navigate(`/user/${formData.username}`);
    console.log(data);
  };

  const onerror = (errors) => {
    if (errors.username) toast.error(errors.username.message);
    if (error) toast.error(error.message);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onerror)}
      className={formStyles}
    >
      <input
        type="text"
        placeholder="Username"
        className={inputStyles}
        disabled={isLoading}
        {...register('username', { required: 'Username is required' })}
      />
      <Button
        text="Search"
        type="submit"
        disabled={isLoading}
      />
    </form>
  );
}

export default SearchUser;
