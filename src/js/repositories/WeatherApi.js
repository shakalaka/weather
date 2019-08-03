import config from '../config';
import axios from 'axios';
import CommonApi from './CommonApi';


export default class WeatherApi extends CommonApi
{
  /**
   * Загружает сайты
   * @param city
   * @param cb
   */
  getWeather = (city, cb) => {
    return axios
      .get(`${config.api.scheme}${config.api.host}/${config.api.path}/weather?q=${city}&appid=${config.api.key}&units=metric`)
      .then(json => {
        cb(json);
      });
  }
}
