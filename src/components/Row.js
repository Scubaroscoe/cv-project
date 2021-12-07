import React from 'react';

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.capitalize = this.capitalize.bind(this);
  }

  capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  render() {
    return (
      this.props.para ?
      <div className="row">
        <label htmlFor={this.props.identifier + "-input"}>{this.capitalize(this.props.identifier)}: </label>
        {this.props.required ?        
          <input value={this.props.val} id={this.props.identifier + "-text"}
            name={this.props.identifier} type={this.props.inputType}
            placeholder={this.props.inputPlaceholder}
            onChange={this.props.inputHandler} required />
          : <input value={this.props.val} id={this.props.identifier + "-text"}
            name={this.props.identifier} type={this.props.inputType}
            placeholder={this.props.inputPlaceholder}
            onChange={this.props.inputHandler} />
        }
      </div>
      : <div className="row">
        <p>{this.capitalize(this.props.identifier)}: {this.props.val}</p>
      </div>
    );
  }
}

Row.defaultProps = {
  inputType: "text",
  inputPlaceholder: "",
  required: false,
  val: "",
};

export default Row;