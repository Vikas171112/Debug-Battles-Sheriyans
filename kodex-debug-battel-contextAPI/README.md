# 🐞 Debug Battle — Habit Tracker (React + Context API)

## Buggy Repo Link: https://github.com/DaneshVerma/kodex-debug-battel-contextAPI

## Final output : https://kodex-debug-react.vercel.app/

## 🎯 Challenge Overview

Welcome to the **Debug Battle**! You've been handed a **Habit Tracker** application built with **React**, **Vite**, and the **Context API**. The app is designed to let users create daily habits, mark them as complete, track streaks, edit, and delete habits.

**There's just one problem — the codebase is riddled with bugs.** 💥

The application looks like it should work, but almost nothing functions correctly. Your mission is to find and fix **all the bugs** hidden across the project files to get the app fully working.

---

## 📋 Rules

1. **Find and fix all the bugs** in the codebase.
2. Bugs are spread across **multiple files** — no file is safe! - 🔴 **State & mutation issues**
   - 🔴 **React rendering bugs**
   - 🔴 **Logic & conditional errors**
   - 🔴 **Date handling mistakes**
   - 🔴 **Context API misuse**
   - 🔴 **Missing function invocations**
3. The app should be **fully functional** after all bugs are fixed.
4. Do **NOT** change the overall architecture or structure — only fix what's broken.

## 🧩 App Description

The **Habit Tracker** app allows users to:

- ✅ **Add new habits** via a form (name, goal value)
- ✅ **View a list of habits** on the dashboard
- ✅ **Toggle habit completion** for the current day
- ✅ **Track streaks** — consecutive days a habit was completed
- ✅ **Edit habit details** inline
- ✅ **Delete habits** from the list
- ✅ **Show All / Show Less** toggle for the habit list
- ✅ **See stats** like progress percentage and top category

---

## 🗂️ Project Structure

```
src/
├── App.jsx                    # Root component
├── main.jsx                   # Entry point
├── index.css                  # Global styles
├── components/
│   ├── HabitForm.jsx          # Form to add new habits
│   ├── HabitItem.jsx          # Individual habit card (toggle, edit, delete)
│   └── HabitList.jsx          # Displays list of habits with stats
├── context/
│   └── HabitContext.jsx       # Context API provider with all habit logic
└── pages/
    └── Dashboard.jsx          # Main dashboard layout
```

---

## 🛠️ Tech Stack

- **React 18+** (with Hooks)
- **Vite** (build tool)
- **React Hook Form** (form handling)
- **Tailwind CSS** (styling)
- **Context API** (state management)

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## ⚡ Good Luck!

Read the code carefully, trace the logic, and squash every bug. May the best debugger win! 🏅

## HabitContext Bugs Fixed

Fixed incorrect date extraction logic (split("T")[1] → split("T")[0])

Fixed completedDates initialization (null → [])
Fixed missing return in map function (return h)
Fixed array mutation using .push() (used spread operator instead)
Fixed incorrect filter logic in toggle (used !== instead of ===)
Fixed toggle logic to properly add/remove today's date
Fixed streak calculation direction (future → past using -1)
Fixed delete functionality logic (filter !==)
Replaced loose equality (==) with strict equality (===)

## HabitList Bugs Fixed

Fixed incorrect date extraction logic
Fixed progress percentage calculation (multiplication → division)
Added empty state UI instead of returning null
Fixed slice logic (slice(3) → slice(0,3))
Fixed reduce edge case handling for empty data

Improved conditional rendering for better UX

## HabitItem Bugs Fixed

Fixed incorrect date extraction logic
Fixed direct state mutation (used setState with spread operator)
Fixed editing toggle logic (true → false after save)
Fixed reference issue by cloning habit object in state
Added proper edit/save/cancel UI flow
Fixed toggle button behavior (mark/unmark correctly)
Improved UI rendering using conditional editing state

## HabitForm Bugs Fixed

Fixed reset function call (reset → reset())
Converted goalValue from string to number
Fixed ID generation using crypto.randomUUID()
Added proper form structure and UI layout
Added missing input types (type="number")
Added validation for required fields
Improved form UX with labels and placeholders

## Dashboard UI Improvements

Improved layout spacing and alignment
Added consistent card design (rounded-xl, shadow-sm)
Improved sidebar styling and structure
Enhanced header UI (goal badge styling)
Fixed overflow and layout issues
Improved visual hierarchy and readability
