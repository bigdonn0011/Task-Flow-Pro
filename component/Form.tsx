import React, { useEffect, useState } from "react";
import { Buttons } from "../component/Buttons";
export const Form = () => {
  interface TaskStyle {
    text: string;
    id: number;
    done: boolean;
  } //variable declaration

  const [task, setTask] = useState<TaskStyle[]>([]);
  const [taskInput, setTaskInput] = useState("");
  //Section for adding task
  const addTask = (e) => {
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
  //Time declaration

  const time = task.id ? new Date(Number(task.id)).toLocaleTimeString() : "N/A";

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
        action=""
        className="min-h-fit p-4 max-w-3xl bg-background flex flex-1 flex-col gap-4 justify-center items-center"
        onSubmit={addTask}
      >
        <section className="w-full min-h-fit bg-case border border-border flex flex-1 flex-col p-2 justify-start items-center">
          <div className="gap-2 flex justify-between p-2 items-center w-full">
            <input
              className=" flex-1 p-2 bg-card/50 outline-card rounded-md ring-2 ring-card"
              type="text"
              placeholder="Add a new task.."
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              autoFocus
            />
            <button className="shrink-0 bg-card text-text border border-border rounded-md shadow-md p-4 py-2 active:scale-95 active:ring-4 hover:bg-card/80 hover:scale-105 transition-all duration-500">
              Submit
            </button>
          </div>
          <div className="w-full p-4 bg-background">
            <ul className="flex flex-col justify-center items-center gap-4">
              {task.map((task) => {
                return (
                  <li
                    key={task.id}
                    className="mt-2 bg-card rounded-md p-4 w-full flex justify-between border border-border 
                    "
                  >
                    <span> {task.text}</span>
                    <span>
                      {new Date(Number(task.id)).toLocaleTimeString()}
                    </span>
                    <div classname="flex justify-center items-center"></div>
                  </li>
                );
              })}
            </ul>
            {task.length > 0 && (
              <div className="p-4 w-full bg-background">
                <Buttons
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
