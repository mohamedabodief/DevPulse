# 🚀 DevPulse (Version 1.0.0)

**DevPulse** is a modern, high-performance GitHub profiling web application built for developers to seamlessly explore open-source contributions, analyze repositories, and visualize ecosystem pulses in real-time. 

Designed with a focus on clean production architecture, resilient state management, and bulletproof error handling.

---

## 🛠️ Tech Stack & Architecture

This project is built using the modern React ecosystem, following a **Feature-Based Directory Structure** for peak scalability and maintainability.

* **Frontend Library:** React 19 (Functional Components & Custom Hooks)
* **Routing:** React Router DOM (Dynamic Parametric Routing)
* **State & Cache Management:** React Query (TanStack Query v5) with *Stale-While-Revalidate* strategy.
* **Form Handling:** React Hook Form (Optimized re-renders with validation schema)
* **Styling:** Tailwind CSS (Utility-First, responsive layout grid)
* **Utility:** `clsx` & `tailwind-merge` (Custom `cn` helper for reference stability)

---

## ✨ Key Features (V1)

* 🔍 **Advanced User Search:** Instant GitHub profile lookup utilizing optimized form states.
* 📊 **Dynamic Stats Grid:** Clean visualization of repositories, followers, and following metrics.
* 🗂️ **Decoupled Repo List:** Custom grid system to display repositories dynamically beneath user info without layout shifts.
* 🌙 **Adaptive Dark Mode:** Custom `useDarkMode` hook linked with browser `localStorage` and system preferences for smooth transitions.
* 🛡️ **Resilient Error Boundaries:** Integration of `react-error-boundary` with a custom `ErrorFallback` UI and component recovery (Retry mechanism) to prevent application crashes.
* ⬅️ **Smart Navigation:** Back-button tracking utilizing React Router history API for enhanced UX.

---

## 🏗️ Project Structure

```text
src/
├── assets/          # Static assets and images
├── features/        # Feature-based folders (Encapsulated Logic)
│   └── users/
│       ├── SearchUser.jsx
│       ├── UserDetail.jsx
│       ├── RepoList.jsx
│       ├── useUser.js
│       └── useRepos.js
├── hooks/           # Global reusable hooks (e.g., useDarkMode.js)
├── pages/           # Page-level components (About.jsx)
├── ui/              # Global UI primitives (Button, Spinner, ErrorFallback, Header)
├── utils/           # Structural helpers (cn.js)
├── App.jsx          # App layout and route distribution
└── main.jsx         # App entry point wrapped with Global Error Boundary