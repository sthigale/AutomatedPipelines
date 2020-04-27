import React, { Suspense, lazy } from "react";
// function RouterComponet() {
//   return (
//     <Switch>
//       <Route exact path="/" component={Source} />
//       <Route exact path="/Component/Target" component={Target} />
//       <Route path="/component/HistoricalSimilarities" component={HistoricalSimilarities} />
//       <Route exact path="/Component/ConfigureStage" component={ConfigureStage} />
//       <Route path="/component/ValidateAndProcess" component={ValidateAndProcess} />
//     </Switch>
//   );
// }
// export default RouterComponet;


const routeConfig = {
  fallback: <div>Loading...</div>,
  routes: [
    {
      path: "/",
      exact: true,
      component: lazy(() => import("./component/Source"))
    },
    {
      path: "/target",
      component: lazy(() => import("./component/Target"))
    },
    {
      path: "/historicalSimilarities",
      component: lazy(() => import("./component/HistoricalSimilarities"))
    },
    {
      path: "/configureStage",
      component: lazy(() => import("./component/ConfigureStage"))
    },
    {
      path: "/validateAndProcess",
      component: lazy(() => import("./component/ValidateAndProcess"))
    }
  ]
};

export default routeConfig;