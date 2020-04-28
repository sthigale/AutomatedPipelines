import React, { Suspense} from "react";
import {
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";

class AsyncRouteComponent extends React.Component {
 
  render() {
    return (
      <this.props.route.component
        {...this.props}
        data={this.props.route.data}
        routeConfig={this.props.route.routeConfig}
      />
    );
    
  }
}

const RouterOutletSwitch = ({ routeConfig }) => {
  
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      {routeConfig.routes &&
        routeConfig.routes.map((route, i) => {
       console.log("path", route);

          return (
            <Route
              key={path + i}
              path={(path + route.path).replace(/\/\//g, "/")}
              exact={route.exact}
              render={props => 
                <AsyncRouteComponent {...props} route={route} />}
            />
          );
        })}
    </Switch>
  );
};

export const RouterOutlet = ({ routeConfig }) => (
  <div>
    {routeConfig.fallback && (
      <Suspense fallback={routeConfig.fallback}>
        <RouterOutletSwitch routeConfig={routeConfig} />
      </Suspense>
    )}

    {!routeConfig.fallback && <RouterOutletSwitch routeConfig={routeConfig} />}
  </div>
);

export default RouterOutlet;
