import React, { Component } from "react";
import "./Home.css";
import ChartHumidity from "../../components/chart-humidity/ChartHumidity";
import ChartTemperature from "../../components/char-temperature/ChartTemperature";
import TaskBar from "../../components/taskbar/TaskBar";
import Infor from "../../components/infor/Infor";
import ControlChart from "../../components/control-chart/ControlChart";
import ChartAirHumidity from "../../components/chart-air-humidity/ChartAirHumidity";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOption: "dashboard",
    };
  }
  option = (a) => {
    this.setState({ isOption: a });
  };
  render() {
    return (
      <div className="home">
        <div className="taskbar">
          <TaskBar option={this.option} />
        </div>
        <div className="chart">
          {this.state.isOption === "dashboard" ? (
            <React.Fragment>
              <div className="chart-tabel">
                <ChartHumidity />
                <ChartTemperature />
              </div>
              <div className="chart-control">
                <ControlChart />
                <ChartAirHumidity />
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Infor />
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
