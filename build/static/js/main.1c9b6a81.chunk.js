(window["webpackJsonploan-calculator"]=window["webpackJsonploan-calculator"]||[]).push([[0],{19:function(e,t,a){e.exports=a(51)},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(13),s=a.n(l),c=a(14),r=a(15),m=a(17),i=a(16),h=a(18),u=a(2),d=a.n(u),p=function(e){var t=JSON.parse(localStorage.getItem("items"));return console.log("dataaaaaaa",t),t.reduce(function(e,t){return e.some(function(e){return e.amount===t.amount&&e.month===t.month})||e.push(t),e},[]).map(function(e,t){return o.a.createElement("div",{className:"h-card",key:t},o.a.createElement("ul",null,o.a.createElement("li",{style:{float:"left"}},"Loan Amount: ",e.amount),o.a.createElement("li",{style:{float:"right"}},"Duration: ",e.month)))})},g=a(3),E=a.n(g),v=[],f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(i.a)(t).call(this))).handleChangeAmount=function(t){e.setState({amount:t})},e.handleChangeMonth=function(t){e.setState({month:t})},e.state={amount:500,month:6,interestRate:0,monthlyPayment:0},e}return Object(h.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://ftl-frontend-test.herokuapp.com/interest?amount=".concat(this.state.amount,"&numMonths=").concat(this.state.month)).then(function(t){console.log("eeeeeee",t.data),e.setState({interestRate:t.data.interestRate,monthlyPayment:t.data.monthlyPayment.amount})}).catch(console.log("eeee"))}},{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.amount===t.amount&&this.state.month===t.month||E.a.get("https://ftl-frontend-test.herokuapp.com/interest?amount=".concat(this.state.amount,"&numMonths=").concat(this.state.month)).then(function(e){console.log(e.data),e.data.status&&"error"===e.data.status?console.log("Error occurred"):(console.log("aaaaaaaa",e.data),a.setState({interestRate:e.data.interestRate,monthlyPayment:e.data.monthlyPayment.amount}))}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e={amount:this.state.amount,month:this.state.month};v.push(e),localStorage.setItem("items",JSON.stringify(v));var t=JSON.parse(localStorage.getItem("items"));return console.log("daATA",t),o.a.createElement("div",{style:{position:"relative"}},o.a.createElement("div",{className:"sidenav"},o.a.createElement("p",null,"Recent Views"),o.a.createElement(p,null)),o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Loan EMI Calculator"),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-item"},o.a.createElement("div",{className:"card-heading"},o.a.createElement("p",{className:"card-h1"},"Loan Amount"),o.a.createElement("p",{className:"card-p"},"$ ",this.state.amount)),o.a.createElement("div",{className:"slider-horizontal"},o.a.createElement(d.a,{min:500,max:5e3,value:this.state.amount,orientation:"horizontal",onChangeStart:this.handleChangeStart,onChange:this.handleChangeAmount,onChangeComplete:this.handleChangeComplete}))),o.a.createElement("div",{className:"card-item"},o.a.createElement("div",{className:"card-heading"},o.a.createElement("p",{className:"card-h1"}," Duration (Months)"),o.a.createElement("p",{className:"card-p"},this.state.month," Month")),o.a.createElement("div",{className:"slider-horizontal"},o.a.createElement(d.a,{min:6,max:24,value:this.state.month,onChangeStart:this.handleChangeStart,onChange:this.handleChangeMonth,onChangeComplete:this.handleChangeComplete}))),o.a.createElement("div",{className:"card-heading"},o.a.createElement("p",{className:"card-h1"}," Interest Rate:"),o.a.createElement("p",{className:"card-p"},this.state.interestRate,"%")),o.a.createElement("div",{className:"card-heading"},o.a.createElement("p",{className:"card-h1"},"Monthly Payment:"),o.a.createElement("p",{className:"card-p"},"$",this.state.monthlyPayment," Per Month")))))}}]),t}(n.Component);a(49),a(50);var y=function(){return o.a.createElement("div",null,o.a.createElement(f,null))};s.a.render(o.a.createElement(y,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1c9b6a81.chunk.js.map