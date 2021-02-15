import "./App.css";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

function App() {
  let name = "Ali";
  let age = 15;
  let isMarried = true;
  let essmi = "Esra";
  const alertMe = () => {
    alert("Hello from workshop");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from workshop</h1>
        <Child1 name={name} age={age} mar={isMarried} alertMe={alertMe} />
        <Child2 essmi={essmi} />
      </header>
    </div>
  );
}

export default App;
