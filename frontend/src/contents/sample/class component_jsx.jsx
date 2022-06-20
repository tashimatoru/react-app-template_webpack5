import React from 'react';
import {Link} from "react-router-dom";

class ReactClassComponentJsx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 年齢
      age: 0,
    };
  }

  /**
   * mount
   */
  componentDidMount() {
    console.log(`componentDidMount`);
  }

  /**
   * update
   * @param prevProps
   * @param prevState
   */
  componentDidUpdate(prevProps, prevState) {
    console.log(`componentDidUpdate`, prevProps, prevState);
  }

  /**
   * unmount
   */
  componentWillUnmount() {
    console.log(`componentWillUnmount`);
  }

  /**
   * 年齢をデクリメント
   */
  handleDecrementAge() {
    this.setState({
      age: (this.state.age - 1),
    })
  }

  /**
   * 年齢をインクリメント
   */
  handleIncrementAge() {
    this.setState({
      age: (this.state.age + 1),
    })
  }

  /**
   * 年齢をリセット
   */
  handleResetAge() {
    this.setState({
      age: 0,
    })
  }

  render() {
    return (
      <>
        <p>
          this.props.name = {this.props.name}
        </p>

        <hr/>

        <p>
          this.state.age = {this.state.age}
        </p>

        <hr/>

        <button
          onClick={() => {
            this.handleDecrementAge();
          }}
        >
          -1
        </button>

        <button
          onClick={() => {
            this.handleIncrementAge();
          }}
        >
          +1
        </button>

        <button
          onClick={() => {
            this.handleResetAge();
          }}
        >
          reset
        </button>

        <hr/>
        <p>
          <Link to="/">Index</Link>
        </p>
      </>
    );
  }
};

// defaultProps
ReactClassComponentJsx.defaultProps = {
  // 名前
  name: "デフォルトの名前(props)",
};

export default ReactClassComponentJsx;
