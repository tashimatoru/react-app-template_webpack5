import React from 'react';
import {Link} from "react-router-dom";

class ClassComponentJsx extends React.Component {
  constructor(props) {
    super(props);

    // state
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
          Class Component Jsx
        </p>

        <hr/>

        <p>
          this.props.name = {this.props.name}
        </p>

        <hr/>

        <p>
          this.state.age = {this.state.age}
        </p>

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
ClassComponentJsx.defaultProps = {
  // 名前
  name: "デフォルトの名前(props)",
};

export default ClassComponentJsx;
