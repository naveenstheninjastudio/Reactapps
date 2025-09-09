import { useState } from "react";
import { ToDoListApp } from "../components/toDoList";
import { v4 as uuidv4 } from "uuid";

export function ToDoListAppPage() {
  const [tasks, setTask] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskdescription, setTaskdescription] = useState("");
  const clickHandler = () => {
    setTask([
      ...tasks,
      {
        task: taskName,
        description: taskdescription,
        done: false,
        id: uuidv4(),
      },
    ]);
    setTaskName("");
    setTaskdescription("");
  };
  const toggleTask = (id) => {
    setTask(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };
  return (
    <div className="toDoListAppContainer">
      <div className="toDoGradient1"></div>
      <div className="toDoGradient2"></div>
      <div className="toDoListApp">
        <div className="toDoTitle">my list</div>
        <div className="toDoTaskListContainer">
          {tasks.length === 0 ? (
            <div className="emptyTaskList">No tasks yet!!</div>
          ) : (
            tasks.map((item) => (
              <ToDoListApp
                key={item?.id}
                {...item}
                toggleTask={() => toggleTask(item.id)}
              />
            ))
          )}
        </div>
        <form className="toDoInputForm">
          <input
            type="text"
            id="taskInput"
            placeholder="task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <textarea
            id="toDoDescriptionInput"
            placeholder="description"
            value={taskdescription}
            onChange={(e) => setTaskdescription(e.target.value)}
          ></textarea>
          <button id="addTaskButton" type="button" onClick={clickHandler}>
            add task
          </button>
        </form>
      </div>
    </div>
  );
}
