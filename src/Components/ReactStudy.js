import { useEffect, useState } from "react";
// import axios from "axios";
import PrediateAge from "./PrediateAge";
import GenerateAnExcuse from "./GenerateAnExcuse";
import tuse from "../images/Iam_Tuse.jpg";
import employee from "../images/employees.png";
import AddToDo from "./AddTodo";
import TaskList from "./TaskList";

export default function ReactStudy() {
  let nextId = 3;
  const initialTodos = [
    { id: 0, title: "Buy Milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew Tea", done: false },
  ];
  //Entry Point
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    //Logic
    setTodos((prevState) => {
      return [
        ...prevState,
        {
          id: nextId++,
          title: title,
          done: false,
        },
      ];
    });
  }

  function handleChangeTodo(nextTodo) {
    //Logic
    setTodos((prevState) => {
      prevState.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      });
    });
  }

  function handleDeleteTodo(todoId) {
    //Logic
    setTodos((prevState) => {
      prevState.filter((x) => x.id !== todoId);
    });
  }
  // function handleAddTask(task) {
  //   var newTask = task;
  //   if (newTask == undefined || newTask == "") {
  //     setTask((prevState) => {
  //       return {
  //         ...prevState,
  //         newTask,
  //       };
  //     });
  //   } else {
  //     alert("Congratulation: New Task added successfully " + newTask);
  //   }
  // }

  // function handleChangeFirstName(event) {
  //   setUser((prevState) => {
  //     return { ...prevState, firstName: event.target.value };
  //   });
  // }

  // const handleCountWithOutPrevValuesBtnInfo = () => {
  //   setMyCounter(myCounter + 1);
  // };

  // const handleCountWithOutPrevValuesBtnSuccess = () => {
  //   setMyCounter(myCounter + 1);
  // };

  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data.fact);
  //   });
  // const [catfact, setCatFact] = useState("");

  // function handleGenerateCatFact() {
  //   axios.get("https://catfact.ninja/fact").then((res) => {
  //     setCatFact(res.data.fact);
  //   });
  // }
  // useEffect(() => {
  //   handleGenerateCatFact();
  // }, []);
  return (
    <>
      <div className="row border py-3 w-100">
        <div className="col-12 col-lg-12 col-md-12">
          <div className="text-end text-success h3">
            Todos Simple Application
            <hr />
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <TaskList
                todos={todos}
                onChange={handleChangeTodo}
                onDelete={handleDeleteTodo}
              />
            </div>
            <div className="col-12 col-md-12 col-lg-12">
              <AddToDo onAddTodo={handleAddTodo} />
            </div>
          </div>
        </div>
      </div>

      {/* <GenerateAnExcuse /> */}
      {/* <div className="border mt-5">
        <div className="text-center h2">
          User Information
          <hr />
        </div>
        <div className="row text-center mb-4 p-4 m-1">
          <div className="row">
            <div className="col-12 col-md-12 col-lg- mt-1">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-12">
                  <button
                    className="btn btn-primary form-control"
                    onClick={handleGenerateCatFact}
                  >
                    Generate Cat Fact
                  </button>
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <p>{catfact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center mb-4">
          <div className="col-12 col-md-12 col-lg-12">Age: </div>
          <div className="col-12 col-md-12 col-lg-12">Name: </div>
          <div className="col-12 col-md-12 col-lg-12">Third</div>
        </div>
      </div> */}
    </>
  );
}
