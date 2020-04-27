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