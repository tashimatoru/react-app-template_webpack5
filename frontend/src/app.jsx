import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'router';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <React.Fragment>
        <Router/>
      </React.Fragment>
    );
  }
}

// defaultProps
App.defaultProps = {
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
