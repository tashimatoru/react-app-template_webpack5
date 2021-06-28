import React from 'react';
import {withRouter} from 'react-router';

const Wrap = props => {
  return (
    <React.Fragment>
      {props?.children}
    </React.Fragment>
  )
}

// defaultProps
Wrap.defaultProps = {
};

export default withRouter(Wrap);
