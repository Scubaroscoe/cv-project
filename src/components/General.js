import React from 'react';
import Row from './Row';
// import Overview from './Overview';

class General extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      !this.props.submitOn ?
      <div className="general">
        <h1 id="general-header">General Information</h1>
        <Row identifier="name" val={this.props.name}
          inputPlaceholder="First and Last name here" required={true} />
        <Row identifier="email" val={this.props.email}
          inputPlaceholder="Email address here" required={true} />
        <Row identifier="phone" val={this.props.phone}
          inputPlaceholder="(###)-###-####" />
        <Row identifier="address" val={this.props.address}
          inputPlaceholder="Address here" />
        <Row identifier="town" val={this.props.town} inputPlaceholder="Town" />
        <Row identifier="state" val={this.props.state} inputPlaceholder="State" />
      </div>
      : <div className="general">
        <h1 id="general-header">General Information</h1>
        <Row para={this.props.submitOn} identifier="name" val={this.props.name}
          inputPlaceholder="First and Last name here" required={true} />
        <Row para={this.props.submitOn} identifier="email" val={this.props.email}
          inputPlaceholder="Email address here" required={true} />
        <Row para={this.props.submitOn} identifier="phone" val={this.props.phone}
          inputPlaceholder="(###)-###-####" />
        <Row para={this.props.submitOn} identifier="address" val={this.props.address}
          inputPlaceholder="Address here" />
        <Row para={this.props.submitOn} identifier="town" val={this.props.town} inputPlaceholder="Town" />
        <Row para={this.props.submitOn} identifier="state" val={this.props.state} inputPlaceholder="State" />
      </div>
    );
  }
}

export default General;