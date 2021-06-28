import React from 'react';
import {withRouter} from 'react-router';
import {Link} from "react-router-dom";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        Index
        <hr/>
        <p>
          <Link to="/hoge">Hoge</Link>
        </p>
      </React.Fragment>
    );
  }
};

// defaultProps
Index.defaultProps = {
};

export default withRouter(Index);
