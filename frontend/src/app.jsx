import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from 'router';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <>
        <Router/>
      </>
    );
  }
}

const container = document.getElementById('root');
// createRoot(container!) if you use TypeScript
const root = createRoot(container);
root.render(<App tab="home" />);
