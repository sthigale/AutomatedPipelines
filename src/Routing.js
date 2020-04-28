import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Source = lazy(() => import("./component/Source"));
const Target = lazy(() => import("./component/Target"));
const HistoricalSimilarities = lazy(() =>
  import("./component/HistoricalSimilarities")
);
const ConfigureStage = lazy(() => import("./component/ConfigureStage"));
const ValidateAndProcess = lazy(() => import("./component/ValidateAndProcess"));

function RouterComponet() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Source} />
        <Route exact path="/target" component={Target} />
        <Route
          path="/HistoricalSimilarities"
          component={HistoricalSimilarities}
        />
        <Route
          exact
          path="/ConfigureStage"
          component={ConfigureStage}
        />
        <Route
          path="/ValidateAndProcess"
          component={ValidateAndProcess}
        />
      </Switch>
    </Suspense>
  );
}
export default RouterComponet;
