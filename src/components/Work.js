import React, { useState } from 'react';
// import Subwork from './Subwork';
import Row from './Row';

// export default class Work extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() { 
//     return (
//       !props.submitOn ?
//       <div className="work">
//         <h1 id="work-header">Work</h1>
//         <Row identifier="company" val={props.company}
//           inputPlaceholder="Company name" required={true} />
//         <Row identifier="position" val={props.position}
//           inputPlaceholder="Title of position" required={true} />
//         <Row identifier="workfromdate" val={props.workfromdate}
//           inputPlaceholder="(MM-DD-YYYY)" />
//         <Row identifier="worktodate" val={props.worktodate}
//           inputPlaceholder="(MM-DD-YYYY)" />
//         <Row identifier="duties" val={props.duties} 
//           inputPlaceholder="Enumerate job duties here" />
//       </div>
//       : <div className="work">
//         <h1 id="work-header">Work</h1>
//         <Row para={props.submitOn} identifier="company" val={props.company}
//           inputPlaceholder="Company name" required={true} />
//         <Row para={props.submitOn} identifier="position" val={props.position}
//           inputPlaceholder="Title of position" required={true} />
//         <Row para={props.submitOn} identifier="workfromdate" val={props.workfromdate}
//           inputPlaceholder="(MM-DD-YYYY)" />
//         <Row para={props.submitOn} identifier="worktodate" val={props.worktodate}
//           inputPlaceholder="(MM-DD-YYYY)" />
//         <Row para={props.submitOn} identifier="duties" 
//           val={props.duties} inputPlaceholder="Enumerate job duties here" required={true} />
//       </div>
//     );
//   }
// }

export default function Work(props) {

  return (
    !props.submitOn ?
    <div className="work">
      <h1 id="work-header">Work</h1>
      <Row identifier="company" val={props.company}
        inputPlaceholder="Company name" required={true} />
      <Row identifier="position" val={props.position}
        inputPlaceholder="Title of position" required={true} />
      <Row identifier="workfromdate" val={props.workfromdate}
        inputPlaceholder="(MM-DD-YYYY)" />
      <Row identifier="worktodate" val={props.worktodate}
        inputPlaceholder="(MM-DD-YYYY)" />
      <Row identifier="duties" val={props.duties} 
        inputPlaceholder="Enumerate job duties here" />
    </div>
    : <div className="work">
      <h1 id="work-header">Work</h1>
      <Row para={props.submitOn} identifier="company" val={props.company}
        inputPlaceholder="Company name" required={true} />
      <Row para={props.submitOn} identifier="position" val={props.position}
        inputPlaceholder="Title of position" required={true} />
      <Row para={props.submitOn} identifier="workfromdate" val={props.workfromdate}
        inputPlaceholder="(MM-DD-YYYY)" />
      <Row para={props.submitOn} identifier="worktodate" val={props.worktodate}
        inputPlaceholder="(MM-DD-YYYY)" />
      <Row para={props.submitOn} identifier="duties" 
        val={props.duties} inputPlaceholder="Enumerate job duties here" required={true} />
    </div>
  );
}