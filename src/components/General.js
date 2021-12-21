import React, { useState } from 'react';
import Row from './Row';
// import Overview from './Overview';

// class General extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       !props.submitOn ?
//       <div className="general">
//         <h1 id="general-header">General Information</h1>
//         <Row identifier="name" val={props.name}
//           inputPlaceholder="First and Last name here" required={true} />
//         <Row identifier="email" val={props.email}
//           inputPlaceholder="Email address here" required={true} />
//         <Row identifier="phone" val={props.phone}
//           inputPlaceholder="(###)-###-####" />
//         <Row identifier="address" val={props.address}
//           inputPlaceholder="Address here" />
//         <Row identifier="town" val={props.town} inputPlaceholder="Town" />
//         <Row identifier="state" val={props.state} inputPlaceholder="State" />
//       </div>
//       : <div className="general">
//         <h1 id="general-header">General Information</h1>
//         <Row para={props.submitOn} identifier="name" val={props.name}
//           inputPlaceholder="First and Last name here" required={true} />
//         <Row para={props.submitOn} identifier="email" val={props.email}
//           inputPlaceholder="Email address here" required={true} />
//         <Row para={props.submitOn} identifier="phone" val={props.phone}
//           inputPlaceholder="(###)-###-####" />
//         <Row para={props.submitOn} identifier="address" val={props.address}
//           inputPlaceholder="Address here" />
//         <Row para={props.submitOn} identifier="town" val={props.town} inputPlaceholder="Town" />
//         <Row para={props.submitOn} identifier="state" val={props.state} inputPlaceholder="State" />
//       </div>
//     );
//   }
// }

// export default General;

function General(props) {

  return (
    !props.submitOn ?
    <div className="general">
      <h1 id="general-header">General Information</h1>
      <Row identifier="name" val={props.name}
        inputPlaceholder="First and Last name here" required={true} />
      <Row identifier="email" val={props.email}
        inputPlaceholder="Email address here" required={true} />
      <Row identifier="phone" val={props.phone}
        inputPlaceholder="(###)-###-####" />
      <Row identifier="address" val={props.address}
        inputPlaceholder="Address here" />
      <Row identifier="town" val={props.town} inputPlaceholder="Town" />
      <Row identifier="state" val={props.state} inputPlaceholder="State" />
    </div>
    : <div className="general">
      <h1 id="general-header">General Information</h1>
      <Row para={props.submitOn} identifier="name" val={props.name}
        inputPlaceholder="First and Last name here" required={true} />
      <Row para={props.submitOn} identifier="email" val={props.email}
        inputPlaceholder="Email address here" required={true} />
      <Row para={props.submitOn} identifier="phone" val={props.phone}
        inputPlaceholder="(###)-###-####" />
      <Row para={props.submitOn} identifier="address" val={props.address}
        inputPlaceholder="Address here" />
      <Row para={props.submitOn} identifier="town" val={props.town} inputPlaceholder="Town" />
      <Row para={props.submitOn} identifier="state" val={props.state} inputPlaceholder="State" />
    </div>
  );
}

export default General;