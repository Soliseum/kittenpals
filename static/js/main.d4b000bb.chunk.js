(this.webpackJsonpkittenpals=this.webpackJsonpkittenpals||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),a=n(7),i=n.n(a),h=n(2),o=n(3),l=n(5),j=n(4),d=function(e){var t=e.id,n=e.name,r=e.email;return Object(c.jsxs)("div",{className:"bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(c.jsx)("img",{alt:"robots",src:"https://robohash.org/set_set4/".concat(t+12,"?size=275x275")}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:n}),Object(c.jsx)("p",{children:r})]})]})},u=function(e){var t=e.kittens;return Object(c.jsx)("div",{children:t.map((function(e,t){return Object(c.jsx)(d,{id:e.id,name:e.name,email:e.email},t)}))})},b=function(e){var t=e.searchChange;return Object(c.jsx)("div",{className:"pa2",children:Object(c.jsx)("input",{className:"pa3 ba br3 b--light-green bg-lightest-blue",type:"search",placeholder:"search kittens",onChange:t})})},O=function(e){return Object(c.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"700px"},children:e.children})},f=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(o.a)(n,[{key:"componentsDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(c.jsx)("h1",{children:"Call the Handyman. Something broke."}):this.props.children}}]),n}(r.Component),p=(n(13),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={kittens:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({kittens:t})}))}},{key:"render",value:function(){var e=this.state,t=e.kittens,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1",children:"KittenPals"}),Object(c.jsx)(b,{searchChange:this.onSearchChange}),Object(c.jsx)(O,{children:Object(c.jsx)(f,{children:Object(c.jsx)(u,{kittens:r})})})]}):Object(c.jsx)("div",{className:"tc",children:Object(c.jsx)("h1",{className:"f1",children:"Loading"})})}}]),n}(r.Component));n(14),n(15);i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d4b000bb.chunk.js.map