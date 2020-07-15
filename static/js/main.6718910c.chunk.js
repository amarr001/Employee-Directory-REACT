(this.webpackJsonpreactpractice=this.webpackJsonpreactpractice||[]).push([[0],{31:function(e,t,a){e.exports=a(65)},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),c=a.n(r),o=a(8),m=a(1),s=a(17),i=a(10),u=a(11),p=a(13),h=a(12),E=a(29),v=a.n(E),d=function(){return v.a.get("https://randomuser.me/api/?results=20")},f=(a(53),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row mb-2"},l.a.createElement("div",{className:"col-md-2"},l.a.createElement("img",{alt:"User",src:this.props.picture})),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("h5",null,this.props.firstname)),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("h5",null,this.props.lastname)),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("p",null,this.props.email)))}}]),a}(l.a.Component));var b=function(e){return l.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};a(54);var g=function(e){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"search"},"Search by name:"),l.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For an Employee",id:"search"}),l.a.createElement("br",null),l.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary"},"Search")))},y=[],N=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={results:[],search:""},e.loadEmployees=function(){d().then((function(t){e.setState({results:t.data.results}),y=Object(s.a)(t.data.results),console.log(y),console.log(e.state.results)})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault();var a=Object(s.a)(y).filter((function(t){return t.name.first===e.state.search}));e.setState({results:a}),console.log(a)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.loadEmployees()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"text-center my-4"},"Meet our best people"),l.a.createElement(b,{style:{minHeight:"80%"}},l.a.createElement("h1",{className:"text-center"}),l.a.createElement(g,{value:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange})),l.a.createElement("ul",null,this.state.results.map((function(e){var t=e.picture,a=e.name,n=e.email;return l.a.createElement("li",null,l.a.createElement(f,{picture:t.thumbnail,firstname:a.first,lastname:a.last,email:n}))}))))}}]),a}(n.Component);a(55);var j=function(e){return l.a.createElement("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")}},e.children)};var k=function(e){return l.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e))};var O=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return l.a.createElement("div",Object.assign({className:t},e))};var w=function(){return l.a.createElement("div",null,l.a.createElement(j,{backgroundImage:"https://image.freepik.com/free-vector/flat-multiracial-group-people_52683-19067.jpg"},l.a.createElement("h1",null,"Employee Directory"),l.a.createElement("h2",null,"Find the best people here!")),l.a.createElement(b,{style:{marginTop:30}},l.a.createElement(k,null,l.a.createElement(O,{size:"md-12"},l.a.createElement("h1",null,"Welcome to TTR Employee Directory!"))),l.a.createElement(k,null,l.a.createElement(O,{size:"md-12"},l.a.createElement("p",null)))))};a(56);var S=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Employee Directory"),l.a.createElement("div",null,l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/",className:"/"===window.location.pathname||"/about"===window.location.pathname?"nav-link active":"nav-link"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/discover",className:"/discover"===window.location.pathname?"nav-link active":"nav-link"},"Employees")))))};a(62);var x=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("span",null,"Employee Directory 2020"))};a(63);var C=function(e){return l.a.createElement("main",Object.assign({className:"wrapper"},e))};var I=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(S,null),l.a.createElement(C,null,l.a.createElement(m.a,{exact:!0,path:"/",component:w}),l.a.createElement(m.a,{exact:!0,path:"/about",component:w}),l.a.createElement(m.a,{exact:!0,path:"/discover",component:N})),l.a.createElement(x,null)))};a(64);c.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.6718910c.chunk.js.map