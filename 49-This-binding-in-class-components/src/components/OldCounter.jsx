import { Component } from "react";

class OldCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.timerId = null;
    // console.log("constructor");
  }

  // componentDidMount() {
  //   console.log('componentDidMount')

  //   // this.timerId = setInterval(() => {
  //   //   console.log('hi')
  //   // }, 1000)
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  //   // clearInterval(this.timerId)
  // }

  increaseCount() {
    console.log(this);
    this.setState({ count: this.state.count + 1 });
    // this.setState({ count: count + 1 });
  }

  render() {
    // console.log("render");
    const { name } = this.props;
    const { count } = this.state;
    return (
      <>
        <h1 id="counter-title" className="mt-4">
          {name}
        </h1>
        <div className="mt-6 flex items-center gap-4">
          <button
            className="rounded bg-blue-400 px-4 py-1"
            onClick={() => this.setState({ count: count - 1 })}
          >
            -
          </button>
          <h2>{count}</h2>
          <button
            className="rounded bg-blue-400 px-4 py-1"
            onClick={this.increaseCount.bind(this)}

            // arrow  function works fine
            // onClick={() => {
            //   console.log(this);
            //   this.setState({ count: count + 1 });
            // }}

            //normal function will not work
            // onClick={function () {
            //   console.log(this);
            //   this.setState({ count: count + 1 });
            // }}
          >
            +
          </button>
        </div>
      </>
    );
  }
}

export default OldCounter;
