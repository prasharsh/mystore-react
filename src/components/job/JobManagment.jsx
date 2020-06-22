import React, { Component } from "react";
import "./Job.css";
import { Button } from "react-bootstrap";
import JobTable from "./JobTable";

export default class JobManagment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      selectedJob: {},
      selected: false,
      createJobSelected: false,
      refresh: false,
    };
  }

  async componentDidMount() {
    //BACK END CALL to get the list of job postings
    let jobs = [
      {
        id: 1,
        position: "Waiter",
        type: "Full-Time",
        shift: "AM",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium. Cibo ubique at has. Soluta fabulas theophrastus id eum. Nec at mucius menandri sententiae. Ius ex brute tollit prodesset.",
        description:
          "Te noster officiis posidonium has, mel ei postea perpetua. Ferri tamquam laoreet in has. Nec at ridens bonorum, no mei quot dicat tantas. Ne eos porro assum, his ei elitr quaerendum, partem instructior in vim. Tation praesent quaerendum eu per, nonumes accusamus eloquentiam mei eu. Duis tota sadipscing usu ut.",
      },
      {
        id: 2,
        position: "Cook",
        type: "Full-Time",
        shift: "PM",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium. Cibo ubique at has. Soluta fabulas theophrastus id eum. Nec at mucius menandri sententiae. Ius ex brute tollit prodesset.",
        description:
          "Te noster officiis posidonium has, mel ei postea perpetua. Ferri tamquam laoreet in has. Nec at ridens bonorum, no mei quot dicat tantas. Ne eos porro assum, his ei elitr quaerendum, partem instructior in vim. Tation praesent quaerendum eu per, nonumes accusamus eloquentiam mei eu. Duis tota sadipscing usu ut.",
      },
      {
        id: 3,
        position: "Waiter",
        type: "Part-Time",
        shift: "Day",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium. Cibo ubique at has. Soluta fabulas theophrastus id eum. Nec at mucius menandri sententiae. Ius ex brute tollit prodesset.",
        description:
          "Te noster officiis posidonium has, mel ei postea perpetua. Ferri tamquam laoreet in has. Nec at ridens bonorum, no mei quot dicat tantas. Ne eos porro assum, his ei elitr quaerendum, partem instructior in vim. Tation praesent quaerendum eu per, nonumes accusamus eloquentiam mei eu. Duis tota sadipscing usu ut.",
      },
      {
        id: 4,
        position: "Cook",
        type: "Part-Time",
        shift: "Evening",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium. Cibo ubique at has. Soluta fabulas theophrastus id eum. Nec at mucius menandri sententiae. Ius ex brute tollit prodesset.",
        description:
          "Te noster officiis posidonium has, mel ei postea perpetua. Ferri tamquam laoreet in has. Nec at ridens bonorum, no mei quot dicat tantas. Ne eos porro assum, his ei elitr quaerendum, partem instructior in vim. Tation praesent quaerendum eu per, nonumes accusamus eloquentiam mei eu. Duis tota sadipscing usu ut.",
      },
      {
        id: 5,
        position: "Manager",
        type: "Full-Time",
        shift: "AM",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium. Cibo ubique at has. Soluta fabulas theophrastus id eum. Nec at mucius menandri sententiae. Ius ex brute tollit prodesset.",
        description:
          "Te noster officiis posidonium has, mel ei postea perpetua. Ferri tamquam laoreet in has. Nec at ridens bonorum, no mei quot dicat tantas. Ne eos porro assum, his ei elitr quaerendum, partem instructior in vim. Tation praesent quaerendum eu per, nonumes accusamus eloquentiam mei eu. Duis tota sadipscing usu ut.",
      },
      {
        id: 6,
        position: "Manager",
        type: "Part-Time",
        shift: "Day",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium. Cibo ubique at has. Soluta fabulas theophrastus id eum. Nec at mucius menandri sententiae. Ius ex brute tollit prodesset.",
        description:
          "Te noster officiis posidonium has, mel ei postea perpetua. Ferri tamquam laoreet in has. Nec at ridens bonorum, no mei quot dicat tantas. Ne eos porro assum, his ei elitr quaerendum, partem instructior in vim. Tation praesent quaerendum eu per, nonumes accusamus eloquentiam mei eu. Duis tota sadipscing usu ut.",
      },
      {
        id: 7,
        position: "Manager",
        type: "Full-Time",
        shift: "AM",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium. Cibo ubique at has. Soluta fabulas theophrastus id eum. Nec at mucius menandri sententiae. Ius ex brute tollit prodesset.",
        description:
          "Te noster officiis posidonium has, mel ei postea perpetua. Ferri tamquam laoreet in has. Nec at ridens bonorum, no mei quot dicat tantas. Ne eos porro assum, his ei elitr quaerendum, partem instructior in vim. Tation praesent quaerendum eu per, nonumes accusamus eloquentiam mei eu. Duis tota sadipscing usu ut.",
      },
      {
        id: 8,
        position: "Manager",
        type: "Part-Time",
        shift: "AM",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium. Cibo ubique at has. Soluta fabulas theophrastus id eum. Nec at mucius menandri sententiae. Ius ex brute tollit prodesset.",
        description:
          "Te noster officiis posidonium has, mel ei postea perpetua. Ferri tamquam laoreet in has. Nec at ridens bonorum, no mei quot dicat tantas. Ne eos porro assum, his ei elitr quaerendum, partem instructior in vim. Tation praesent quaerendum eu per, nonumes accusamus eloquentiam mei eu. Duis tota sadipscing usu ut.",
      },
      {
        id: 9,
        position: "Manager",
        type: "Full-Time",
        shift: "AM",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium. Cibo ubique at has. Soluta fabulas theophrastus id eum. Nec at mucius menandri sententiae. Ius ex brute tollit prodesset.",
        description:
          "Te noster officiis posidonium has, mel ei postea perpetua. Ferri tamquam laoreet in has. Nec at ridens bonorum, no mei quot dicat tantas. Ne eos porro assum, his ei elitr quaerendum, partem instructior in vim. Tation praesent quaerendum eu per, nonumes accusamus eloquentiam mei eu. Duis tota sadipscing usu ut.",
      },
      {
        id: 10,
        position: "Manager",
        type: "Part-Time",
        shift: "Weekends",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium. Cibo ubique at has. Soluta fabulas theophrastus id eum. Nec at mucius menandri sententiae. Ius ex brute tollit prodesset.",

        description:
          "Te noster officiis posidonium has, mel ei postea perpetua. Ferri tamquam laoreet in has. Nec at ridens bonorum, no mei quot dicat tantas. Ne eos porro assum, his ei elitr quaerendum, partem instructior in vim. Tation praesent quaerendum eu per, nonumes accusamus eloquentiam mei eu. Duis tota sadipscing usu ut.",
      },
      {
        id: 11,
        position: "Manager",
        type: "Full-Time",
        shift: "AM",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium. Cibo ubique at has. Soluta fabulas theophrastus id eum. Nec at mucius menandri sententiae. Ius ex brute tollit prodesset.",
        description:
          "Te noster officiis posidonium has, mel ei postea perpetua. Ferri tamquam laoreet in has. Nec at ridens bonorum, no mei quot dicat tantas. Ne eos porro assum, his ei elitr quaerendum, partem instructior in vim. Tation praesent quaerendum eu per, nonumes accusamus eloquentiam mei eu. Duis tota sadipscing usu ut.",
      },
      {
        id: 12,
        position: "Manager",
        type: "Full-Time",
        shift: "AM",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium. Cibo ubique at has. Soluta fabulas theophrastus id eum. Nec at mucius menandri sententiae. Ius ex brute tollit prodesset.",
        description:
          "Te noster officiis posidonium has, mel ei postea perpetua. Ferri tamquam laoreet in has. Nec at ridens bonorum, no mei quot dicat tantas. Ne eos porro assum, his ei elitr quaerendum, partem instructior in vim. Tation praesent quaerendum eu per, nonumes accusamus eloquentiam mei eu. Duis tota sadipscing usu ut.",
      },
    ];
    this.setState(() => ({ jobs }));
  }

  async componentDidUpdate() {
    console.log("did update");
  }

  handleOnClick = (job) => {
    //console.log(job);
    this.setState({ selectedJob: job });
    this.setState({ selected: true });
  };

  handleCreateJob = () => {
    this.setState({ createJobSelected: true });
  };
  render() {
    const { selectedJob } = this.state;
    const { jobs } = this.state;
    console.log("here");
    if (this.state.selected) {
      this.props.history.push({
        pathname: "/home/update-job",
        state: { selectedJob },
      });
    }
    if (this.state.createJobSelected) {
      this.props.history.push({
        pathname: "/home/create-job",
        state: { jobs },
      });
    }
    return (
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div align="center">
                  <div style={{ display: "inline-block" }}></div>
                  <span className="p-2"></span>
                  <div style={{ display: "inline-block" }}>
                    <h4>Job Posting</h4>
                    <hr></hr>
                  </div>
                </div>
              </div>
            </div>
            <JobTable
              jobs={this.state.jobs}
              handleOnClick={this.handleOnClick}
            ></JobTable>
          </div>
          <div style={{ paddingTop: "1%" }}>
            <Button onClick={this.handleCreateJob}>Create Job</Button>
          </div>
        </div>
      </div>
    );
  }
}
