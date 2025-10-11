import { useState } from "react";

export default function Stringli() {
  const [currentName, setCurrentName] = useState("");
  const [nameList, setNameList] = useState([]);

  const handleBlur = (e) => {
    setCurrentName(e.target.value);
  };

  const handleSubmit = () => {
    setNameList([...nameList, currentName]); // Add to list
    setCurrentName(""); // Clear input if needed
  };

  return (
    <>
      <label>
        Name:{" "}
        <input type="text" value={currentName} onChange={handleBlur} />
      </label>
      <button onClick={handleSubmit}>Submit</button>

      <div>
        <p>Current Name: {currentName}</p>
      </div>

      <ul>
        {nameList.map((name, index) => (
          <li key={index}>Name {index + 1}: {name}</li>
        ))}
      </ul>
    </>
  );
}
