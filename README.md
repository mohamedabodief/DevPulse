# 🚀 DevPulse (Version 3.0.0)

**DevPulse** is a modern, high-performance GitHub profiling and developer analytics web application built for seamless exploration of open-source contributions, repository parsing, and developer ecosystem metrics in real-time.

Designed with a focus on clean production architecture, resilient state management, progressive loading states, and bulletproof client-side error boundaries.

---

## 🛠️ Tech Stack & Architecture

This project is built using the modern React ecosystem, following a **Feature-Based Directory Structure** for peak scalability and maintainability.

* **Frontend Library:** React 19 (Functional Components & Custom Hooks)
* **Routing:** React Router DOM (Dynamic Parametric Routing)
* **State & Cache Management:** React Query (TanStack Query v5) with *Stale-While-Revalidate* strategy.
* **Form Handling:** React Hook Form (Optimized re-renders with validation schema)
* **Styling:** Tailwind CSS (Utility-First, fully responsive layout grid)
* **Utility:** `clsx` & `tailwind-merge` (Custom `cn` helper for class merging and reference stability)

---

## ✨ Key Features (V3 Released)

### 🔍 1. Smart User Search (V2)
* **Persistent Search History:** Custom dropdown displaying the last 5 successful search queries with individual/bulk deletion, synchronized via `localStorage`.
* **Zero Browser Interference:** Native autocomplete suppression (`autoComplete="off"`) combined with a `useRef` event listener to handle out-of-bounds clicks (*Click Outside Detector*).

### 🎛️ 2. Repository Filtering & Sorting Pipeline (V2)
* **Instant Client-Side Filtering:** Real-time repository filtering by name on keypress without firing redundant API calls.
* **Derived State Sorting:** Multi-criteria sorting mechanism (Recently Updated 📅, Most Stars ⭐, Most Forks 🍴) implemented using safe derived arrays (`[...filteredRepos].sort()`) preventing layout state mutation.

### 📊 3. Advanced Skill Visualization (V3)
* **Language Aggregator:** Custom JavaScript data reduction pipeline (`Array.prototype.reduce`) that dynamically parses the repository array to extract and rank the developer's top 4 core languages.
* **Dynamic Analytics Cards:** Custom-styled inline percentage progress bars with fluid CSS animations (`transition-all duration-500`) to present deep workspace insights.

### ⏳ 4. Non-Blocking Progressive Loading (V3)
* **Custom Skeleton Shimmer Loaders:** Replaced intrusive screen-wide spinners with standalone component-level layout wireframes (`RepoGridSkeleton`).
* **Cumulative Layout Shift (CLS) Mitigation:** Hardware-accelerated CSS translation keyframes (`-translate-x-full` to `translate-x-full`) provide a smooth shimmer loop while ensuring layout space allocation during asynchronous hydration.

### 🛡️ 5. Resilient Error Handling & Fault Tolerance
* **Full-Screen Interceptor:** Adaptive full-viewport fallback layer (`fixed inset-0`) that intercepts total offline drops or network failure gracefully, supplying localized network diagnostics and state recovery triggers (`Try Again`).
* **Error Boundaries:** Complete integration of `react-error-boundary` with component-level fallback recovery mechanisms to ensure stability.

---

## 🏗️ Project Structure

```text
src/
├── assets/          # Static assets and images
├── features/        # Feature-based folders (Encapsulated Functional Modules)
│   └── users/
│       ├── SearchUser.jsx      # Search input with local history cache
│       ├── UserDetail.jsx      # Profile view with decoupled async boundaries
│       ├── RepoList.jsx        # Pipeline filters, sort engine, and language charts
│       ├── useUser.js          # Custom query hook for user object metadata
│       └── useRepos.js         # Custom query hook for repo array collection
├── hooks/           # Global reusable hooks (e.g., useDarkMode.js)
├── pages/           # Page-level route layouts (About.jsx)
├── ui/              # Global atomic UI primitives (Button, Spinner, RepoSkeleton, ErrorFallback)
├── utils/           # Structural core helpers (cn.js)
├── App.jsx          # App wrapper and react-router entry configuration
└── main.jsx         # App entry point wrapped with TanStack Provider & Global Boundaries