import React from "react";
import CreateMultiselect from "./ReusableComponent/React-widget";
import Table from "./ReusableComponent/TableIndex";

const {
  Target,
  Source,
  tableData
} = require("../component/Data/constantData.json");

class ConfigureStage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: [],
      selectedOption1: null,
      value: [],
      target: Target,
      Source:Source
    };
  }

  getSelectedTargetValue = id => {
    this.setState({
      selectedOption: id.name
    });
  };
  setSelected(value) {
    this.setState({
      selectedOption: value
    });
  }

  handleCreate(name) {
    let { options, value } = this.state;

    let newOption = {
      name,
      id: options.length + 1
    };

    this.setState({
      value: [...value, newOption], // select new option
      target: [...options, newOption] // add new option to our dataset
    });
  }
  setSelectedOption(value){
    console.log(value);
  }
  
  
  render() {
    return (
      <div >
        <div className="row">
          <div className="col-sm-3 reactSelect">
            <label>Target 0/3</label>
            <i className="fa fa-eye" style={{ marginLeft: "141px" }}></i>
            <CreateMultiselect
              options={this.state.target}
              value={this.state.value}
              handleCreate={this.handleCreate}
              setSelectedOption={this.setSelectedOption}
            ></CreateMultiselect>
          </div>
          <div className="col-sm-3 reactSelect">
            <label>Source(10) </label>
            <i className="fa fa-eye" style={{ marginLeft: "143px" }}></i>

            <CreateMultiselect
              options={this.state.Source}
              value={this.state.value}
              handleCreate={this.handleCreate}
              setSelectedOption={this.setSelectedOption}
            ></CreateMultiselect>
          </div>
          <div className="col-sm-3 ">
            <label>Target CDM Total </label>

            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>28</td>
                  <td>5</td>
                  <td>28</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-3">
            <label>Mapped Auto Manual Unmap</label>

            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>18</td>
                  <td>10</td>
                  <td>8</td>
                  <td>8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br></br>
        <div>
          <label>Field Mappings</label>
          <Table Tabledata={tableData}></Table>
        </div>
      </div>
    );
  }
}
export default ConfigureStage;
