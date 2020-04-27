import React from "react";
import Source from "./component/Source";
import Target from "./component/Target";
import HistoricalSimilarities from './component/HistoricalSimilarities'
import ConfigureStage from "./component/ConfigureStage";
import ValidateAndProcess from "./component/ValidateAndProcess";
import { Route, Switch } from "react-router-dom";
function RouterComponet() {
  return (
    <Switch>
      <Route exact path="/" component={Source} />
      <Route exact path="/Component/Target" component={Target} />
      <Route path="/component/HistoricalSimilarities" component={HistoricalSimilarities} />
      <Route exact path="/Component/ConfigureStage" component={ConfigureStage} />
      <Route path="/component/ValidateAndProcess" component={ValidateAndProcess} />
    </Switch>
  );
}
export default RouterComponet;
