import React from 'react';
import {withRouter} from 'react-router';
import {Link} from "react-router-dom";

class Hoge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <React.Fragment>
        Hoge
        <hr/>
        <p>
          <Link to="/">Index</Link>
        </p>
      </React.Fragment>
    );
  }
};

// defaultProps
Hoge.defaultProps = {
};

export default withRouter(Hoge);
