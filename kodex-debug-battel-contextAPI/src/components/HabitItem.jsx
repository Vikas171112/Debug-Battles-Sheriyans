import { useState } from "react";
import { useHabit } from "../context/HabitContext";

const HabitItem = ({ habit }) => {
  const { toggleHabit, deleteHabit, updateHabit, getStreak } = useHabit();

  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState(habit);

  const today = new Date().toISOString().split("T")[0]; //fixed
  const isDoneToday = habit.completedDates.includes(today);

  const handleSave = () => {
    updateHabit(habit.id, editData);
    setEditing(false); //fixed
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center justify-between">
      {editing ? (
        <div className="flex w-full gap-2">
          <input
            value={editData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
            className="flex-1 px-3 py-2 border border-slate-200 rounded-md bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={handleSave}
            className="px-3 py-2 bg-indigo-600 text-white rounded-md text-sm"
          >
            Save
          </button>

          <button
            onClick={() => setEditing(false)}
            className="px-3 py-2 bg-slate-200 text-slate-700 rounded-md text-sm"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <div>
            <h3 className="font-semibold text-slate-800 text-sm">
              {habit.name}
            </h3>

            <p className="text-xs text-slate-500 mt-1">
              {getStreak(habit.completedDates)} day streak
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleHabit(habit.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${
                isDoneToday
                  ? "bg-green-100 text-green-700"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {isDoneToday ? "Done" : "Mark"}
            </button>

            <button
              onClick={() => setEditing(true)}
              className="px-3 py-1.5 rounded-md text-xs bg-blue-100 text-blue-700"
            >
              Edit
            </button>

            <button
              onClick={() => deleteHabit(habit.id)}
              className="px-3 py-1.5 rounded-md text-xs bg-red-100 text-red-600"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HabitItem;
