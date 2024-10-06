import { Component } from "react";

class ClassCounter extends Component {
  // to use states in class components we use constructor method
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    // console.log(this.props.name);
    const { name } = this.props;
    return (
      <>
        <h1 className="m-4 bg-gray-400 text-center font-bold">Class Counter</h1>
        <div className="flex flex-col items-center">
          <h2 className="font-bold">{name}</h2>
          <h2 className="  font-bold">{this.state.count}</h2>
          <button
            className="cursor-pointer rounded border border-gray-300 bg-gray-400 px-2 py-1 font-bold text-black"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Click
          </button>
        </div>
      </>
    );
  }
}

export default ClassCounter;
