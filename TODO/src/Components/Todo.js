import React, { useState } from "react";
import { addTodo, removeAllTodo, deleteTodo ,editTODO} from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import "./Todo.css";

function Todo() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  const list = useSelector((state) => state.todoReducer.list);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
            <h2>Todo List</h2>
          <div className="addItems">
            <input
                id="inputType"
              type="text"
              placeholder="Enter your name"
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            <button
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
          <div className="showItmes">
            {list.map((e) => {
              return (
                <div
                  className="eachItems"
                  style={{ display: "flex" }}
                  key={e.id}
                >
                  <h3>{e.data}</h3>
                  <button onClick={() => dispatch(deleteTodo(e.id))}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              );
            })}
          </div>
          <div className="btnAllDelete">
            <button onClick={()=>dispatch(editTODO())}> Edit</button>
              <button onClick={()=>dispatch(removeAllTodo())}>
              Clear ALL
              </button>
              </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
