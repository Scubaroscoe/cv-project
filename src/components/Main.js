import React, { useEffect, useState } from 'react';
import General from './General';
import Education from './Education';
import Work from './Work';
import Test from './Test';

// export default class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     = {
//       submitOn: true,
//       name: '',
//       email: '',
//       phone: '',
//       address: '',
//       town: '',
//       state: '',
//       schoolname: '',
//       domain: '',
//       edufromdate: '',
//       edutodate: '',
//       edustate: '',
//       gpa: '',
//       company: '',
//       position: '',
//       workfromdate: '',
//       worktodate: '',
//       duties: '',
//     }
//     this.handleSubmit = this.handleSubmit.bind(this);
//     // this.handleName = this.handleName.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleSubmit() {
//     this.setState(prevState => ({
//       submitOn: !(prevState.submitOn),
//     }));
//     console.log(`state of name right now is: ${name}`)
//     console.log(`state of email right now is: ${email}`)
//     console.log(`state of phone right now is: ${phone}`)
//     console.log(`state of address right now is: ${address}`)
//     console.log(`state of town right now is: ${town}`)
//     console.log(`state of state right now is: ${state}`)    
//   }

//   handleChange(event) {
//     this.setState({ [event.target.name]: event.target.value });
//   }

//   render() {
//     return (
//       // <div>
//       submitOn ?
//       <form onChange={this.handleChange}>
//         {/* <Test name={name}></Test>         */}
//         <General submitOn={submitOn} name={name} email={email}
//           phone={phone} address={address}
//           town={town} state={state}></General>
//         <Education submitOn={submitOn} 
//           schoolname={schoolname} domain={domain} 
//           edufromdate={edufromdate} edutodate={edutodate} 
//           edustat={edustate} gpa={gpa}></Education>
//         <Work submitOn={submitOn} company={company} 
//           position={position} workfromdate={workfromdate} 
//           worktodate={worktodate} duties={duties}></Work>
//         <input type="submit" disabled={!submitOn} onClick={this.handleSubmit} value="Submit"/>        
//       </form>
//       : <div>
//         <General submitOn={submitOn} name={name} email={email}
//           phone={phone} address={address}
//           town={town} state={state}></General>
//         <Education submitOn={submitOn} 
//           schoolname={schoolname} domain={domain} 
//           edufromdate={edufromdate} edutodate={edutodate} 
//           edustat={edustate} gpa={gpa} ></Education>
//         <Work submitOn={submitOn} company={company} 
//           position={position} workfromdate={workfromdate} 
//           worktodate={worktodate} duties={duties}></Work>  
//         <button disabled={submitOn} onClick={this.handleSubmit}>Edit</button>    
//       </div>
//     );
//   }
// }

export default function Main(props) {
  const [submitOn, setSubmitOn] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [town, setTown] = useState('');
  const [state, setState] = useState('');
  const [schoolname, setSchoolName] = useState('');
  const [domain, setDomain] = useState('');
  const [edufromdate, setEduFromDate] = useState('');
  const [edutodate, setEduToDate] = useState('');
  const [edustate, setEduState] = useState('');
  const [gpa, setGPA] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [workfromdate, setWorkFromDate] = useState('');
  const [worktodate, setWorkToDate] = useState('');
  const [duties, setDuties] = useState('');

  const handleSubmit = () => {
    setSubmitOn(!submitOn);
    console.log(`state of name right now is: ${name}`)
    console.log(`state of email right now is: ${email}`)
    console.log(`state of phone right now is: ${phone}`)
    console.log(`state of address right now is: ${address}`)
    console.log(`state of town right now is: ${town}`)
    console.log(`state of state right now is: ${state}`)    
  }

  const handleChange = (event) => {
    let val = event.target.value;
    switch (event.target.name) {
      case 'submitOn':
        setSubmitOn(val);
        break;
      case 'name':
        setName(val);
        break;
      case 'email':
        setEmail(val);
        break;
      case 'phone':
        setPhone(val);
        break;
      case 'address':
        setAddress(val);
        break;
      case 'town':
        setTown(val);
        break;
      case 'state':
        setState(val);
        break;
      case 'schoolname':
        setSchoolName(val);
        break;
      case 'domain':
        setDomain(val);
        break;
      case 'edufromdate':
        setEduFromDate(val);
        break;
      case 'edutodate':
        setEduToDate(val);
        break;
      case 'edustate':
        setEduState(val);
        break;
      case 'gpa':
        setGPA(val);
        break;
      case 'company':
        setCompany(val);
        break;
      case 'position':
        setPosition(val);
        break;
      case 'workfromdate':
        setWorkFromDate(val);
        break;
      case 'worktodate':
        setWorkToDate(val);
        break;
      case 'duties':
        setDuties(val);
        break;
      default:
        console.log('Default - This probably shouldn\'t happen');
    }
  }

  return (
    submitOn ?
    <form onChange={handleChange}>
      <General submitOn={submitOn} name={name} email={email}
        phone={phone} address={address}
        town={town} state={state}></General>
      <Education submitOn={submitOn} 
        schoolname={schoolname} domain={domain} 
        edufromdate={edufromdate} edutodate={edutodate} 
        edustat={edustate} gpa={gpa}></Education>
      <Work submitOn={submitOn} company={company} 
        position={position} workfromdate={workfromdate} 
        worktodate={worktodate} duties={duties}></Work>
      <input type="submit" disabled={!submitOn} onClick={handleSubmit} value="Submit"/>        
    </form>
    : <div>
      <General submitOn={submitOn} name={name} email={email}
        phone={phone} address={address}
        town={town} state={state}></General>
      <Education submitOn={submitOn} 
        schoolname={schoolname} domain={domain} 
        edufromdate={edufromdate} edutodate={edutodate} 
        edustat={edustate} gpa={gpa} ></Education>
      <Work submitOn={submitOn} company={company} 
        position={position} workfromdate={workfromdate} 
        worktodate={worktodate} duties={duties}></Work>  
      <button disabled={submitOn} onClick={handleSubmit}>Edit</button>    
    </div>
  );
}