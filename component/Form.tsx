import React from "react";
import { useState } from "react";
import { Buttons } from "../component/Buttons";
interface TaskStyle {
  text: string;
  id: number;
  done: boolean;
};
interface FormStyle{
  openThemeModal:()=>void
}//variable declaration
export const Form = ({ openThemeModal }: FormStyle) => {
  const [task, setTask] = useState<TaskStyle[]>([]);
  const [taskInput, setTaskInput] = useState("");
  //Section for adding task
  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskInput.trim()) {
      const newTask = {
        text: taskInput.trim(),
        id: Date.now(),
        done: false,
      };
      setTask([...task, newTask]);
      setTaskInput("");
    } else {
      window.alert("Add a task to begin");
    }
  };

  //task function
  const clearAll = () => {
    const prompt = window.confirm("Clear All Tasks?");
    if (prompt) {
      setTask([]);
    }
  };
  return (
    <>
      <form
        className=" container min-h-fit p-4 max-w-3xl bg-background flex flex-1 flex-col gap-4 justify-center items-center"
        onSubmit={addTask}
      >
        <section className="w-full min-h-fit bg-case flex flex-1 flex-col p-2 justify-start items-center rounded-2xl shadow-xl">
          <section className=" relative items-center w-full cursor-pointer justify-center p-2 flex">
            <div className="items-center w-full p-2 flex absolute left-4">
              <span
                className="  select-none !text-4xl text-text material-symbols-rounded"
                onClick={openThemeModal}
              >
                menu
              </span>
            </div>
            <div
              className="
              px-4 py-1 !font-bold text-text !text-center"
            >
              <span>Task Flow Pro</span>
            </div>
          </section>
          <div className="input-Div gap-2 flex justify-between p-2 items-center w-full">
            <input
              className="text-text flex-1 min-w-0 p-2 bg-card/50 outline-border/50 rounded-md ring-2 ring-border"
              type="text"
              placeholder="Add a new task.."
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              autoFocus
            />

            <Buttons type="submit" className="shrink-0" text="Add Task" />
          </div>
          <div className="w-full p-4 bg-background/80">
            <ul className="flex flex-col justify-center items-center gap-4">
              {task.map((task) => {
                return (
                  <li
                    key={task.id}
                    className=" text-text border border-border bg-card rounded-lg p-3 w-full flex justify-between items-start
                    "
                  >
                    <span className="break-words flex-1 min-w-0">
                      {task.text}
                    </span>
                    <span className="whitespace-no-wrap text-right shrink-0">
                      {new Date(Number(task.id)).toLocaleTimeString()}
                    </span>
                  </li>
                );
              })}
            </ul>
            {task.length > 0 && (
              <div
                className="p-4 w-full bg-cardjb=n
                "
              >
                <Buttons
                  className="w-full"
                  onClick={clearAll}
                  text="Clear all tasks
                  "
                />
              </div>
            )}
          </div>
        </section>
      </form>
    </>
  );
};
