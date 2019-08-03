import axios from 'axios';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

export default class CommonApi
{
  constructor()
  {
    axios.interceptors.request.use((request) => {
      nprogress.start();

      return request;
    }, (error) => {
      return Promise.reject(error);
    });

    axios.interceptors.response.use(function(response) {
      nprogress.done();

      return response;
    }, function(error) {
      nprogress.done();

      if (error.response && 404 === error.response.status) {
        error = new Error('Такого города не обнаружено');
      }

      return Promise.reject(error);
    });
  }
}
