import { useHabit } from "../context/HabitContext";
import HabitItem from "./HabitItem";

const HabitList = () => {
  const { habits, showAll, setShowAll } = useHabit();

  const today = new Date().toISOString().split("T")[0]; //fixed

  const completedToday = habits.filter((h) =>
    h.completedDates.includes(today),
  ).length;

  const progressPercent =
    habits.length > 0 ? Math.round((completedToday / habits.length) * 100) : 0; //fixed

  const topCategory = habits.reduce((acc, h) => {
    acc[h.category] = (acc[h.category] || 0) + 1;
    return acc;
  }, {});

  //fixed

  if (habits.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="bg-slate-50 border border-slate-200 rounded-xl px-10 py-8 text-center shadow-sm">
          <h2 className="text-lg font-semibold text-slate-700">
            No habits yet
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Start your journey by adding a new habit above.
          </p>
        </div>
      </div>
    );
  } //fixed

  const visibleHabits = showAll ? habits : habits.slice(0, 3); //fixed

  return (
    <div className="max-w-md mx-auto mt-6 px-4 pb-20">
      <div className="space-y-3">
        {visibleHabits.map((habit, index) => (
          <HabitItem key={index} habit={habit} />
        ))}
      </div>
    </div>
  );
};

export default HabitList;
