(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,n){},21:function(e,a,n){},23:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(7),o=n.n(i),l=(n(17),n(19),n(1)),c=n(2),s=n(4),m=n(3),u=n(5),h=function(e){var a=e.name,n=e.email,t=e.id;return r.a.createElement("div",{className:"bg-gray dib br4 pa3 ma2 grow bw3 shadow-5 tc card"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null," ",a," "),r.a.createElement("p",null," ",n," ")))},d=function(e){return e.robots.map(function(e,a){return r.a.createElement(h,{key:e.id,id:e.id,name:e.name,email:e.email})})},b=function(e){e.searchField;var a=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{type:"search",placeholder:"search robots",className:"pa2 ba b--red br2 bg-lightest-gray",onChange:a}))},p=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",borderTop:"1px solid red",height:"800px",marginTop:"10px"}},e.children)},f=function(e){function a(e){var n;return Object(l.a)(this,a),(n=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={hasError:!1},n}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," Ups Thats not goood"):this.props.children}}]),a}(t.Component),g=(n(21),function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).onSearchChange=function(a){e.setState({searchField:a.target.value})},e.state={robots:[],searchField:""},e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(a){return e.setState({robots:a})})}},{key:"render",value:function(){var e=this.state,a=e.robots,n=e.searchField,t=a.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return a.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboAmigos"),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(p,null,r.a.createElement(f,null,r.a.createElement(d,{robots:t})))):r.a.createElement("h1",null,"Loading")}}]),a}(t.Component));o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{robots:[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]}))))},8:function(e,a,n){e.exports=n(23)}},[[8,2,1]]]);
//# sourceMappingURL=main.c7145033.chunk.js.map