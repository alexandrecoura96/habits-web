import "./Habit.css";

interface IHabit {
  completed: number;
}

export function Habit({ ...props }: IHabit) {
  return <div className="habit">{props.completed}</div>;
}
