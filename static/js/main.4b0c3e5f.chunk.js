(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(14),i=n.n(s),r=(n(19),n(5)),o=n(6),h=n(8),l=n(7),u=n(3),d=(n(20),n(11)),m=n(1),p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={search:""},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(o.a)(n,[{key:"handleChange",value:function(e){var t=this;this.setState({search:e.target.value},(function(){t.handleSubmit()})),console.log(window.innerWidth)}},{key:"handleSubmit",value:function(){var e=this,t=this.state.search.replace(" ","+");fetch("https://api.spotify.com/v1/search?q=".concat(t,"&type=track"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+this.props.token}}).then((function(e){return e.json()})).then((function(t){return void 0!==t.tracks?e.props.updateItems(t.tracks.items):e.props.updateItems([])}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"search-bar",children:[Object(m.jsx)("input",{className:"input",placeholder:"Search you Favourite Music",type:"text",value:this.state.search,onChange:this.handleChange}),Object(m.jsx)("h2",{className:"title",style:{display:this.state.search.length>0&&window.innerWidth<=920?"none":"block"},children:"Search In from the wide range of collections."})]})}}]),n}(c.a.Component),j=n(13),b=(n(27),n(28),n(12)),f=function(e){var t=Math.floor(e/6e4),n=(e%6e4/1e3).toFixed(0);return"".concat(t,":").concat(n<10?"0":"").concat(n)},O=function(e){return Object(m.jsxs)("div",{className:"item-card",children:[Object(m.jsx)("div",{className:"item-image",style:{backgroundImage:"url(".concat(e.album.images[0].url,")")}}),Object(m.jsxs)("div",{className:"item-details",children:[Object(m.jsx)("div",{className:"item-name",children:e.name}),Object(m.jsxs)("div",{className:"item-artist",children:["Music By : ",e.artists.map((function(e){return e.name+", "}))]}),Object(m.jsxs)("div",{className:"item-duration",children:["Duration : ",f(e.duration_ms)]})]}),Object(m.jsx)("a",{href:e.external_urls.spotify,target:"_blank",rel:"noopener noreferrer",className:"play-button",children:Object(m.jsx)(d.a,{className:"play-icon",icon:b.a})})]})},v=function(e){var t=e.items;return Object(m.jsx)("div",{className:"list",children:t.map((function(e,t){return Object(a.createElement)(O,Object(j.a)(Object(j.a)({},e),{},{key:t}))}))})},k=(n(29),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).updateItems=function(t){e.setState({searchedItems:t},(function(){console.log(e.state)}))},e.state={token:"",searchedItems:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+btoa("a0405fea39d946258aa3f328bc0e3a71:0c68d04ade504af69422c9d52ae4480a")},body:"grant_type=client_credentials"}).then((function(e){return e.json()})).then((function(t){return e.setState({token:t.access_token})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{className:"main-body",children:[Object(m.jsx)(p,{token:this.state.token,updateItems:this.updateItems}),Object(m.jsx)(v,{items:this.state.searchedItems})]}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/abhishekm2106/",target:"_blank",rel:"noopener noreferrer",className:"credits",children:"Abhishek Mohanty"})]})}}]),n}(c.a.Component));i.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.4b0c3e5f.chunk.js.map