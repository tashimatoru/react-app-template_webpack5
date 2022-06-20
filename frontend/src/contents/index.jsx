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
          <Link to="/hoge">404</Link>
        </p>
        <p>
          <Link to="/sample/class_component_jsx">Class Component JSX</Link>
        </p>
        <p>
          <Link to="/sample/functional_component_jsx">Functional Component JSX</Link>
        </p>
      </>
    );
  }
};

// defaultProps
Index.defaultProps = {
};

export default Index;
