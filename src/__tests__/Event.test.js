import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

import EventList from '../EventList';
import Event from '../Event';

describe('<Event /> component', () => {

  let EventWrapper;

  const event =
      {
          created: 1569827520000,
          duration: 7200000,
          id: "265278083",
          name: "Kubernetes Operators:The Ops in DevOps&Measuring DevOps performance-Hosted Event",
          date_in_series_pattern: false,
          status: "upcoming",
          time: 1572458400000,
          local_date: "2019-10-30",
          local_time: "19:00",
          updated: 1571665007000,
          utc_offset: 3600000,
          waitlist_count: 0,
          yes_rsvp_count: 12,
          venue: {
            id: 26693316,
            name: "Metro-Straße 8",
            lat: 51.23447036743164,
            lon: 6.8245439529418945,
            repinned: true,
            address_1: "Metro-Straße 8",
            city: "Düsseldorf",
            country: "de",
            localized_country_name: "Germany"
          },
          group: {
            created: 1443623040000,
            name: "People + Tech Düsseldorf",
            id: 18982554,
            join_mode: "open",
            lat: 51.2400016784668,
            lon: 6.789999961853027,
            urlname: "people-tech-duesseldorf",
            who: "People+Techies",
            localized_location: "Düsseldorf, Germany",
            state: "",
            country: "de",
            region: "en_US",
            timezone: "Europe/Berlin"
          },
          link: "https://www.meetup.com/people-tech-duesseldorf/events/265278083/",
          description: "<p>On October 30, we are happy to host the next Cloud Native Computing Rhein-Ruhr MeetUp.</p> <p>The theme of the night is: Kubernetes Operators wih a talk about 'The Ops in DevOps' and another one about 'Measuring DevOps performance'</p> <p>Make sure to register directly on their site.</p>",
          how_to_find_us: "This MeetUp takes place at our METRO Inn. Once you are on the  metrostrasse , you will recognize it by the beachflags that will be out. ",
          visibility: "public",
          member_pay_fee: false
      }


  beforeAll(() => {
    EventWrapper = shallow(<Event event={event}/>);
  });

  test('test that component is rendered', () => {
    EventWrapper = shallow(<Event event={event} />);
    expect(EventWrapper).toHaveLength(1);
  });

  test('test that event wrapping div is rendered', () => {
    EventWrapper = shallow(<Event event={event} />);
    expect(EventWrapper.find('.Event')).toHaveLength(1);
  });

  test('test that event wrapping div just shows event__Overview', () => {
    EventWrapper = shallow(<Event event={event} />);
    expect(EventWrapper.find('.Event').children()).toHaveLength(1);
  });

  test('test that event__Overview is rendered', () => {
     EventWrapper = shallow(<Event event={event} />);
    expect(EventWrapper.find('.event__Overview')).toHaveLength(1);
  });

  test('test that event__Overview children are rendered', () => {
    EventWrapper = shallow(<Event event={event} />);
    expect(EventWrapper.find('.event__Overview').children()).toHaveLength(5);
  });

  test('test that event__Details children are rendered', () => {
    EventWrapper = shallow(<Event event={event} />);
    EventWrapper.setState({
      showDetails: true
    });
    expect(EventWrapper.find('.event__Details--description')).toHaveLength(1);
  });

  test('test that show/hide details button is rendered', () => {
    EventWrapper = shallow(<Event event={event} />);
    expect(EventWrapper.find('.event__Overview button')).toHaveLength(1);
  });

  test('click on button should show details', () => {
    EventWrapper = shallow(<Event event={event} />);
    EventWrapper.setState({
      showDetails: false
    });
    EventWrapper.find('.event__Overview button').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('set mock eventdata as state', () => {

   EventWrapper = shallow(<Event event={event} />);

    //console.log(EventWrapper.state('event'));
    EventWrapper.setState({ event: event });
    expect(EventWrapper.state('event').name).toBe('Kubernetes Operators:The Ops in DevOps&Measuring DevOps performance-Hosted Event');
  });
});
