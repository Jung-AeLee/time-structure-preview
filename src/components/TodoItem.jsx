
import { useState } from "react";
import classnames from "classnames";

/**
 * [Child Component] TodoItem: Handles rendering and editing logic for individual tasks.
 * - Manages local UI state for 'Editing Mode' triggered by double-clicking.
 */
export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  /**
   * Handle keyboard events during editing
   * - Enter: Saves the changes via parent's onEdit
   * - Escape: Reverts to original text and exits edit mode
   */
  const handleEdit = (e) => {
    if (e.key === "Enter") {
      onEdit(todo.id, text); // Execute parent's update function
      setEditing(false); // Exit editing mode
    } else if (e.key === "Escape") {
      setText(todo.text); // Revert to original text
      setEditing(false);
    }
  };

  return (
    <li
      className={classnames({
        completed: todo.completed,
        editing: editing,
      })}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 0",
        borderBottom: "1px solid #eee",
        textDecoration: todo.completed ? "line-through" : "none",
        color: todo.completed ? "#888" : "#000"
      }}
    >
      {editing ? (
        <input
          style={{ flex: 1 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleEdit}
          onBlur={() => setEditing(false)} // Close editing mode on blur
          autoFocus
        />
      ) : (
        <div className="view" style={{ display: "flex", width: "100%", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <label 
            onDoubleClick={() => setEditing(true)} 
            style={{ flex: 1, marginLeft: "10px", cursor: "pointer" }}
          >
            {todo.text}
          </label>
          <button 
            onClick={() => onDelete(todo.id)}
            style={{ marginLeft: "10px", cursor: "pointer", color: "red" }}
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
}
