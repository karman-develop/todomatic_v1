import React from "react";

export const TodoItem = ({ item, onCheck }) => {
  const handleChange = () => {
    onCheck(item);
  };

  return (
    <>
      <label>
        <input type="checkbox" checked={item.done} onChange={handleChange} />
        {item.text}
      </label>
    </>
  );
};
