import React from "react";
import Multiselect from "react-widgets/lib/Multiselect";
import "react-widgets/dist/css/react-widgets.css";
class CreateMultiselect extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      value: [],
      options: this.props.options
    };
  }

  // handleCreate(name) {
  //   let { target, value } = this.state;

  //   let newOption = {
  //     name,
  //     id: target.length + 1
  //   };

  //   this.setState({
  //     value: [...value, newOption], // select new option
  //     target: [...target, newOption] // add new option to our dataset
  //   });
  // }

  setSelectedOption(value){
  this.setState({
    value
  });
  this.props.setSelectedOption(value);
  }

  render() {
    let { value, options } = this.state;

    return (
      <Multiselect
        data={options}
        value={value}
        allowCreate="onFilter"
        onCreate={name => this.props.handleCreate(name)}
        onChange={value => this.setSelectedOption(value)}
        textField="name"
        showCheckbox={true}
        placeholder="Choose"
      />
    );
  }
}

export default CreateMultiselect;