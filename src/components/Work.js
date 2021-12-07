import React from 'react';
// import Subwork from './Subwork';
import Row from './Row';

export default class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      !this.props.submitOn ?
      <div className="work">
        <h1 id="work-header">Work</h1>
        <Row identifier="company" val={this.props.company}
          inputPlaceholder="Company name" required={true} />
        <Row identifier="position" val={this.props.position}
          inputPlaceholder="Title of position" required={true} />
        <Row identifier="workfromdate" val={this.props.workfromdate}
          inputPlaceholder="(MM-DD-YYYY)" />
        <Row identifier="worktodate" val={this.props.worktodate}
          inputPlaceholder="(MM-DD-YYYY)" />
        <Row identifier="duties" val={this.props.duties} 
          inputPlaceholder="Enumerate job duties here" />
      </div>
      : <div className="work">
        <h1 id="work-header">Work</h1>
        <Row para={this.props.submitOn} identifier="company" val={this.props.company}
          inputPlaceholder="Company name" required={true} />
        <Row para={this.props.submitOn} identifier="position" val={this.props.position}
          inputPlaceholder="Title of position" required={true} />
        <Row para={this.props.submitOn} identifier="workfromdate" val={this.props.workfromdate}
          inputPlaceholder="(MM-DD-YYYY)" />
        <Row para={this.props.submitOn} identifier="worktodate" val={this.props.worktodate}
          inputPlaceholder="(MM-DD-YYYY)" />
        <Row para={this.props.submitOn} identifier="duties" 
          val={this.props.duties} inputPlaceholder="Enumerate job duties here" required={true} />
      </div>
    );
  }
}