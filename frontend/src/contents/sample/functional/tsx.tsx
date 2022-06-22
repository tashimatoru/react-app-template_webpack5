import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

// parts
import TsxComponent from 'contents/sample/functional/tsx_component';

// JSX.Element
const FunctionalComponentTsx = (props) => {
  // state
  const [age, setAge] = useState<bigint>(0);
  const [isHoge, setIsHoge] = useState<boolean>(true);

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

  const handleChangeIsHoge = (value: boolean) => {
    setIsHoge(value);
  }

  return (
    <>
      <p>
        Functional Component Tsx
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

      <TsxComponent
        // 年齢
        age={age}
      />

      <hr/>

      <input
        type="checkbox"
        checked={isHoge}
        onChange={(e) => {
          handleChangeIsHoge(e.target.checked);
        }}
      />

      (boolean)state.isHoge = {String(isHoge)}

      <hr/>

      <p>
        <Link to="/">Index</Link>
      </p>
    </>
  )
}

export default FunctionalComponentTsx;
