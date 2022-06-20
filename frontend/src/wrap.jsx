import React from 'react';

const Wrap = props => {
  return (
    <>
      {props?.children}
    </>
  )
}

// defaultProps
Wrap.defaultProps = {
};

export default Wrap;
