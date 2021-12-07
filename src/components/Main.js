import React from 'react';
import General from './General';
import Education from './Education';
import Work from './Work';
import Test from './Test';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitOn: true,
      name: '',
      email: '',
      phone: '',
      address: '',
      town: '',
      state: '',
      schoolname: '',
      domain: '',
      edufromdate: '',
      edutodate: '',
      edustate: '',
      gpa: '',
      company: '',
      position: '',
      workfromdate: '',
      worktodate: '',
      duties: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleName = this.handleName.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    this.setState(prevState => ({
      submitOn: !(prevState.submitOn),
    }));
    console.log(`state of name right now is: ${this.state.name}`)
    console.log(`state of email right now is: ${this.state.email}`)
    console.log(`state of phone right now is: ${this.state.phone}`)
    console.log(`state of address right now is: ${this.state.address}`)
    console.log(`state of town right now is: ${this.state.town}`)
    console.log(`state of state right now is: ${this.state.state}`)    
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      // <div>
      this.state.submitOn ?
      <form onChange={this.handleChange}>
        {/* <Test name={this.state.name}></Test>         */}
        <General submitOn={this.state.submitOn} name={this.state.name} email={this.state.email}
          phone={this.state.phone} address={this.state.address}
          town={this.state.town} state={this.state.state}></General>
        <Education submitOn={this.state.submitOn} 
          schoolname={this.state.schoolname} domain={this.state.domain} 
          edufromdate={this.state.edufromdate} edutodate={this.state.edutodate} 
          edustat={this.state.edustate} gpa={this.state.gpa}></Education>
        <Work submitOn={this.state.submitOn} company={this.state.company} 
          position={this.state.position} workfromdate={this.state.workfromdate} 
          worktodate={this.state.worktodate} duties={this.state.duties}></Work>
        <input type="submit" disabled={!this.state.submitOn} onClick={this.handleSubmit} value="Submit"/>        
      </form>
      : <div>
        <General submitOn={this.state.submitOn} name={this.state.name} email={this.state.email}
          phone={this.state.phone} address={this.state.address}
          town={this.state.town} state={this.state.state}></General>
        <Education submitOn={this.state.submitOn} 
          schoolname={this.state.schoolname} domain={this.state.domain} 
          edufromdate={this.state.edufromdate} edutodate={this.state.edutodate} 
          edustat={this.state.edustate} gpa={this.state.gpa} ></Education>
        <Work submitOn={this.state.submitOn} company={this.state.company} 
          position={this.state.position} workfromdate={this.state.workfromdate} 
          worktodate={this.state.worktodate} duties={this.state.duties}></Work>  
        <button disabled={this.state.submitOn} onClick={this.handleSubmit}>Edit</button>    
      </div>
    );
  }
}