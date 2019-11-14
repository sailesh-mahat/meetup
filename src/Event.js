import React, { Component } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';


class Event extends Component {
  constructor(props) {
      super(props);
      this.state = {
        events: [],
        showDetails: false
      }
  }

  handleShowDetails = () => {
    if(this.state.showDetails === false) {
      this.setState({ showDetails: true });
    }
    else {
      this.setState({ showDetails: false });
    }
  }

  getData() {
   let peopleGoing = this.props.event.yes_rsvp_count;
   let spotsAvailable =
     this.props.event.rsvp_limit - this.props.event.yes_rsvp_count;

   return [
     { name: "How many are going", value: peopleGoing },
     { name: "Available spots", value: spotsAvailable }
   ];
 }

  render() {
    const showDetails = this.state.showDetails;
    let colors = ["#000", "#b3b3b3"]


  //  console.log("PROPS", this.props)


    return(
      <div className="Event">
        <div className="event__Overview">
          <p className="name">{this.props.event.name}</p>
          <p className="event__Overview--localDate">{this.props.event.local_date} | {this.props.event.local_time}</p>
          <div className="group">Group: {this.props.event.group.name}</div>
          <p className="group-name">{this.props.event.yes_rsvp_count} people are going.</p>
          <button className="details-btn" onClick={() => this.handleShowDetails()}>Details</button>
        </div>
        {this.state.showDetails &&
          <div className="event__Details">
            <p className="event__Details--description" dangerouslySetInnerHTML={{ __html: this.props.event.description}}  />
            {this.props.event.rsvp_limit && (
                <ResponsiveContainer height={200}>
                  <PieChart margin={{top: 30, bottom: 15}}>
                    <Legend />
                    <Pie data={this.getData()} fill="#8884d8" label>
                    {
                      this.getData().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]}/>
                      ))
                    }
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              )}
              <a className="link" href={this.props.event.link}>
                Event link
              </a>
          </div>
        }
      </div>
    );
  }
}

export default Event;
