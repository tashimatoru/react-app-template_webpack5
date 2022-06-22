import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

// parts
import JsxComponent from 'contents/sample/functional/jsx_component';

const FunctionalComponentJsx = (props) => {
  // state
  const [age, setAge] = useState(0);

  useEffect(() => {
    // mount
    console.log("(root)mount");

    // unmount
    return () => {
      console.log("(root)unmount");
    }
  }, []);

  // update
  useEffect(() => {
    console.log("(root)update");
  });

  // mount, update
  // Only when `age` is updated
  useEffect(() => {
    console.log("(root)mount & update(age)");
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

      <p>
        this.state.age = {age}
      </p>

      <JsxComponent
        // 年齢
        age={age}
      />

      <hr/>

      <p>
        <Link to="/">Index</Link>
      </p>
    </>
  );
};

// defaultProps
FunctionalComponentJsx.defaultProps = {
};

export default FunctionalComponentJsx;
