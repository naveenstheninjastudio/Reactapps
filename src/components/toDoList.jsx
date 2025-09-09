import "./toDoList.css";

export function ToDoListApp(props) {
  return (
    <div className="toDoTaskList">
      <div className="toDoTaskBorder">
        <div className="toDoTaskInput">
          <input
            type="checkbox"
            className="toDoCheckbox"
            checked={props.done}
            onChange={props.toggleTask}
          />
          <div className={`toDoTask ${props.done ? "done" : ""}`}>
            {props.task}
          </div>
        </div>
        <div className={`toDoDescription ${props.done ? "done" : ""}`}>
          {props.description}
        </div>
      </div>
    </div>
  );
}
