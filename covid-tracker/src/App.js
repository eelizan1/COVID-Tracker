import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  // create empty data set in the state
  state = {
    data: {},
  };

  // make this async await
  async componentDidMount() {
    const fetchedData = await fetchData();
    //set api data in state
    this.setState({ data: fetchedData });
  }
  render() {
    // when using class components, before you pass down props, destrcture the props first
    // so that you dont have to pass this.state.data all the time as props

    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
