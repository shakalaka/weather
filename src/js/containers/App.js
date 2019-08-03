import React from 'react';
import {Route, Switch} from 'react-router-dom';
import WeatherIndex from '../components/weather';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
    };


  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  render() {

    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <WeatherIndex
                {...props}
              />
            )}
          />
        </Switch>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
