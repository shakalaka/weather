import React from 'react';
import WeatherApi from '../../repositories/WeatherApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast} from 'react-toastify';
import WeatherBlock from './block';

class WeatherIndex extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      city: null
    };


    this.repository = new WeatherApi;
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleSubmitCity = this.handleSubmitCity.bind(this);
  }

  componentDidMount() {

  }

  notify = (error) => {
    toast(error.message, {
      autoClose: 5000
    });
  };

  getWeather = () => {
    this.setState({
      data: [],
      isLoaded: false,
    });


    if (this.state.city !== null) {
      let self = this;
      Promise.resolve(this.repository.getWeather(this.state.city, this.getWeatherEnd)).catch(function(error) {
        self.notify(error);
      });
    }
  };

  getWeatherEnd = (data) => {
    console.log(data.data);
    this.setState({
      data: data.data,
      isLoaded: true
    });
  };

  componentWillMount() {
    this.getWeather();
  }

  handleChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  handleSubmitCity() {
    this.getWeather();
  }

  render() {

    let {data, isLoaded} = this.state;

    return (
      <div className="text-center">
        <form className="weather-block">
          <img className="mb-4" src="/img/weather.png" alt=""
            width="72" height="72"/>
          <h1 className="h3 mb-3 font-weight-normal">Погода</h1>

          <div className="input-group mb-3">
            <input type="text" id="inputCity" onChange={this.handleChangeCity} className="form-control" placeholder="Выбор города"/>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={this.handleSubmitCity}>Показать</button>
            </div>
          </div>

          {(isLoaded === true) ? <WeatherBlock {...this.state.data}/> : null}

          <p className="mt-5 mb-3 text-muted">© ITMH 2019</p>
        </form>
      </div>
    );
  }
}
export default WeatherIndex;
