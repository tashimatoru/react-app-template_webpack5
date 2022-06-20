import React from 'react';
import {Link} from "react-router-dom";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        Index
        <hr/>
        <p>
          <Link to="/hoge">Hoge</Link>
        </p>
      </>
    );
  }
};

// defaultProps
Index.defaultProps = {
};

export default Index;
