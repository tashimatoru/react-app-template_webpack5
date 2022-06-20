import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const FunctionalComponentJsx = (props) => {
  // props
  const {
    name,
    children,
    ...other
  } = props;

  // state
  const [age, setAge] = useState(0);

  useEffect(() => {
    // mount
    console.log("mount");

    // unmount
    return () => {
      console.log("unmount");
    }
  }, []);

  // update
  useEffect(() => {
    console.log("update");
  });

  // mount, update
  // Only when `age` is updated
  useEffect(() => {
    console.log("mount(age)");
  }, [age]);

  /**
   * 年齢をデクリメント
   */
  const handleDecrementAge = () => {
    setAge(age - 1);
  }

  /**
   * 年齢をインクリメント
   */
  const handleIncrementAge = () => {
    setAge(age + 1);
  }

  /**
   * 年齢をリセット
   */
  const handleResetAge = () => {
    setAge(0);
  }

  return (
    <>
      <p>
        Functional Component Jsx
      </p>

      <hr/>

      <p>
        this.props.name = {name}
      </p>

      <hr/>

      <p>
        this.state.age = {age}
      </p>

      <hr/>

      <button
        onClick={() => {
          handleDecrementAge();
        }}
      >
        -1
      </button>

      <button
        onClick={() => {
          handleIncrementAge();
        }}
      >
        +1
      </button>

      <button
        onClick={() => {
          handleResetAge();
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
};

// defaultProps
FunctionalComponentJsx.defaultProps = {
  // 名前
  name: "デフォルトの名前(props)",
};

export default FunctionalComponentJsx;
