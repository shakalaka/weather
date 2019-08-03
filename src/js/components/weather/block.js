import React from 'react';

class WeatherBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      main: this.props.main,
      wind: this.props.wind,
    };

  }

  render() {
    return (
      <div className="text-center">
        <table className="table">
          <tbody>
            <tr>
              <td className={'row'}>Температура</td>
              <td>{this.state.main.temp} °C</td>
            </tr>
            <tr>
              <td className={'row'}>Ветер</td>
              <td>{this.state.wind.speed} м/с</td>
            </tr>

          </tbody>
        </table>
      </div>
    );
  }
}
export default WeatherBlock;
