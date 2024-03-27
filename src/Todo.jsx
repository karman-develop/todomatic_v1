import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import { Input } from "./Input";
import { Filter } from "./Filter";

export const Todo = () => {
  const getKey = () => Math.random().toString(32).substring(2);

  const [items, setItems] = useState([
    { key: getKey(), text: "Learn JavaScript", done: false },
    { key: getKey(), text: "Learn TypeScript", done: false },
    { key: getKey(), text: "Learn React", done: false },
  ]);
  const [filter, setFilter] = useState("ALL");

  const handleCheck = (checked) => {
    const newItems = items.map((item) => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };

  const handleAdd = (text) => {
    setItems([...items, { key: getKey(), text, done: false }]);
  };

  const handleFilter = (value) => {
    setFilter(value);
  };

  const displayItems = items.filter((item) => {
    if (filter === "ALL") return true;
    if (filter === "TODO") return !item.done;
    if (filter === "DONE") return item.done;
    return false;
  });

  return (
    <>
      <h1>Todo Matic</h1>
      <Input onAdd={handleAdd} />
      <Filter onChange={handleFilter} />
      {displayItems.map((item, index) => (
        <TodoItem key={index} item={item} onCheck={handleCheck} />
      ))}
      <div>{displayItems.length} 個</div>
    </>
  );
};
