import AppleCounter from "./components/AppleCounter";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <h1>Conditional Rendering</h1>
      <Counter counterName="Timer"></Counter>
      <AppleCounter />
    </div>
  );
};

export default App;
