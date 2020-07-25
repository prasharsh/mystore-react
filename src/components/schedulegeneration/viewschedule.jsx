import React, { Component } from "react";
import {Table, Form, Button} from 'react-bootstrap';

export default class ViewSchedule extends Component {
//   state = {
//     crewSchedule: [], // list is empty in the beginning
//     error: false
//  };

    constructor(props){
        super(props);

        this.state = { confirmation:false,
            crewSchedule: [], // list is empty in the beginning
            error: false};
    }




    componentDidMount() {
        this.getUserList(); // function call
    }

    getUserList = async () => {
        try { //try to get data
            const response = await fetch("https://mystore-spring.herokuapp.com/api/schedule/retrievePublishedSchedule", {
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    //  'Access-Control-Allow-Origin': 'http://localhost:3000'
                    'Access-Control-Allow-Origin': '*'


                },

            });
            if (response.ok) { // ckeck if status code is 200
                const data = await response.json();
                console.log("DATA:.......",data);
                this.setState({...this.state, crewSchedule: data});
            } else { this.setState({...this.state, error: true }) }
        } catch (e) { //code will jump here if there is a network problem
            this.setState({ ...this.state, error: true });
            console.log(e);

        }
    };

    render() {

        return (

            <div className="schedule1-component m-4 p-4">


                <h4 id="crewDashBoardTitle">You are viewing the updated schedule for the next week (Timezone : Atlantic Daylight Time (ADT))</h4>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                    </thead>
                    <tbody>


                    {/* <div> */}

                    {this.state.crewSchedule && this.state.crewSchedule.map(schedule => (
                        <tr key={schedule}>

                            <td>{schedule.name}</td>
                            <td>{schedule.mon}</td>
                            <td>{schedule.tues} </td>
                            <td> {schedule.wed} </td>
                            <td> {schedule.thrus} </td>
                            <td> {schedule.fri} </td>
                            <td> {schedule.sat} </td>
                            <td> {schedule.sun} </td>

                        </tr>
                    ))}

                    {/* </div> */}



                    </tbody>
                </Table>
                <h5 id="crewDashBoardFooterNote">Every crew should submit their availability for imminent weeks change before wednesday latest</h5>
            </div>
        );
    }
}


