
import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions";
import { UserContext } from "./context/UserContext";
import { ThemeContext } from "./context/ThemeContext";

function UserCard() {
  const { user, login } = useContext(UserContext);

  return (
    <section className="card">
      <h2>User Context</h2>
      <p>Current User: {user}</p>
      <button onClick={login}>
        {user === "Guest" ? "Login as Student" : "Logout"}
      </button>
    </section>
  );
}

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <section className="card">
      <h2>Redux Counter</h2>
      <p className="count">{count}</p>
      <button onClick={() => dispatch(increment())}>
        Increment (+)
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement (-)
      </button>
    </section>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className="card">
      <h2>Theme Context</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </section>
  );
}

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`app ${theme}`}>
      <h1>Combined State Management</h1>
      <p>React Context API + Redux</p>

      <div className="cards">
        <UserCard />
        <Counter />
        <ThemeToggle />
      </div>
    </main>
  );
}

export default App;
