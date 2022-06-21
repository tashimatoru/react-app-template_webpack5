import React from 'react';
import {Link} from "react-router-dom";

class ClassComponentJsx extends React.Component {
  constructor(props) {
    super(props);

    // state
    this.state = {
    };
  }

  /**
   * mount
   */
  componentDidMount() {
    console.log(`(component)mount`);
  }

  /**
   * update
   * @param prevProps
   * @param prevState
   */
  componentDidUpdate(prevProps, prevState) {
    console.log(`(component)update`, prevProps, prevState);
  }

  /**
   * unmount
   */
  componentWillUnmount() {
    console.log(`(component)unmount`);
  }

  render() {
    return (
      <>
        <p>
          JsxComponent.props.name = {this.props.age}
        </p>
      </>
    );
  }
};

// defaultProps
ClassComponentJsx.defaultProps = {
  // 年齢
  age: 0,
};

export default ClassComponentJsx;
