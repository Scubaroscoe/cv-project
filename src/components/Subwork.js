import React from 'react';
import Row from './Row';

export default class Subwork extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="subwork">
        <h2>Work {this.props.subNum}</h2>
        <Row identifier="company" inputPlaceholder="Company name" />
        <Row identifier="position" inputPlaceholder="Title of position" />        
        <Row id={"work-from-date-" + this.props.subNum} identifier="fromdate" inputPlaceholder="(MM-DD-YYYY)" />
        <Row id={"work-to-date-" + this.props.subNum} identifier="todate" inputPlaceholder="(MM-DD-YYYY)" />                        
        <Row identifier="duties" inputType="text" inputPlaceholder="Enumerate job duties here" />
      </div>
    );
  }
}