(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(5),l=t.n(i),c=(t(14),t(7)),d=t(2),m=(t(15),t(1)),u=t(6),o=(t(4),function(e){var n={id:null,a:"",b:"",c:""},t=Object(a.useState)(n),i=Object(d.a)(t,2),l=i[0],c=i[1],o=function(e){var n=e.target,t=n.name,a=n.value;c(Object(u.a)({},l,Object(m.a)({},t,a)))};return r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),l.a&&l.b&&l.c){var a=document.getElementById("a"),r=document.getElementById("x1"),i=document.getElementById("x2"),d=document.getElementById("erreur"),m=document.getElementById("erreur1"),u=document.getElementById("erreur2"),o=document.getElementById("solutionpositif");isNaN(l.a)?(d.innerHTML="Entrer un nombre",a.innerHTML="",r.innerHTML="",i.innerHTML="",o.innerHTML=""):isNaN(l.b)?(m.innerHTML="Entrer un nombre",a.innerHTML="",r.innerHTML="",i.innerHTML="",o.innerHTML=""):isNaN(l.c)?(u.innerHTML="Entrer un nombre",a.innerHTML="",r.innerHTML="",i.innerHTML="",o.innerHTML=""):(document.getElementById("erreur").innerHTML="",document.getElementById("erreur1").innerHTML="",document.getElementById("erreur2").innerHTML="",e.addUser(l),c(n))}}},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("label",{id:"nom"},r.a.createElement("span",{id:"indicea"},"Indice a")," \xa0\xa0")),r.a.createElement("td",null,r.a.createElement("input",{id:"zonetext1",type:"text",name:"a",value:l.a,onChange:o,required:!0}),r.a.createElement("p",{id:"erreur"}))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("label",{id:"nom"},r.a.createElement("span",{id:"indicea"},"Indice b")," ")),r.a.createElement("td",null,r.a.createElement("input",{id:"zonetext2",type:"text",name:"b",value:l.b,onChange:o,required:!0}),r.a.createElement("p",{id:"erreur1"}))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("label",{id:"nom"},r.a.createElement("span",{id:"indicea"},"indice c")," ")),r.a.createElement("td",null,r.a.createElement("input",{type:"text",id:"zonetext3",name:"c",value:l.c,onChange:o,required:!0}),r.a.createElement("p",{id:"erreur2"}))))),r.a.createElement("button",{id:"boutton",type:"submit",onClick:function(){!function(){var e=document.getElementById("a"),n=document.getElementById("x1"),t=document.getElementById("x2"),a=document.getElementById("solutionpositif"),r=document.getElementById("delta"),i=document.getElementById("racinedelta"),c=parseInt(l.a),d=parseInt(l.b),m=parseInt(l.c);if(0===c)n.innerHTML="",t.innerHTML="",r.innerHTML="",i.innerHTML="",a.innerHTML="",e.innerHTML="<span id='premierdegree'>L'\xe9quation devient une \xe9quation du premier degr\xe9e</span><br><span id='entierb'>"+d+"</span> x + <span id='entierc'>"+m+"</span> = 0";else{var u=Math.pow(d,2)-c*m*4;if(e.innerHTML=u,u<0)e.innerHTML="<span id='negatif'>\u0394 est n\xe9gatif donc <br>la solution est vide <br> S = { }</span>",n.innerHTML="",t.innerHTML="",a.innerHTML="",r.innerHTML="",i.innerHTML="";else if(0===u){n.innerHTML="",t.innerHTML="",a.innerHTML="",r.innerHTML="",i.innerHTML="";var o=-d/(2*c);r.innerHTML="\u0394 = "+u+"<br>",e.innerHTML='<span id="doublesolution">Une Solution Unique<br> x<sub>1</sub>  = '+o+"<br> S = { "+o+" }</span>"}else{var s=document.getElementById("zonetext1"),E=document.getElementById("zonetext2"),p=document.getElementById("zonetext3"),b=document.getElementById("erreur"),M=document.getElementById("erreur1"),L=document.getElementById("erreur2");if(e.innerHTML="",n.innerHTML="",t.innerHTML="",a.innerHTML="",r.innerHTML="",i.innerHTML="",""===s.value)document.getElementById("a").innerHTML="",""===E.value&&(b.innerHTML="Veuillez remplir le champ 1"),""===p.value&&(M.innerHTML="Veuillez remplir le champ 2"),""===p.value&&(L.innerHTML="Veuillez remplir le champ 3");else{var T=Math.sqrt(u),H=(-d+T)/(2*c),g=(-d-T)/(2*c);r.innerHTML="\u0394 = <span id='spandelta'>"+u+"</span><br>",i.innerHTML="\u221a\u0394 = <span id='spandelta'>"+T+"</span><br>",e.innerHTML='<span id="deuxracine">Deux racines  distincts x<sub>1</sub>,x<sub>2</sub><br></span>',n.innerHTML="x<sub>1</sub> = "+H,t.innerHTML="x<sub>2</sub> = "+g+"<br>",a.innerHTML="<span id='solution'>S = { "+H+" , "+g+" }</span>"}}}}()},className:"btn btn-primary btn-lg"},"Calculer"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",{id:"delta"}),r.a.createElement("h4",{id:"racinedelta"}),r.a.createElement("h4",{id:"a"}),r.a.createElement("h6",{id:"x1"}),r.a.createElement("h6",{id:"x2"}),r.a.createElement("h6",{id:"solutionpositif"}))}),s=function(){var e=Object(a.useState)([]),n=Object(d.a)(e,2),t=n[0],i=n[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,r.a.createElement("center",null,"EQUATION DU SECOND DEGREE",r.a.createElement("br",null),r.a.createElement("span",{id:"indice"},"a"),r.a.createElement("span",{id:"spanx"},"x"),r.a.createElement("sup",null,"2"),r.a.createElement("span",{id:"spanx"}," + "),r.a.createElement("span",{id:"indice"},"b"),r.a.createElement("span",{id:"spanx"},"x + "),r.a.createElement("span",{id:"indice"},"c"),r.a.createElement("span",{id:"spanx"}," = 0"),r.a.createElement("br",null),r.a.createElement("span",{id:"titre"},"Entrer les indices a , b et c pour voir la solution de l'equation."))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"}),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("center",{id:"centrecalcul"},r.a.createElement("div",{className:"flex-row",id:"calcul"},r.a.createElement("div",{className:"flex-large"},r.a.createElement(o,{addUser:function(e){e.id=t.length,i([].concat(Object(c.a)(t),[e]))}})),r.a.createElement("br",null)))),r.a.createElement("div",{className:"col-md-4"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,n,t){},8:function(e,n,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.bc185f57.chunk.js.map