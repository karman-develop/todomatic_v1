import React, { useState } from "react";

export const Input = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      onAdd(text);
      setText("");
    }
  };

  return (
    <div>
      <input value={text} onChange={handleChange} onKeyDown={handleKey} />
    </div>
  );
};
