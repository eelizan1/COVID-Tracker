import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    //const response = await axios.get(url);

    // use destructuring to get data property from the response
    // then destrcucture again to get specific properties of data
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    // create object for the parts of the data we want
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    //return data;
    // this is an instant return of an object =>({ what's ever in here will be returned as an object })
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
