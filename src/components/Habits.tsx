interface IHabit {
  completed: number;
}

export function Habit({ ...props }: IHabit) {
  return (
    <div className="bg-zinc-900 w-10 h-10 text-white rounded m-2 flex text-center items-center justify-center">
      {props.completed}
    </div>
  );
}
