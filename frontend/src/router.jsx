import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wrap from 'wrap';

const Index    = lazy(() => import('contents/index'));
const Error404 = lazy(() => import('contents/error/error404'));

const ClassComponentJsx = lazy(() => import('contents/sample/class component_jsx'));

const Router = props => {
  return (
    <BrowserRouter>
      <Wrap>
        <Suspense
          fallback={
            <div>now loading</div>
          }
        >
          <Routes>
            <Route
              path="/"
              element={<Index />}
            />

            <Route
              path="/sample/class_component_jsx"
              element={<ClassComponentJsx />}
            />

            <Route
              path={`/*`}
              element={<Error404 />}
            />
          </Routes>
        </Suspense>
      </Wrap>
    </BrowserRouter>
  );
};

// defaultProps
Router.defaultProps = {};

export default Router;
