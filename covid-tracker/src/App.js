import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import image from "../src/assets/image.png";

class App extends React.Component {
  // create empty data set in the state
  state = {
    data: {},
    country: "",
  };

  // make this async await
  async componentDidMount() {
    const data = await fetchData();
    //set api data in state
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    // fetch data
    const data = await fetchData(country);
    // set state
    this.setState({ data, country: country });
  };

  render() {
    // when using class components, before you pass down props, destrcture the props first
    // so that you dont have to pass this.state.data all the time as props

    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
