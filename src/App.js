import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { WarningAlert } from './Alert'
import { getEvents } from './api';
import logo from './images/icon.png'



class App extends Component {

  state = {
    events: [],
    page: null,
  }
  componentDidMount() {
      this.updateEvents();
  }

 updateEvents = (lat, lon, page) => {

   if (!navigator.onLine){
      this.setState({ warningText: "You are offline. Events displayed are loaded from your last session."});
    } else {
      this.setState({ warningText: ""})
    }

   if(lat && lon) {
    getEvents(lat, lon, this.state.page).then(response => this.setState({ events: response, lat, lon }));
  }
  else if (page) {
    getEvents(this.state.lat, this.state.lon, page).then(response => this.setState({ events: response, page }));
  }
  else {
    getEvents(this.state.lat, this.state.lon, this.state.page).then(response => this.setState({ events: response }));
  }


}

  render() {
    return (
      <div className="App">
      <img className="logo" src={logo} alt="logo" />
      <CitySearch updateEvents={this.updateEvents} />
      <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={this.state.events.length} lat={this.state.lat} lon={this.state.lon} />
      <WarningAlert text={this.state.warningText} />
      <EventList events={this.state.events} />
      </div>
    );
  }

}


export default App;
