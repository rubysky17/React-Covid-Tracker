import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./Components";
import style from "./App.module.css";
import { fetchData } from "./api";
export default class App extends Component {
  state = {
    data: {},
    country: "",
  };
  // async componentDidMount() {
  //   const fetchedData = await fetchData();
  //   this.setState({ data: fetchedData });
  // }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    //fetch the data
    const fetchedData = await fetchData(country);
    //setstate
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={style.container}>
        <img src="./covid-19.png" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
