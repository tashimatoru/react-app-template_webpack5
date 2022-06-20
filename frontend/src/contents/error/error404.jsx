import React from 'react';
import {Link} from "react-router-dom";

class Error404 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        Error404
        <hr/>
        <p>
          <Link to="/">Index</Link>
        </p>
        <p>
          <Link to="/hoge">Hoge</Link>
        </p>
      </>
    );
  }
};

// defaultProps
Error404.defaultProps = {
};

export default Error404;
