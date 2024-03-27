import React from "react";

export const Filter = ({ onChange }) => {
  const handleClick = (key) => {
    onChange(key);
  };

  return (
    <div>
      <div onClick={() => handleClick("ALL")}>All</div>
      <div onClick={() => handleClick("TODO")}>Todo</div>
      <div onClick={() => handleClick("DONE")}>Done</div>
    </div>
  );
};
