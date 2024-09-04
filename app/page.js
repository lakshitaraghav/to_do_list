"use client";
import React, { useState } from "react";

const Page = () => {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [Do, setDo] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setDo([...Do, { task, desc }]);
    settask("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...Do];
    copytask.splice(i, 1);
    setDo(copytask);
  };

  let renderTask = <h2 className="text-center">No Task Available</h2>;
  if (Do.length > 0) {
    renderTask = Do.map((t, i) => {
      return (
        <li
          key={i}
          className="flex flex-col items-center justify-between mb-5"
        >
          <div className="flex flex-col items-center">
            <h5 className="text-xl font-semibold">{t.task}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className=" text-white px-4 py-2 rounded font-bold mt-2"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className=" text-black p-3 text-5xl font-bold text-center">
        TO-DO-List
      </h1>
      <form onSubmit={submitHandler} className="mt-4 flex flex-col items-center">
        <input
          type="text"
          className="text-1xl text-center border-zinc-800 border-4 m-4 px-4 py-2"
          placeholder="Enter Task Here"
          value={task}
          onChange={(e) => {
            settask(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-1xl border-zinc-800 border-4 m-4 text-center px-4 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-1 text-3xl font-bold mt-4 mb-3">
          Add
        </button>
      </form>
      <hr />
      <div className="p-6 bg-slate-200 flex flex-col items-center mt-9">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
