import React from 'react';
import {withRouter} from 'react-router';
import {Link} from "react-router-dom";

class Error404 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        Error404
        <hr/>
        <p>
          <Link to="/">Index</Link>
        </p>
        <p>
          <Link to="/hoge">Hoge</Link>
        </p>
      </React.Fragment>
    );
  }
};

// defaultProps
Error404.defaultProps = {
};

export default withRouter(Error404);
