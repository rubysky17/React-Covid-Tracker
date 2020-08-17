import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./Components";
import style from "./App.module.css";
import { fetchData } from "./api";
export default class App extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={style.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
