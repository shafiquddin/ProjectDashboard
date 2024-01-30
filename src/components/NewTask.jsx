import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredText, setEnteredText] = useState("");

  const handleChangeText = (event) => {
    setEnteredText(event.target.value);
  };

  const HandleAddTask = () => {
    if (enteredText.trim() === "") {
      return;
    }
    onAdd(enteredText);
    setEnteredText("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChangeText}
        value={enteredText}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={HandleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}
