import React, { lazy } from "react";


const Source = lazy(() => import("./component/Source"), {
  fallback: <div>Loading...</div>
});

const Target = lazy(() => import("./component/Target"), {
  fallback: <div>Loading...</div>
});

const HistoricalSimilarities = lazy(() =>
  import("./component/HistoricalSimilarities")
, {
  fallback: <div>Loading...</div>
});

const ConfigureStage = lazy(() => import("./component/ConfigureStage"), {
  fallback: <div>Loading...</div>
});

const ValidateAndProcess = lazy(() => import("./component/ValidateAndProcess"), {
  fallback: <div>Loading...</div>
});
const routeConfig = {
  fallback: <div>Loading...</div>,
  routes: [
    {
      path: "/",
      exact: true,
      component: Source,
      name: "Source"
    },
    {
      path: "/target",
      component: Target,
      name: "Target"
    },
    {
      path: "/historicalSimilarities",
      component: HistoricalSimilarities,
      name: "HistoricalSimilarities"
    },
    {
      path: "/configureStage",
      component: ConfigureStage,
      name: "ConfigureStage"
    },
    {
      path: "/validateAndProcess",
      component: ValidateAndProcess,
      name: "ValidateAndProcess"
    }
  ]
};

export default routeConfig;

