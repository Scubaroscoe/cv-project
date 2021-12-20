import React, { useState } from 'react';


// class Row extends React.Component {
//   constructor(props) {
//     super(props);
//     this.capitalize = this.capitalize.bind(this);
//   }

//   capitalize(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }

//   render() {
//     return (
//       this.props.para ?
//       <div className="row">
//         <label htmlFor={this.props.identifier + "-input"}>{this.capitalize(this.props.identifier)}: </label>
//         {this.props.required ?        
//           <input value={this.props.val} id={this.props.identifier + "-text"}
//             name={this.props.identifier} type={this.props.inputType}
//             placeholder={this.props.inputPlaceholder}
//             onChange={this.props.inputHandler} required />
//           : <input value={this.props.val} id={this.props.identifier + "-text"}
//             name={this.props.identifier} type={this.props.inputType}
//             placeholder={this.props.inputPlaceholder}
//             onChange={this.props.inputHandler} />
//         }
//       </div>
//       : <div className="row">
//         <p>{this.capitalize(this.props.identifier)}: {this.props.val}</p>
//       </div>
//     );
//   }
// }

function Row(props) {

  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    props.para ?
    <div className="row">
      <label htmlFor={props.identifier + "-input"}>{capitalize(props.identifier)}: </label>
      {props.required ?        
        <input value={props.val} id={props.identifier + "-text"}
          name={props.identifier} type={props.inputType}
          placeholder={props.inputPlaceholder}
          onChange={props.inputHandler} required />
        : <input value={props.val} id={props.identifier + "-text"}
          name={props.identifier} type={props.inputType}
          placeholder={props.inputPlaceholder}
          onChange={props.inputHandler} />
      }
    </div>
    : <div className="row">
      <p>{capitalize(props.identifier)}: {props.val}</p>
    </div>
  );
}

// This works for both functional components and class components
Row.defaultProps = {
  inputType: "text",
  inputPlaceholder: "",
  required: false,
  val: "",
};

export default Row;