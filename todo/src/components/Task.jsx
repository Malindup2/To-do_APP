import React from "react";

export const Task = ({ TaskName, onDelete, onComplete ,completed}) => {
  return (
    <div className="bg-white  items-center flex justify-between m-10 rounded-2xl font-semibold shadow-xl gap-9 p-2 w-3/4 max-w-[600px] mx-auto">
      <input type="checkbox" className="m-5 w-5 h-5" />
      <span
        style={{
          textDecoration: completed ? "line-through" : "none",
          opacity: completed ? 0.5 : 1,
        }}
      >
        {TaskName}
      </span>
      <div className="flex gap-3">
        <button
          onClick={onComplete}
          className="bg-green-500 w-20 h-10 rounded-lg text-white hover:bg-green-600 hover:scale-105 mx-3"
        >
          Done
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 w-20 h-10 rounded-lg text-white hover:bg-red-600 hover:scale-105 mx-3"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default Task;
