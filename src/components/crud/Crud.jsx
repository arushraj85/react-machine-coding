import React from "react";
import { useState } from "react";
import Form from "./Form";

function Crud() {
  let persons = [
    {
      id: 1,
      name: "John",
      age: 21,
    },
    {
      id: 2,
      name: "Sam",
      age: 23,
    },
  ];

  const [data, setData] = useState(persons);

  const onAdd = (form) => {
    setData([...data, { id: data.length + 1, ...form }]);
  };

  const deleteHandler = (id) => {
    console.log(id);
    let filter = data.filter((d) => d.id !== id);
    console.log(filter);
    setData(filter);
  };
  return (
    <div>
      <Form onAdd={onAdd} />
      {data.map((d, index) => {
        return (
          <div key={d.id}>
            <p>Id : {d.id}</p>
            <p>Name: {d.name}</p>
            <p>Age: {d.age}</p>
            <button onClick={() => deleteHandler(d.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default Crud;