import "./toDoList.css";

export function ToDoListApp(props) {
  return (
    <div className="toDoTaskList">
      <div className="toDoTaskBorder">
        <div className="toDoTaskInput">
          <input type="checkbox" className="toDoCheckbox" />
          <div className="toDoTask"> {props.task}</div>
        </div>
        <div className="toDoDescription">{props.description}</div>
      </div>
    </div>
  );
}
