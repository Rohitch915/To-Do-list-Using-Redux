import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      <header>
        <section className="title-section">
          <h1>TO DO LIST</h1>
        </section>
      </header>
      <main>
        <section className="todo-section">
          <AddTodoForm />
          <TodoList />
        </section>
      </main>
    </>
  );
};

export default App;
