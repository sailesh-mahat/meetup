import React, { Component } from 'react';
import { ErrorAlert } from './Alert';


class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });

    if (value < 1){
      this.setState({ errorText: 'The number of events shown must be 1 or more',
      })
    }
    else{
      this.props.updateEvents(null, null, value);
      this.setState({ errorText: ''})
    }
  }

  render() {
    return(
      <div className="numberOfEvents">
        <label>Number of events to display: </label>
        <input
          type="text"
          id="numberOfEvents__input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
