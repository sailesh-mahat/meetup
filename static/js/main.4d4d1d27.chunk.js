(window.webpackJsonpmeetup=window.webpackJsonpmeetup||[]).push([[0],{20:function(e,t,n){e.exports=n(45)},25:function(e,t,n){},26:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(19),o=n.n(s),i=(n(25),n(2)),c=n(3),u=n(5),l=n(4),p=n(6),h=(n(26),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleShowDetails=function(){n.setState({showDetails:!0})},n.state={events:[],showDetails:!1},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showDetails;return r.a.createElement("div",{className:"Event"},r.a.createElement("div",{className:"event__Overview"},r.a.createElement("p",{className:"name"},this.props.event.name),r.a.createElement("p",{className:"event__Overview--localDate"},this.props.event.local_date),r.a.createElement("div",{className:"group"},"Group: ",this.props.event.group.name),r.a.createElement("p",{className:"group-name"},this.props.event.yes_rsvp_count," people are going."),r.a.createElement("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()}},"show details")),t&&r.a.createElement("div",{className:"event__Details"},r.a.createElement("p",{className:"event__Details--description"},this.props.event.description)))}}]),t}(a.Component)),m=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={events:[]},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(h,{event:e}))})))}}]),t}(a.Component),d=n(7),v=n.n(d),f=n(8),g={city:{id:1007700,city:"M\xfcnchen",lat:48.14,lon:11.58,state:"",country:"de",zip:"meetup3",member_count:1257},events:[{created:1570711163e3,duration:108e5,id:"265558950",name:"A Case For Outside-In Design presented by Sandro Mancuso (Codurance)",rsvp_limit:120,date_in_series_pattern:!1,status:"upcoming",time:15723702e5,local_date:"2019-10-29",local_time:"18:30",updated:157192972e4,utc_offset:36e5,waitlist_count:0,yes_rsvp_count:104,venue:{id:26292382,name:"it-economics GmbH",lat:48.135562896728516,lon:11.61365032196045,repinned:!0,address_1:"Bothestra\xdfe 11",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1411685347e3,name:"Munich Software Craft Community",id:17214922,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"munich-software-craft-community",who:"Software Crafters",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/munich-software-craft-community/events/265558950/",description:"<p>For a few decades, one of the most common approaches to software design is to first focus on the domain model (application layer), then persistence (data layer) and finally the user interface (presentation layer). But what are the pros and cons of this approach? Are there other alternatives? Are they viable?</p> <p>In this presentation, Sandro will be talking about different design biases and the impact they have. He will then focus on Outside-In Design, explaining how our domain model can emerge and evolve when driven by the needs of external systems or users, avoiding speculation and wasted effort.</p> <p>Sandro Mancuso is a rarer but extremly thoughtful and inspiring speaker. Do not miss his talk.</p> ",visibility:"public",member_pay_fee:!1}]},y=n(9),b=n.n(y);function w(){return(w=Object(f.a)(v.a.mark((function e(t){var n,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,k();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,b.a.get(a);case 9:return r=e.sent,e.abrupt("return",r.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t,n){return E.apply(this,arguments)}function E(){return(E=Object(f.a)(v.a.mark((function e(t,n,a){var r,s,o,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",g.events);case 2:return e.next=4,k();case 4:if(!(r=e.sent)){e.next=15;break}return s="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+r,t&&n&&(s+="&lat="+t+"&lon="+n),a&&(s+="&page="+a),t&&n&&a&&(s+="&lat="+t+"&lon="+n+"&page="+a),e.next=12,b.a.get(s);case 12:return o=e.sent,i=o.data.events,e.abrupt("return",i);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t?O("get",t):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=pirogactd3rmjteafagap33eai&response_type=code&redirect_uri=https://sailesh-mahat.github.io/meetup/",null)}var n=localStorage.getItem("last_saved_time");return e&&Date.now()-n<36e5?e:O("renew",localStorage.getItem("refresh_token"))}function O(e,t){return j.apply(this,arguments)}function j(){return(j=Object(f.a)(v.a.mark((function e(t,n){var a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://aid3r6dc3g.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://aid3r6dc3g.execute-api.eu-central-1.amazonaws.com/dev/api/refresh/"+n),e.next=3,b.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",suggestions:[]},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),function(e){return w.apply(this,arguments)}(t).then((function(e){return n.setState({suggestions:e})}))},n.handleItemClicked=function(e,t,a){n.setState({query:e,suggestions:[]}),n.props.updateEvents(t,a)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),t}(a.Component),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={numberOfEvents:12},n.handleInputChanged=function(e){var t=e.target.value;n.setState({numberOfEvents:t})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("label",null,"Number of Events: "),r.a.createElement("input",{type:"text",id:"numberOfEvents__input",value:this.state.numberOfEvents,onChange:this.handleInputChanged}))}}]),t}(a.Component),x=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={events:[],page:null,defaultCity:"",lat:"",lon:""},n.updateEvents=function(e,t,a){e&&t?_(e,t,n.state.page).then((function(a){return n.setState({events:a,lat:e,lon:t})})):a?_(n.state.lat,n.state.lon,a).then((function(e){return n.setState({events:e,page:a})})):_(n.state.lat,n.state.lon,n.state.page).then((function(e){return n.setState({events:e})}))},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;_().then((function(t){return e.setState({events:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,{updateEvents:this.updateEvents}),r.a.createElement(C,{updateEvents:this.updateEvents,numberOfEvents:this.state.events.length,lat:this.state.lat,lon:this.state.lon}),r.a.createElement(m,{events:this.state.events}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.4d4d1d27.chunk.js.map