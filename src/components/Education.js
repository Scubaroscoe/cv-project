import React, { useState } from 'react';
// import Subedu from './Subedu';
import Row from './Row';

// class Education extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() { 
//     return (
//       !this.props.submitOn ?
//       <div className="education">
//         <h1 id="education-header">Education</h1>
//         <Row identifier="schoolname" val={this.props.schoolname}
//           inputPlaceholder="Full school name" required={true} />
//         <Row identifier="domain" val={this.props.domain}
//           inputPlaceholder="Domain of study" required={true} />
//         <Row identifier="edufromdate" val={this.props.edufromdate}
//           inputPlaceholder="(MM-DD-YYYY)" />
//         <Row identifier="edutodate" val={this.props.edutodate}
//           inputPlaceholder="(MM-DD-YYYY)" />
//         <Row identifier="gpa" val={this.props.gpa} inputPlaceholder="0.0 - 4.0" />
//         <Row identifier="edustate" val={this.props.edustat} inputPlaceholder="State" />
//       </div>
//       : <div className="education">
//         <h1 id="education-header">Education</h1>
//         <Row para={this.props.submitOn} identifier="schoolname" val={this.props.schoolname}
//           inputPlaceholder="Full school name" required={true} />
//         <Row para={this.props.submitOn} identifier="domain" val={this.props.domain}
//           inputPlaceholder="Domain of study" required={true} />
//         <Row para={this.props.submitOn} identifier="edufromdate" val={this.props.edufromdate}
//           inputPlaceholder="(MM-DD-YYYY)" />
//         <Row para={this.props.submitOn} identifier="edutodate" val={this.props.edutodate}
//           inputPlaceholder="(MM-DD-YYYY)" />
//         <Row para={this.props.submitOn} identifier="gpa" val={this.props.gpa} inputPlaceholder="0.0 - 4.0" required={true} />
//         <Row para={this.props.submitOn} identifier="edustate" val={this.props.edustat} inputPlaceholder="State" />
//       </div>
//     );
//   }
// }

function Education(props) {

  return (
    !props.submitOn ?
    <div className="education">
      <h1 id="education-header">Education</h1>
      <Row identifier="schoolname" val={props.schoolname}
        inputPlaceholder="Full school name" required={true} />
      <Row identifier="domain" val={props.domain}
        inputPlaceholder="Domain of study" required={true} />
      <Row identifier="edufromdate" val={props.edufromdate}
        inputPlaceholder="(MM-DD-YYYY)" />
      <Row identifier="edutodate" val={props.edutodate}
        inputPlaceholder="(MM-DD-YYYY)" />
      <Row identifier="gpa" val={props.gpa} inputPlaceholder="0.0 - 4.0" />
      <Row identifier="edustate" val={props.edustat} inputPlaceholder="State" />
    </div>
    : <div className="education">
      <h1 id="education-header">Education</h1>
      <Row para={props.submitOn} identifier="schoolname" val={props.schoolname}
        inputPlaceholder="Full school name" required={true} />
      <Row para={props.submitOn} identifier="domain" val={props.domain}
        inputPlaceholder="Domain of study" required={true} />
      <Row para={props.submitOn} identifier="edufromdate" val={props.edufromdate}
        inputPlaceholder="(MM-DD-YYYY)" />
      <Row para={props.submitOn} identifier="edutodate" val={props.edutodate}
        inputPlaceholder="(MM-DD-YYYY)" />
      <Row para={props.submitOn} identifier="gpa" val={props.gpa} inputPlaceholder="0.0 - 4.0" required={true} />
      <Row para={props.submitOn} identifier="edustate" val={props.edustat} inputPlaceholder="State" />
    </div>
  );
}

export default Education;