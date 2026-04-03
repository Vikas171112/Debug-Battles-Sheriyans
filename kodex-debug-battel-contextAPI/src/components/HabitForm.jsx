import { useForm } from "react-hook-form";
import { useHabit } from "../context/HabitContext";

const HabitForm = () => {
  const { addHabit } = useHabit();

  const { register, handleSubmit, reset } = useForm();

  const onCommit = (values) => {
    const payload = {
      ...values,
      goalValue: Number(values.goalValue),
      id: crypto.randomUUID(), //fixed
      completed: false,
    };

    addHabit(payload);
    reset(); //fixed
  };

  return (
    <form onSubmit={handleSubmit(onCommit)} className="space-y-3">
      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">
          Habit Name
        </label>
        <input
          {...register("name", { required: true })}
          placeholder="walking"
          className="w-full px-3 py-2 border border-slate-200 rounded-md bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Daily Goal
          </label>
          <input
            type="number"
            {...register("goalValue")}
            defaultValue={30}
            className="w-full px-3 py-2 border border-slate-200 rounded-md bg-slate-50 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Unit
          </label>
          <select
            {...register("unit")}
            className="w-full px-3 py-2 border border-slate-200 rounded-md bg-slate-50"
          >
            <option>Minutes</option>
            <option>Hours</option>
            <option>Times</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Start Date
          </label>
          <input
            type="date"
            {...register("startDate")}
            className="w-full px-3 py-2 border border-slate-200 rounded-md bg-slate-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Category
          </label>
          <select
            {...register("category")}
            className="w-full px-3 py-2 border border-slate-200 rounded-md bg-slate-50"
          >
            <option>Focus</option>
            <option>Health</option>
            <option>Study</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">
          Motivation
        </label>
        <input
          {...register("motivation")}
          placeholder="Why do you want this?"
          className="w-full px-3 py-2 border border-slate-200 rounded-md bg-slate-50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-600 mb-2">
          Priority Level
        </label>
        <div className="flex gap-6">
          {["Low", "Medium", "High"].map((level) => (
            <label
              key={level}
              className="flex items-center gap-2 text-sm text-slate-600"
            >
              <input
                type="radio"
                value={level}
                {...register("priority")}
                className="accent-indigo-600"
              />
              {level}
            </label>
          ))}
        </div>
      </div>

      <button className="bg-indigo-600 text-white px-4 py-2 rounded w-full">
        Create
      </button>
    </form>
  );
};

export default HabitForm;
