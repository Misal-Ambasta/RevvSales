(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,a){e.exports=a(52)},27:function(e,t,a){},28:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(20),r=a.n(l),s=(a(27),a(28),a(2)),c=a(3),i=a(5),m=a(4),p=a(6),d=a.n(p),u=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleDoc=function(e){var t=n.state.data[0].data.User.access_token;d()({method:"post",headers:{AccessToken:t,"Content-Type":"application/json"},url:"https://cors-anywhere.herokuapp.com/https://api.revvsales.com/api/docs",data:{template_id:e}}).then((function(e){return n.setState({objId:e.data.Document.object_id,show:!0})})).then(n.handlePermaLink).catch((function(e){return alert(e)}))},n.handlePermaLink=function(){var e=n.props.data[0].data.User.access_token;console.log(n.state.objId,"obj"),d()("https://cors-anywhere.herokuapp.com/https://api.revvsales.com/api/folders/?page_num=1&sort_by_doc_num=true",{method:"get",headers:{AccessToken:e,"Content-Type":"application/json"}}).then((function(e){return n.setState({docno:e.data.page.inodes[1].doc_no,link:"https://ft890220.revvsales.com/documents/".concat(e.data.page.inodes[1].doc_no)})})).catch((function(e){return alert(e)})).then((function(e){""!=n.state.docno&&window.open(n.state.link)}))},n.state={TempData:n.props.TempData,show:!1,ObjId:"",docno:"",link:"",data:n.props.data},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props.TempData,this.state.docno,this.state.link,this.props.TempData),o.a.createElement(o.a.Fragment,null,this.props.TempData.length>0?o.a.createElement("div",{className:"DocsContainer"},this.props.TempData[0].data.Templates.map((function(t){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("img",{src:t.thumbnail,id:t.id,onClick:function(){return e.handleDoc(t.id)},style:{height:"95%",width:"150px"}}),o.a.createElement("div",null,t.title)))}))):o.a.createElement(o.a.Fragment,null))}}]),a}(n.Component),h=a(21),g=o.a.createContext(),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleMicChange=function(){var e=window.localStorage.getItem("name");e.length>0&&n.setState({email:e})},n.handleChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(h.a)({},a,o))},n.state={email:"",password:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=this.handleChange,l=this.handleMicChange;return o.a.createElement(g.Provider,{value:{email:t,password:a,handleChange:n,handleMicChange:l}},this.props.children)}}]),a}(o.a.Component),E=a(7),f=a.n(E),w=function(){var e=Object(E.useSpeechRecognition)(),t=e.transcript,a=(e.resetTranscript,t.split(" ").join(""));return a=a.toLowerCase(),console.log(a),f.a.browserSupportsSpeechRecognition()?(window.localStorage.setItem("name",a),o.a.createElement(g.Consumer,null,(function(e){var t=e.handleMicChange;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("img",{src:"https://www.flaticon.com/svg/static/icons/svg/2983/2983820.svg",style:{marginLeft:"0px",width:"20px",height:"20px"},onClick:f.a.startListening,onMouseLeave:t})))}))):null},b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleAllDocs=function(){var e=n.state.data[0].data.User.access_token;console.log(e),d()("https://cors-anywhere.herokuapp.com/https://api.revvsales.com/api/docstemplate/?page_num=1&status=ACTIVE",{method:"get",headers:{"Content-Type":"application/json",AccessToken:e}}).then((function(e){n.setState({TempData:[e]})})).catch((function(e){n.setState({error:"Invalid Email or Password"})}))},n.handleLogin=function(e){console.log(n.context.email,n.context.password),d()({method:"post",headers:{"Content-Type":"application/json",GrantType:"password"},url:"https://cors-anywhere.herokuapp.com/https://api.revvsales.com/api/v2/auth/initiate-auth",data:{user_email:n.context.email,password:n.context.password,org_domain:n.state.org_domain}}).then((function(e){console.log(e),e.data.User.access_token.length>0&&n.setState({data:[e]})})).catch((function(e){n.setState({error:"Invalid Email or Password"})}))},n.handleRecord=function(){},n.handleTemp=function(){window.open("https://ft890220.revvsales.com/templates/library")},n.state={data:[],error:"",TempData:[],org_domain:"ft890220"},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.TempData,n=this.context,l=n.email,r=n.password,s=n.handleChange;n.handleMicChange;return o.a.createElement(o.a.Fragment,null,0===this.state.data.length?o.a.createElement("div",{className:"backgroundImage"},o.a.createElement("div",null,o.a.createElement("h1",{className:"logo"},o.a.createElement("img",{className:"logo-icon",src:"Revvsales_logo.png",style:{width:"20%",height:"35px"}}))),o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("div",{className:"emailBox"},o.a.createElement("label",{className:"emailInput"},"Email:"),o.a.createElement("input",{type:"email",name:"email",value:l,onChange:s,className:"form-control",id:"inputEmail3",placeholder:"Enter the email"}),o.a.createElement("div",{class:"input-group-append"},o.a.createElement("span",{class:"input-group-text",id:"basic-addon2"}),o.a.createElement("div",{className:"mic"},o.a.createElement(w,null)))),o.a.createElement("div",{class:"input-group mb-3"},o.a.createElement("label",{class:"col-sm-2 col-form-label col-form-label-sm"},"Password:"),o.a.createElement("input",{type:"password",name:"password",value:r,onChange:s,className:"form-control",id:"inputPassword3",placeholder:"Enter the password"})),o.a.createElement("button",{type:"button",onClick:this.handleLogin,className:"login"},"Login")),o.a.createElement("div",{style:{marginTop:"20px",color:"red"}},this.state.error))):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{padding:"20px"}},o.a.createElement("div",{style:{display:"flex",marginLeft:"15%"}},o.a.createElement("div",null,o.a.createElement("img",{src:t[0].data.User.image_url,className:"avatarImg ",alt:t[0].data.User.first_name})),o.a.createElement("div",null,o.a.createElement("h4",null,t[0].data.User.first_name.toUpperCase()))),o.a.createElement("div",{style:{marginTop:"20px"}},o.a.createElement("p",null,o.a.createElement("button",{className:"createBtn",onClick:this.handleAllDocs}," ","Create Document"),o.a.createElement("button",{className:"createBtn",onClick:this.handleTemp},"Create Template")),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(u,{TempData:a,data:this.state.data,org_domain:this.state.org_domain})))))))}}]),a}(n.Component);b.contextType=g;var C=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(b,null))};r.a.render(o.a.createElement(v,null,o.a.createElement(C,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a2994444.chunk.js.map