import AppleCounter from "./components/AppleCounter";
import Counter from "./components/Counter";

const App = ({ root }) => {
  return (
    <div>
      <Counter />
      <AppleCounter root={root} />
    </div>
  );
};

export default App;
