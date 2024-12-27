import React from "react";
import { useState } from "react";
import Task from "./Task";

export const Addbtn = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    alert(`Task Added:${task}`);
    setTaskList([...taskList,{name:task,isCompleted:false}]);
    setTask("");
  };

  const deleteTask = (taskdelete) => {
    setTaskList(taskList.filter((task) => task !== taskdelete));
  };

  const Complete = (taskComplete) => {
    alert(`Task is completed`);
    setTaskList(
      taskList.map((task) =>
        task.name === taskComplete.name
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    );
  };

  return (
    <div>
      <div className="items-center justify-center flex p-5">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          className=" flex rounded-lg h-10 p-5 w-96"
          placeholder="add task..."
        ></input>
        <button
          onClick={addTask}
          className="bg-amber-500 w-28 h-10 rounded-lg text-white hover:bg-blue-600 hover:scale-105 mx-3"
        >
          Add Task
        </button>
      </div>

      {/*render*/}
      {taskList.map((taskItem, index) => (
        <Task
          key={index}
          TaskName={taskItem.name}
          onDelete={() => deleteTask(taskItem)}
          completed={taskItem.isCompleted}
          onComplete={() => Complete(taskItem)}
        />
      ))}
    </div>
  );
};
export default Addbtn;
