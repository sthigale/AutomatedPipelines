import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import RouterComponet from "./Routing";
function App() {
  return (
    <div className="custom-section">
      <div className="card">
        <div className="card-header text-center font-weight-bolder">
          <span style={{fontSize: "21px"}}> Fully Automated Pipelines</span>
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
                <Link to={`/Component/Target`}>
                  <strong>2.Target</strong>
                </Link>
              </li>
              <li className="col-sm-2 textSize">
                <Link to={`/Component/HistoricalSimilarities`}>
                  <strong> 3.Historical Similarities</strong>
                </Link>
              </li>
              <li
                className="col-sm-3 textSize
             "
              >
                <Link to={`/Component/ConfigureStage`}>
                  <strong> 4.Configure & Stage (Temp)</strong>
                </Link>
              </li>
              <li className="col-sm-2 textSize">
                <Link to={`/Component/ValidateAndProcess`}>
                  <strong> 5.Validate & Process</strong>
                </Link>
              </li>
            </ul>
          </div>
          <br></br>
          <div className="col-sm-12">
            <div className=" view-port-height">
              <RouterComponet></RouterComponet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
