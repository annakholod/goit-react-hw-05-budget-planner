(this["webpackJsonpgoit-react-hw-05-budget-planner"]=this["webpackJsonpgoit-react-hw-05-budget-planner"]||[]).push([[0],{27:function(e,n,t){e.exports=t(49)},48:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),u=t(8),o=t.n(u),c=t(6),l=t(3),i=t(4);function p(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 100%;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return p=function(){return e},e}var s=i.a.form(p()),d=function(e){var n=e.onSubmit,t=e.children;return a.a.createElement(s,{onSubmit:n},t)};d.defaultProps={onSubmit:function(){return null}};var b=d;function f(){var e=Object(l.a)(["\n  display: inline-block;\n  font-size: 20px;\n  color: #171718;\n  cursor: pointer;\n  ","\n"]);return f=function(){return e},e}var m=i.a.label(f(),(function(e){return e.customStyles})),E=function(e){var n=e.children,t=e.customStyles;return a.a.createElement(m,{customStyles:t},n)};function g(){var e=Object(l.a)(["\n  color: #171718;\n  font: inherit;\n  font-size: 1.2rem;\n  padding: 16px;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 100%;\n  outline: 0;\n\n  &:focus {\n    border: 1px solid #2b32b2;\n  }\n"]);return g=function(){return e},e}var x=i.a.input(g()),v=function(e){var n=e.type,t=e.value,r=e.onChange,u=e.name;return a.a.createElement(x,{type:n,value:t,onChange:r,name:u})};v.defaultProps={type:"text",value:"",onChange:function(){return null},name:""};var y=v;function h(){var e=Object(l.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #3f51b5;\n  border: 0;\n  outline: 0;\n  padding: 8px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);\n  font: inherit;\n  text-transform: uppercase;\n  user-select: none;\n\n  transition: background-color 200ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);\n    background-color: #303f9f;\n  }\n"]);return h=function(){return e},e}var O=i.a.button(h()),j=function(e){var n=e.type,t=e.label,r=e.onClick;return a.a.createElement(O,{type:n,onClick:r},t)};j.defaultProps={type:"button",label:"",onClick:function(){return null}};var P=j,N=t(10),w=function(){return Object(N.b)("\u0421\u0443\u043c\u043c\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439!")},S=function(e){var n=e.budgetInput,t=e.changeBudget,r=e.clearInput,u=e.addBudget;return a.a.createElement(b,{onSubmit:function(e){e.preventDefault(),n.includes("-")?w():n&&"0"!==n?u(n):Object(N.b)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0431\u044e\u0434\u0436\u0435\u0442"),r()}},a.a.createElement(E,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter your total budget",a.a.createElement(y,{type:"number",value:n,onChange:t})),a.a.createElement(P,{label:"Save",type:"submit"}))},_=t(14),A=function(e){return e.budgetInput},C=function(e){return e.currentExpense},D=function(e){return e.currentExpense.name},I=function(e){return e.currentExpense.amount},T=function(e){return e.expenses},U=function(e){return e.budgetValue},k=Object(_.a)(T,(function(e){return e.reduce((function(e,n){return e+Number(n.amount)}),0)})),B=Object(_.a)(U,k,(function(e,n){return Number(e)-Number(n)})),G=Object(_.a)(T,(function(e){return e.length})),L={changeBudget:function(e){return{type:"CHANGE_BUDGET_INPUT",payload:e.target.value}},clearInput:function(){return{type:"CLEAR_INPUT"}},addBudget:function(e){return{type:"ADD_BUDGET",payload:+e}}},X=Object(c.b)((function(e){return{budgetInput:A(e)}}),L)(S),R=t(22),H=t(23),z=t.n(H);t(47);function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var V=function(e){var n=e.name,t=e.amount,r=e.currentExpense,u=e.changeExpenseName,o=e.changeExpenseAmount,c=e.addExpense,l=e.clearInput,i=e.balance;return a.a.createElement(b,{onSubmit:function(e){e.preventDefault();var a=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(t,!0).forEach((function(n){Object(R.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},r,{id:z.a.generate()});""!==n?t.includes("-")?w():t&&"0"!==t?t<=i?(c(a),l()):Object(N.b)("\u0421\u0443\u043c\u043c\u0430 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 \u0431\u0430\u043b\u0430\u043d\u0441!"):Object(N.b)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432"):Object(N.b)("Please input expense name!")}},a.a.createElement(E,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense name",a.a.createElement(y,{type:"text",name:"name",value:n,onChange:u})),a.a.createElement(E,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense amount",a.a.createElement(y,{type:"number",name:"amount",value:t,onChange:o})),a.a.createElement(P,{label:"Add",type:"submit"}),a.a.createElement(N.a,null))},F={changeExpenseName:function(e){return{type:"CHANGE_EXPENSE_NAME",payload:e.target.value}},changeExpenseAmount:function(e){return{type:"CHANGE_EXPENSE_AMOUNT",payload:e.target.value}},clearInput:function(){return{type:"CLEAR_INPUT"}},addExpense:function(e){return{type:"ADD_EXPENSE",payload:e}}},J=Object(c.b)((function(e){return{name:D(e),amount:I(e),currentExpense:C(e),balance:B(e)}}),F)(V);function $(){var e=Object(l.a)(["\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n\n  tr {\n    border-bottom: 1px solid #212121;\n  }\n\n  td,\n  th {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);return $=function(){return e},e}var q=i.a.table($()),K=function(e){var n=e.expenses,t=e.deleteExpense;return a.a.createElement(q,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Expense name"),a.a.createElement("th",null,"Expense amount"),a.a.createElement("th",null))),a.a.createElement("tbody",null,n.map((function(e){var n=e.id,r=e.name,u=e.amount;return a.a.createElement("tr",{key:n},a.a.createElement("td",null,r),a.a.createElement("td",null,u),a.a.createElement("td",null,a.a.createElement(P,{label:"Delete",onClick:function(){return t(n)}})))}))))},Q={deleteExpense:function(e){return{type:"DELETE_EXPENSE",payload:e}}},W=Object(c.b)((function(e){return{expenses:T(e)}}),Q)(K);function Y(){var e=Object(l.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n"]);return Y=function(){return e},e}function Z(){var e=Object(l.a)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 24px;\n"]);return Z=function(){return e},e}function ee(){var e=Object(l.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return ee=function(){return e},e}var ne=i.a.div(ee(),(function(e){return e.isPositive?"#388E3C":"#D32F2F"})),te=i.a.p(Z()),re=i.a.p(Y()),ae=function(e){var n=e.label,t=e.value,r=e.isPositive;return a.a.createElement(ne,{isPositive:r},a.a.createElement(te,null,n),a.a.createElement(re,null,t,"\xa0$"))};ae.defaultProps={isPositive:!1};var ue=ae;function oe(){var e=Object(l.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return oe=function(){return e},e}var ce=i.a.section(oe()),le=function(e){var n=e.budgetValue,t=e.expenses,r=e.balance;return a.a.createElement(ce,null,a.a.createElement(ue,{label:"Budget",value:n,isPositive:!0}),a.a.createElement(ue,{label:"Expenses",value:t}),a.a.createElement(ue,{label:"Balance",value:r,isPositive:r>=0}))},ie=Object(c.b)((function(e){return{budgetValue:U(e),expenses:k(e),balance:B(e)}}),null)(le);function pe(){var e=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  align-items: flex-start;\n  grid-gap: 24px;\n  max-width: 960px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return pe=function(){return e},e}var se=i.a.div(pe()),de=function(e){var n=e.expensesLength;return a.a.createElement(se,null,a.a.createElement(X,null),a.a.createElement(ie,null),a.a.createElement(J,null),n>0&&a.a.createElement(W,null))},be=Object(c.b)((function(e){return{expensesLength:G(e)}}),null)(de),fe=t(9),me=t(24),Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHANGE_BUDGET_INPUT":return n.payload;case"CLEAR_INPUT":return"";default:return e}},ge=Object(fe.combineReducers)({name:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHANGE_EXPENSE_NAME":return n.payload;case"CLEAR_INPUT":return"";default:return e}},amount:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHANGE_EXPENSE_AMOUNT":return n.payload;case"CLEAR_INPUT":return"";default:return e}}}),xe=t(25),ve=[],ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_EXPENSE":return[].concat(Object(xe.a)(e),[n.payload]);case"DELETE_EXPENSE":return e.filter((function(e){return e.id!==n.payload}));default:return e}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_BUDGET":return n.payload;default:return e}},Oe=Object(fe.combineReducers)({budgetInput:Ee,budgetValue:he,currentExpense:ge,expenses:ye}),je=Object(fe.createStore)(Oe,Object(me.devToolsEnhancer)());t(48);o.a.render(a.a.createElement(c.a,{store:je},a.a.createElement(be,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.668c0550.chunk.js.map