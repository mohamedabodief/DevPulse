import { cn } from '../utils/cn';

const cardSkeletonStyles = cn(
  'relative overflow-hidden p-5 rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-800/20 h-36',
);

const shimmerOverlay = cn(
  'absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/5 animate-shimmer',
);

function RepoSkeleton() {
  return (
    <div className={cardSkeletonStyles}>
      <div className={shimmerOverlay} />

      {/* محاكاة اسم الريبو */}
      <div className="mb-3 h-5 w-2/3 rounded-lg bg-gray-300 dark:bg-gray-700" />

      {/* محاكاة الوصف (سطر أول وسطر تاني) */}
      <div className="mb-2 h-3 w-full rounded-md bg-gray-200 dark:bg-gray-800" />
      <div className="mb-4 h-3 w-4/5 rounded-md bg-gray-200 dark:bg-gray-800" />

      {/* محاكاة الـ Meta (اللغة، النجوم) */}
      <div className="flex gap-4 border-t border-gray-200 pt-2 dark:border-gray-800">
        <div className="h-3 w-12 rounded-md bg-gray-300 dark:bg-gray-700" />
        <div className="h-3 w-8 rounded-md bg-gray-300 dark:bg-gray-700" />
      </div>
    </div>
  );
}

// مجمع مريح بيطبع 4 كروت هيكلية جنب بعض أثناء التحميل
export function RepoGridSkeleton() {
  return (
    <div className="mt-8 grid w-full grid-cols-1 gap-4 pt-6 md:grid-cols-2">
      <RepoSkeleton />
      <RepoSkeleton />
      <RepoSkeleton />
      <RepoSkeleton />
    </div>
  );
}

export default RepoSkeleton;
