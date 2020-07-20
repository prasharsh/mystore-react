import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

class DatePickerComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
    };
  }

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
    this.props.parentCallback(date);
  };

  render() {
    return (
      <div>
        <div className="text-center">
          <div className="form-group">
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              dateFormat="yyyy-MM-dd"
              className="form-control"
              minDate={new Date()}
              placeholderText="Select a day"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default DatePickerComp;
