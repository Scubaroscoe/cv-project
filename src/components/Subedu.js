import React from 'react';
import Row from './Row';

export default class Subedu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="subedu">
        <h2>Education {this.props.subNum}</h2>
        <Row identifier="schoolname" inputPlaceholder="Full school name" />
        <Row identifier="domain" inputPlaceholder="Domain of study" />        
        <Row id={"edu-from-date-" + this.props.subNum} identifier="fromdate" inputPlaceholder="(MM-DD-YYYY)" />
        <Row id={"edu-to-date-" + this.props.subNum} identifier="todate" inputPlaceholder="(MM-DD-YYYY)" />                        
        <Row identifier="gpa" inputPlaceholder="0.0 - 4.0" />
      </div>
    );
  }
}