import React, { Component } from "react";
import {Table, Form, Button} from 'react-bootstrap';

export default class CrewRequestAvail extends Component {
  constructor(props) {
    super(props);
    this.state = { monStart: '', monEnd: '',
                   tuesStart: '', tuesEnd:'',
                   wedStart: '', wedEnd:'',
                   thrusStart:'', thrusEnd:'',
                   friStart :'', friEnd :'',
                   satStart:'', satEnd:'',
                   sunStart:'',sunEnd:'',
                   validateHours:false, submitMessage:false
    };
    this.handleMonStart = this.handleMonStart.bind(this);
    this.handleTuesStart = this.handleTuesStart.bind(this);
    this.handleWedStart = this.handleWedStart.bind(this);
    this.handleThrusStart = this.handleThrusStart.bind(this);
    this.handleFriStart = this.handleFriStart.bind(this);
    this.handleSatStart = this.handleSatStart.bind(this);
    this.handleSunStart = this.handleSunStart.bind(this);

    this.handleMonEnd = this.handleMonEnd.bind(this);
    this.handleTuesEnd = this.handleTuesEnd.bind(this);
    this.handleWedEnd = this.handleWedEnd.bind(this);
    this.handleThrusEnd = this.handleThrusEnd.bind(this);
    this.handleFriEnd = this.handleFriEnd.bind(this);
    this.handleSatEnd = this.handleSatEnd.bind(this);
    this.handleSunEnd = this.handleSunEnd.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleMonStart(event){
    this.setState({ monStart: event.target.value });
     
  }
  handleMonEnd(event){this.setState({ monEnd: event.target.value });}
  handleTuesStart(event){this.setState({ tuesStart: event.target.value });}
  handleTuesEnd(event){this.setState({ tuesEnd: event.target.value });}
  handleWedStart(event){this.setState({ wedStart: event.target.value });}
  handleWedEnd(event){this.setState({ wedEnd: event.target.value });}
  handleThrusStart(event){this.setState({ thrusStart: event.target.value });}
  handleThrusEnd(event){this.setState({ thrusEnd: event.target.value });}
  handleFriStart(event){this.setState({ friStart: event.target.value });}
  handleFriEnd(event){this.setState({ friEnd : event.target.value });}
  handleSatStart(event){this.setState({ satStart: event.target.value });}
  handleSatEnd(event){this.setState({ satEnd: event.target.value });}
  handleSunStart(event){this.setState({ sunStart: event.target.value });}
  handleSunEnd(event){this.setState({ sunEnd: event.target.value });}

  handleSubmit(){
   let avail ={
       username:localStorage.getItem('username'),
       monStart: this.state.monStart,
       monEnd: this.state.monEnd,
       tuesStart: this.state.tuesStart,
       tuesEnd: this.state.tuesEnd,
       wedStart: this.state.wedStart,
       wedEnd: this.state.wedEnd,
       thrusStart: this.state.thrusStart,
       thrusEnd: this.state.thrusEnd,
       friStart: this.state.friStart,
       friEnd: this.state.friEnd,
       satStart: this.state.satStart,
       satEnd: this.state.satEnd,
       sunStart: this.state.sunStart,
       sunEnd: this.state.sunEnd};
    var flag = true;
     //https:///^([0]?[1-9]|1[0-2]):([0-5]\d)\s?(am|pm) 
     const regex  = /^([0]?[1-9]|1[0-2]):([0-5]\d)\s?(AM|PM)|^$/;
    
    if ( !regex.test(this.state.monStart) && flag){
       
      flag = false;
      
    }
     if(!regex.test(this.state.monEnd)&& flag){
      
      alert('ME')
      flag = false;
    }
      if((!regex.test(this.state.tuesStart)&& flag) ) {
        alert(this.start.tuesStart)
        alert(regex.test(this.state.tuesStart) )
      flag = false;
    }
     if(!regex.test(this.state.tuesEnd)  && flag){
      alert(regex.test(this.state.tuesEnd) )
      flag = false;
    }
     if(!regex.test(this.state.wedEnd)&& flag ) {
      alert(regex.test(this.state.wedEnd) )
      flag = false;
    }
     if(!regex.test(this.state.thrusStart) && flag  ){
       alert('TS')
      flag = false;
    }
     if(!regex.test(this.state.thrusEnd)&& flag)    {
      alert('TE')
      flag = false;
    }
     if(!regex.test(this.state.friStart) && flag) {
      alert('FS')
      flag = false;
    }
     if(!regex.test(this.state.friEnd)&& flag)  {
      alert('FE')
      flag = false;
    }
     if(!regex.test(this.state.satStart) && flag){
      alert('SS')
      flag = false;
    }
     if(!regex.test(this.state.sunEnd) && flag){
      alert('Se')
      flag = false;
    }
    if(!regex.test(this.state.sunStart)&& flag)   {
      alert('Ss')
      flag = false;
    }
    if(flag !== true){
      this.setState({
        ...this.state,
        validateHours: true
      })
    }
    

      fetch("https://mystore-spring.herokuapp.com/api/schedule/saveAvail", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(avail),
      })
          .then((response) => response.json())
          .then((data) => {
                    if (data){
                        //alert(data);
                        this.setState({
                            ...this.state,
                            submitMessage : true
                        })
                    }
          });



    
 }
    render() {
 return (
  <div className="crewrequestavial-component m-4 p-4">

<h2 id="crewDashBoardTitle">Welcome to crew Dashboard!</h2>

{
          this.state.validateHours&&<span style={{ color: 'red' }} className="messageError"> check timing format (12 hours XX:XXPM/AM)</span> 
          
}
{
        this.state.submitMessage&&<span style={{ color: 'blue' }} className="messageError"> schedule request successful ! </span> 
}
         
 <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Day</th>
      <th>Starts</th>
      <th>Closes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Monday</td>
      <td> <Form.Control type="text" placeholder="2:00AM" name = "monStart" value={this.state.monStart} onChange={this.handleMonStart}/></td>
      <td><Form.Control type="text" placeholder="2:00AM" name="monEnd" value={this.state.monEnd} onChange={this.handleMonEnd}/></td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td><Form.Control type="text" placeholder="2:00AM" className="timings" value={this.state.tuesStart} onChange={this.handleTuesStart}/></td>
      <td><Form.Control type="text" placeholder="2:00AM" className="timings" value={this.state.tuesEnd} onChange={this.handleTuesEnd}/></td>
    </tr>
    <tr>
      <td>Wednesday</td>
      <td><Form.Control type="text" placeholder="2:00AM" className="timings" value={this.state.wedStart} onChange={this.handleWedStart}/></td>
      <td><Form.Control type="text" placeholder="2:00AM" className="timings" value={this.state.wedEnd} onChange={this.handleWedEnd}/></td>
    </tr>
    <tr>
      <td>Thursday</td>
      <td><Form.Control type="text" placeholder="2:00AM" className="timings" value={this.state.thrusStart} onChange={this.handleThrusStart} /></td>
      <td><Form.Control type="text" placeholder="2:00AM" className="timings" value={this.state.thrusEnd} onChange={this.handleThrusEnd}/></td>
    </tr>
    <tr>
      <td>Friday</td>
      <td><Form.Control type="text" placeholder="2:00AM" className="timings" value={this.state.friStart} onChange={this.handleFriStart}/></td>
      <td><Form.Control type="text" placeholder="2:00AM" className="timings" value={this.state.friEnd} onChange={this.handleFriEnd}/></td>
      
    </tr>
   <tr>
      <td>Saturday</td>
      <td><Form.Control type="text" placeholder="2:00AM" className="timings" value={this.state.satStart} onChange={this.handleSatStart}/></td>
      <td><Form.Control type="text" placeholder="2:00AM" className="timings" value={this.state.satEnd} onChange={this.handleSatEnd}/></td>
   </tr>
   <tr>
      <td>Sunday</td>
      <td><Form.Control type="text" placeholder="2:00AM" className="timings" value={this.state.sunStart} onChange={this.handleSunStart}/></td>
      <td><Form.Control type="text" placeholder="2:00AM" className="timings" value={this.state.sunEnd} onChange={this.handleSunEnd}/></td>
   </tr>
  </tbody>
 </Table> 
 <Button variant="primary" type="submit" onClick={this.handleSubmit}>
    Submit
  </Button>

</div>
);
    }
}


