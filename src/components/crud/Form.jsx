import React from "react";
import { useState } from "react";

function Form({ onAdd }) {
  const [form, setForm] = useState({ name: "", age: "" });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
    onAdd(form);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        Name: <input onChange={changeHandler} type="text" name="name" />
        Age: <input onChange={changeHandler} type="number" name="age" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;