import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockEvents } from '../mock-events';
import Event from '../Event';



describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

describe('<App /> integration', () => {

  test('get list of events after user selects a city', async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked('value', 1.1, 1.2);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(1.1, 1.2);
    AppWrapper.unmount();
  });

  test('change state after get list of events', async () => {
    const AppWrapper = shallow(<App />);
    AppWrapper.instance().updateEvents(1.1, 1.2);
    await AppWrapper.update();
    expect(AppWrapper.state('events')).toEqual(mockEvents.events);
  });

  test('render correct list of events', () => {
    const AppWrapper = mount(<App />);

    const myEvents = [
      {
        id: 1,
        name: 'event one',
        local_date: '11/11/19',
        group: {
          name: 'group one'
        },
        yes_rsvp_count: 10
      },
      {
        id: 2,
        name: 'event two',
        local_date: '11/11/19',
        group: {
          name: 'group two'
        },
        yes_rsvp_count: 11
      },
      {
        id: 3,
        name: 'event three',
        local_date: '11/11/19',
        group: {
          name: 'group three'
        },
        yes_rsvp_count: 12
      },
      {
        id: 4,
        name: 'event four',
        local_date: '11/11/19',
        group: {
          name: 'group four'
        },
        yes_rsvp_count: 13
      },
    ]

    AppWrapper.setState({ events: myEvents });
    expect(AppWrapper.find(Event)).toHaveLength(4);
    AppWrapper.unmount();
  });
});
