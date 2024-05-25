import React, { useState } from "react";
import DeleteIcon from "./../assets/DeleteIcon.png";
import "./Todolist.css";
import { useSelector, useDispatch } from "react-redux";
import { toGetValue, ForDelete, ForDeleteAll } from "../store/ForCreateSlice";

function TodoLIst() {
  // this is for the get value
  const [forValue, setForValue] = useState("");

  // this is for the get value
  const [value, setvalue] = useState("");
  // this is usedispatch for the action triger
  const dispatch = useDispatch();

  // this is useSelector to show value
  const myValue = useSelector((state) => state.Todo.myState);

  // this is function for add to list button
  const HandleForAdd = () => {
    if (forValue) {
      dispatch(toGetValue({ id: Date.now(), text: forValue }));
      setForValue("");
      setvalue("");
    }
  };

  // this is function for delete all
  const handleDeleteAll = () => {
    dispatch(ForDeleteAll());
  };

  // this is for the onchage of input
  const handleOnchange = (e) => {
    setForValue(e.target.value);
    setvalue(e.target.value);
  };
  return (
    <>
      <div className="wrapper">
        <h1 className="title">ToDo Application</h1>
        <h4 className="subtitle">Type and Add</h4>
        <input
          type="text"
          className="for-input"
          placeholder="add new todo"
          onChange={handleOnchange}
          value={value}
        />
        <button className=" for-btn" onClick={HandleForAdd}>
          add tolist
        </button>

        {myValue.map((data) => (
          <div className="for-text mt-3" key={data.id}>
            <li className="for-li">
              {data.text}
              <div
                className="for-icon"
                onClick={() => dispatch(ForDelete(data.id))}
              >
                <img
                  src={DeleteIcon}
                  alt="delete icon"
                  className="img-fluid "
                />
              </div>
            </li>
          </div>
        ))}

        <hr style={{ color: "white" }} />
        {myValue.length > 1 && (
          <button className="clearAll-btn" onClick={handleDeleteAll}>
            clear all{" "}
          </button>
        )}
        <p style={{ color: "white", textAlign: "start" }} className="mt-2">
          developed by M.Riaz Ahmad ......
        </p>
      </div>
    </>
  );
}
export default TodoLIst;
