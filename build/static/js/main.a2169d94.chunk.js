(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__2Xruw",labelText:"Filter_labelText__S0Bx0",input:"Filter_input__18X6Q"}},12:function(t,e,n){t.exports={item:"ContactList_item__1Gf0O"}},13:function(t,e,n){t.exports={section:"Section_section__30nNx",title:"Section_title__3IHCe"}},15:function(t,e,n){t.exports={Container:"Container_Container__xmWGh"}},17:function(t,e,n){t.exports={button:"ButtonTypeButton_button__3edDh"}},2:function(t,e,n){t.exports={button:"ContactForm_button__29knJ",label:"ContactForm_label__2gojU",labelText:"ContactForm_labelText__2Clip",input:"ContactForm_input__33Aqa"}},25:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(14),o=n.n(r),i=(n(24),n(25),n(18)),s=n(5),l=n(6),u=n(8),b=n(7),m=n(3),d=n.n(m),h=n(15),j=n.n(h),p=n(0),f=function(t){var e=t.children;return Object(p.jsx)("div",{className:j.a.Container,children:e})},x=n(16),C=n(2),O=n.n(C),_=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=d.a.generate(),t.numberInputId=d.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(x.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=t.props,o=r.onSubmit,i=r.contacts,s=a.toLowerCase();if(i.some((function(t){return t.name.toLowerCase()===s||t.number===c})))return alert("Contact with such ".concat(a," name or ").concat(c," number is already in Phonebook")),void t.reset();o(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsxs)("form",{className:O.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:O.a.label,htmlFor:this.nameInputId,children:[Object(p.jsx)("span",{className:O.a.labelText,children:"Name"}),Object(p.jsx)("input",{className:O.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:this.nameInputId})]}),Object(p.jsxs)("label",{className:O.a.label,htmlFor:this.numberInputId,children:[Object(p.jsx)("span",{className:O.a.labelText,children:"Number"}),Object(p.jsx)("input",{className:O.a.input,type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:this.numberInputId})]}),Object(p.jsx)("button",{type:"submit",className:O.a.button,children:"Add Contact"})]})}}]),n}(a.Component),v=n(17),g=n.n(v),N=function(t){var e=t.children,n=t.onClick;return Object(p.jsx)("button",{type:"button",className:g.a.button,onClick:n,children:e})};N.defaultProps={onClick:function(){return null},children:null};var S=N,I=n(9),y=n.n(I),k=function(t){var e=t.name,n=t.number;return Object(p.jsxs)("div",{className:y.a.wrapper,children:[Object(p.jsx)("p",{className:y.a.contact,children:e}),Object(p.jsx)("p",{className:y.a.contact,children:n})]})},w=n(19),F=n(12),A=n.n(F),T=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:A.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{className:A.a.item,children:[Object(p.jsx)(k,{name:a,number:c}),Object(p.jsxs)(S,{onClick:function(){return n(a)},children:[Object(p.jsx)(w.a,{})," Delete"]})]},e)}))})},D=n(10),J=n.n(D),z=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:J.a.label,children:[Object(p.jsx)("span",{className:J.a.labelText,children:"Find contacts by name"}),Object(p.jsx)("input",{className:J.a.input,type:"text",value:e,onChange:n})]})},B=n(13),L=n.n(B),q=function(t){var e=t.title,n=t.children;return Object(p.jsxs)("div",{className:L.a.section,children:[Object(p.jsx)("h2",{className:L.a.title,children:e}),n]})},E=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:d.a.generate(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(i.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.name!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contact"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contact",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts();return Object(p.jsxs)(f,{children:[Object(p.jsx)(q,{title:"Phonebook",children:Object(p.jsx)(_,{onSubmit:this.addContact,contacts:e})}),Object(p.jsxs)(q,{title:"Contacts",children:[Object(p.jsx)(z,{value:n,onChange:this.changeFilter}),Object(p.jsx)(T,{contacts:a,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={wrapper:"ContactItem_wrapper__2EmJz",contact:"ContactItem_contact__12_I5"}}},[[35,1,2]]]);
//# sourceMappingURL=main.a2169d94.chunk.js.map