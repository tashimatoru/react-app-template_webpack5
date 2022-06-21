import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wrap from 'wrap';

const Index    = lazy(() => import('contents/index'));
const Error404 = lazy(() => import('contents/error/error404'));

const Sample_Class_Jsx      = lazy(() => import('contents/sample/class/jsx'));
const Sample_Functional_Jsx = lazy(() => import('contents/sample/functional/jsx'));


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
              path="/sample/class/jsx"
              element={<Sample_Class_Jsx />}
            />

            <Route
              path="/sample/functional/jsx"
              element={<Sample_Functional_Jsx />}
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
