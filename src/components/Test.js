import React from 'react';
import Row from './Row';
// import Overview from './Overview';

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="general">
        <h1 id="general-header">Test Header</h1>
        <Row identifier="name" val={this.props.name}
          inputPlaceholder="First and Last name here"
          inputHandler={this.props.handleName} required={true} />
      </div>
    );
  }
}

export default Test;