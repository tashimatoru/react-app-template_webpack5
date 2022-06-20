import React from 'react';
import {Link} from "react-router-dom";

class Hoge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        Hoge
        <hr/>
        <p>
          <Link to="/">Index</Link>
        </p>
      </>
    );
  }
};

// defaultProps
Hoge.defaultProps = {
};

export default Hoge;
