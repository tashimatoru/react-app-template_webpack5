import React from 'react';
import {Link} from "react-router-dom";

// parts
import JsxComponent from 'contents/sample/class/jsx_component';

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
    console.log(`(root)mount`);
  }

  /**
   * update
   * @param prevProps
   * @param prevState
   */
  componentDidUpdate(prevProps, prevState) {
    console.log(`(root)update`, prevProps, prevState);
  }

  /**
   * unmount
   */
  componentWillUnmount() {
    console.log(`(root)unmount`);
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

        <p>
          this.state.age = {this.state.age}
        </p>

        <JsxComponent
          // 年齢
          age={this.state.age}
        />

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
};

export default ClassComponentJsx;
