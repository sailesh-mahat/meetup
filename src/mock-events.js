
const mockEvents = {
  city: {
    id: 1007700,
    city: "München",
    lat: 48.14,
    lon: 11.58,
    state: "",
    country: "de",
    zip: "meetup3",
    member_count: 1257
},
  events: [
    {
      created: 1570711163000,
      duration: 10800000,
      id: "265558950",
      name: "A Case For Outside-In Design presented by Sandro Mancuso (Codurance)",
      rsvp_limit: 120,
      date_in_series_pattern: false,
      status: "upcoming",
      time: 1572370200000,
      local_date: "2019-10-29",
      local_time: "18:30",
      updated: 1571929720000,
      utc_offset: 3600000,
      waitlist_count: 0,
      yes_rsvp_count: 104,
      venue: {
      id: 26292382,
      name: "it-economics GmbH",
      lat: 48.135562896728516,
      lon: 11.61365032196045,
      repinned: true,
      address_1: "Bothestraße 11",
      city: "München",
      country: "de",
      localized_country_name: "Germany"
      },
      group: {
      created: 1411685347000,
      name: "Munich Software Craft Community",
      id: 17214922,
      join_mode: "approval",
      lat: 48.13999938964844,
      lon: 11.579999923706055,
      urlname: "munich-software-craft-community",
      who: "Software Crafters",
      localized_location: "München, Germany",
      state: "",
      country: "de",
      region: "en_US",
      timezone: "Europe/Berlin"
      },
      link: "https://www.meetup.com/munich-software-craft-community/events/265558950/",
      description: "<p>For a few decades, one of the most common approaches to software design is to first focus on the domain model (application layer), then persistence (data layer) and finally the user interface (presentation layer). But what are the pros and cons of this approach? Are there other alternatives? Are they viable?</p> <p>In this presentation, Sandro will be talking about different design biases and the impact they have. He will then focus on Outside-In Design, explaining how our domain model can emerge and evolve when driven by the needs of external systems or users, avoiding speculation and wasted effort.</p> <p>Sandro Mancuso is a rarer but extremly thoughtful and inspiring speaker. Do not miss his talk.</p> ",
      visibility: "public",
      member_pay_fee: false
    }]
  };

  export { mockEvents };
