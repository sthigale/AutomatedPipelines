import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import routeConfig from "./Routing";
import RouterOutlet from "./RouterOutlet";
function App() {
  return (
    <div className="custom-section">
      <div className="card">
        <div className="card-header text-center font-weight-bolder">
          <span style={{ fontSize: "21px" }}> Fully Automated Pipelines</span>
        </div>
        <div className="card-body">
          <div
            className="col-sm-12 
            "
          >
            <ul className="nav nav-tabs ">
              <li className="col-sm-2 textSize">
                <Link to={`/`}>
                  <strong> 1.Source</strong>
                </Link>
              </li>
              <li className="col-sm-2 textSize">
                <Link to={`/target`}>
                  <strong>2.Target</strong>
                </Link>
              </li>
              <li className="col-sm-2 textSize">
                <Link to={`/historicalSimilarities`}>
                  <strong> 3.Historical Similarities</strong>
                </Link>
              </li>
              <li
                className="col-sm-3 textSize
             "
              >
                <Link to={`/configureStage`}>
                  <strong> 4.Configure & Stage (Temp)</strong>
                </Link>
              </li>
              <li className="col-sm-2 textSize">
                <Link to={`/validateAndProcess`}>
                  <strong> 5.Validate & Process</strong>
                </Link>
              </li>
            </ul>
          </div>
          <br></br>
          <div className="col-sm-12">
            <div className=" view-port-height">
              <RouterOutlet routeConfig={routeConfig}></RouterOutlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
