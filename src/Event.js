import React, { Component } from 'react';

class Event extends Component {
  constructor(props) {
      super(props);
      this.state = {
        events: [],
        showDetails: false
      }
  }

  handleShowDetails = () => {
    this.setState({ showDetails: true });
  }

  render() {
    const showDetails = this.state.showDetails;

    console.log("PROPS", this.props)


    return(
      <div className="Event">
        <div className="event__Overview">
          <p className="name">{this.props.event.name}</p>
          <p className="event__Overview--localDate">{this.props.event.local_date}</p>
          <div className="group">Group: {this.props.event.group.name}</div>
          <p className="group-name">{this.props.event.yes_rsvp_count} people are going.</p>
          <button className="details-btn" onClick={() => this.handleShowDetails()}>show details</button>
        </div>
        {showDetails &&
          <div className="event__Details">
            <p className="event__Details--description">{this.props.event.description}</p>
          </div>
        }
      </div>
    );
  }
}

export default Event;
