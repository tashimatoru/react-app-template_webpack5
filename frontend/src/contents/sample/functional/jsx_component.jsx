import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const FunctionalComponentJsx = (props) => {
  // props
  const {
    age,
    children,
    ...other
  } = props;

  useEffect(() => {
    // mount
    console.log("(component)mount");

    // unmount
    return () => {
      console.log("(component)unmount");
    }
  }, []);

  // update
  useEffect(() => {
    console.log("(component)update");
  });

  // mount, update
  // Only when `age` is updated
  useEffect(() => {
    console.log("(component)mount & update(age)");
  }, [age]);

  return (
    <>
      <p>
        JsxComponent.props.age = {age}
      </p>
    </>
  );
};

// defaultProps
FunctionalComponentJsx.defaultProps = {
  // 年齢
  age: 0,
};

export default FunctionalComponentJsx;
