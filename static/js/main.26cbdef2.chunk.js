(this.webpackJsonptodo_list_v2=this.webpackJsonptodo_list_v2||[]).push([[0],{13:function(e,t,a){e.exports=a(23)},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),c=(a(18),a(7)),i=a(1),s=a(2),m=a(4),d=a(3),u=a(5),h=(a(19),a(20),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).getStyle=function(){return{textDecoration:a.props.todo.completed?"line-through":"none"}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title;return r.a.createElement("div",{style:this.getStyle(),className:"itemList"},r.a.createElement("p",null,r.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)}),a,r.a.createElement("button",{onClick:this.props.deleteItem.bind(this,t),className:"btnStyle"},"X")))}}]),t}(n.Component)),p=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return r.a.createElement(h,{key:t.id,todo:t,markComplete:e.props.markComplete,deleteItem:e.props.deleteItem})}))}}]),t}(n.Component);var f=function(){return r.a.createElement("header",{className:"headerStyle"},r.a.createElement("h1",null,"Todo List"))},b=a(12),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={title:""},a.onChange=function(e){return a.setState(Object(b.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),a.props.addTodoItem(a.state.title),a.setState({title:""})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit,className:"formStyle"},r.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo ....",className:"inputStyle",value:this.state.title,onChange:this.onChange}),r.a.createElement("input",{type:"submit",value:"Submit",style:y,className:"btn"}))}}]),t}(n.Component),y={flex:"1"},E=v,j=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"searchBarStyle"},r.a.createElement("input",{type:"text",placeholder:"Search ....",className:"searchStyle",onChange:this.props.searchItem}))}}]),t}(n.Component),C={},O={borderColor:"red"},I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={activeIndex:a.props.defaultIndex||0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.activeIndex,a=r.a.Children.map(this.props.children,(function(a,n){var o=t===n?O:C;return r.a.createElement("button",{style:o,className:"tabButton",onClick:function(){e.setState({activeIndex:n}),e.props.filterView(n)}},a.props.label)}));return r.a.createElement("div",{className:"tabStyle"},r.a.createElement("div",{className:"tabStyle__tabs"},a),this.props.children[this.state.activeIndex])}}]),t}(n.Component),w=a(6),S=a.n(w),k=[{id:S.a.v4(),title:"Take the trash",completed:!1},{id:S.a.v4(),title:"Clean Room",completed:!1},{id:S.a.v4(),title:"Meeting in the morning",completed:!1},{id:S.a.v4(),title:"Do Shopping",completed:!1}];var g=function(){return r.a.createElement("footer",{className:"footerStyle"},r.a.createElement("div",{className:"container "},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h1",null,"Todo List ")),r.a.createElement("div",{className:"col-3"},r.a.createElement("ul",null,r.a.createElement("li",null,"Github"),r.a.createElement("li",null,"Links"))))))},N=function(e){var t=e.children;return r.a.createElement("div",null,t)},x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={todos:k,searchedItems:k,filterViews:"all",searchKeyword:""},a.markComplete=function(e){a.setState({todos:a.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},a.addTodoItem=function(e){var t={id:S.a.v4(),title:e,completed:!1};e&&(a.setState({todos:[].concat(Object(c.a)(a.state.todos),[t])}),a.setState({searchedItems:[].concat(Object(c.a)(a.state.searchedItems),[t])}))},a.deleteTodoItem=function(e){a.setState({todos:Object(c.a)(a.state.todos.filter((function(t){return t.id!==e})))}),a.setState({searchedItems:Object(c.a)(a.state.searchedItems.filter((function(t){return t.id!==e})))})},a.searchItem=function(e){var t=e.target.value;a.setState({searchKeyword:t,searchedItems:a.state.todos.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))})},a.filterView=function(e){var t;t=1===e?"completed":2===e?"inCompleted":"all",a.setState({filterViews:t})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this;return e="completed"===this.state.filterViews?this.state.todos.filter((function(e){return!0===e.completed})):"inCompleted"===this.state.filterViews?this.state.todos.filter((function(e){return!1===e.completed})):this.state.todos,this.state.searchKeyword&&(e=e.filter((function(e){return e.title.toLowerCase().includes(t.state.searchKeyword.toLowerCase())}))),r.a.createElement("div",{className:"App Container"},r.a.createElement(f,null),r.a.createElement(j,{searchItem:this.searchItem}),r.a.createElement(I,{defaultIndex:0,filterView:this.filterView},r.a.createElement(N,{label:"Home"},r.a.createElement(E,{addTodoItem:this.addTodoItem}),r.a.createElement(p,{todos:e,markComplete:this.markComplete,deleteItem:this.deleteTodoItem})),r.a.createElement(N,{label:"Completed"},r.a.createElement(p,{todos:e,markComplete:this.markComplete,deleteItem:this.deleteTodoItem})),r.a.createElement(N,{label:"InComplete"},r.a.createElement(p,{todos:e,markComplete:this.markComplete,deleteItem:this.deleteTodoItem}))),r.a.createElement(g,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.26cbdef2.chunk.js.map