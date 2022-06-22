import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

// type: props
type Props = {
  age: bigint,
} & typeof defaultProps

// defaultProps
const defaultProps = {
  age: 1,
}

const FunctionalComponentTsx: React.VFC<Props> = (props) => {
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

FunctionalComponentTsx.defaultProps = defaultProps;
export default FunctionalComponentTsx;
