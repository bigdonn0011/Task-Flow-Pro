import React from "react";
import { useState } from "react";
import { Buttons } from "../component/Buttons";
import { Avatar } from "../component/Avatar";
interface TaskStyle {
  text: string;
  id: number;
  done: boolean;
}
interface FormStyle {
  openThemeModal: () => void;
  user: () => void;
  showName: () => string;
} //variable declaration
export const Form = ({ openThemeModal, user, showName }: FormStyle) => {
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
  //delete function
  const deleteTask = (idToDelete: number) => {
    let prompt = window.confirm("Delete this task permanently ?");
    if (prompt) {
      setTask(task.filter((item) => item.id !== idToDelete));
    }
  };
  // clear function

  const clearTask = (idToClear: number) => {
    let prompt = window.confirm("Completed this task ?");
    if (prompt) {
      setTask(task.filter((item) => item.id !== idToClear));
    }
  };
  //checktask

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
          {/*
        
        
        
        
        
        gu*/}
          <Avatar user={user} showName={showName} />
          {/*
        
        
        
        
        
        gu*/}
          <section className=" relative items-center w-full cursor-pointer justify-center p-2 flex">
            <div className="items-center w-full p-2 flex absolute left-4">
              <span
                className="select-none !text-4xl material-symbols-rounded active:scale-95 active:ring active:ring-4 active:ring-card/80 hover:scale-110"
                onClick={openThemeModal}
              >
                menu
              </span>
            </div>
            <div
              className="
              px-4 py-1 !font-bold !text-3xl !text-center"
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

            <Buttons
              type="submit"
              className="shrink-0 font-bold"
              text="Add Task"
            />
          </div>
          <div className="w-full p-4 bg-background/80 rounded-xl shadow-md shadow-card/7 bg-backdrop-blur">
            <ul className="flex flex-col justify-center items-center gap-4 ">
              {task.length === 0 && (
                <div className="flex flex-col justify-center items-center gap-2 p-4 w-full text-center text-text leading-tight tracking-tight ">
                  <p className="block p-4 text-medium text-2xl font-bold">
                    Looks empty in here
                  </p>
                  <p className="block p-4 text-medium text-xl font-medium">
                    Add a task to begin
                  </p>
                </div>
              )}
              {task.map((task) => {
                return (
                  <li
                    key={task.id}
                    className=" text-text border border-border bg-card rounded-lg p-4 gap-2 space-2 w-full flex justify-center items-start
                    "
                  >
                    <p className=" break-words flex-1 min-w-0 text-left">
                      {task.text}
                    </p>
                    <p className=" whitespace-nowrap text-right shrink-0 p-4 py-2">
                      {new Date(Number(task.id)).toLocaleTimeString()}
                    </p>

                    <Buttons
                      className="material-symbols-rounded p-0 shadow-none bg-red-400 !text-slate-800"
                      text="delete"
                      onClick={() => {
                        deleteTask(task.id);
                      }}
                    />
                    <Buttons
                      className="material-symbols-rounded p-0 shadow-none !bg-blue-400 !text-slate-800"
                      text="done"
                      onClick={() => {
                        clearTask(task.id);
                      }}
                    />
                  </li>
                );
              })}
            </ul>
            {task.length > 0 && (
              <div
                className="p-4 
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
