(this["webpackJsonpcs-team-generator"]=this["webpackJsonpcs-team-generator"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),c=a.n(s),l=(a(17),a(1)),o=a(7),i=a(8),u=a(3),m=a(11),h=a(9),d=(a(18),a(10));function f(e,t){if(e.size!==t.size)return!1;var a,n=Object(l.a)(e);try{for(n.s();!(a=n.n()).done;){var r=a.value;if(!t.has(r))return!1}}catch(s){n.e(s)}finally{n.f()}return!0}a(19);function v(e){var t=e.label,a=e.onChange;return r.a.createElement("div",{className:"checkbox-container"},r.a.createElement("label",null,r.a.createElement("input",{name:t,type:"checkbox",key:t,onChange:a}),t))}a(20);function p(e){var t=e.team1,a=e.team2;e.team1Score,e.team2Score;return r.a.createElement("div",null,r.a.createElement("div",{className:"teams-container"},r.a.createElement("div",{className:"team-container"},r.a.createElement("h3",null,"Team 1"),t.map((function(e){return r.a.createElement("div",{key:e},e)}))),r.a.createElement("div",{className:"team-container"},r.a.createElement("h3",null,"Team 2"),a.map((function(e){return r.a.createElement("div",{key:e},e)})))))}var g=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={playerRanks:{"M\xe4rta-Louise":"MTM=",Sheppan:"MTA1",Zuccan:"NzM=",BoranHeaton:"MjA=",Limpan:"NDM=",Suppe:"MTIx",Magg0t:"OTM=",Mouth:"NDM=",Oezt:"MjQ=",BigB:"NDM=",Ankan:"NjA=",Widiz:"NDM=",Tracer:"OTU=",Heimdall:"MzQ=",Steffe:"NQ==",Mg0:"ODg="},selectedPlayers:new Set,teams:[],errorMsg:""},n.handleCheckboxChanged=n.handleCheckboxChanged.bind(Object(u.a)(n)),n.generateTeams=n.generateTeams.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"handleCheckboxChanged",value:function(e){var t=e.target.name,a=this.state.selectedPlayers;a.has(t)?a.delete(t):a.add(t),this.setState({selectedPlayers:a})}},{key:"generateTeams",value:function(){var e=this,t=Array.from(this.state.selectedPlayers);if(t.length<4)this.setState({errorMsg:"Select at least four players!"});else{this.setState({errorMsg:""});var a,n=Math.ceil(t.length/2),r=function(e,t){var a=e.length;if(t>a)return[];var n=[];return function t(r,s,c){for(var l=1===c,o=s;o<a;o++){var i=[].concat(Object(d.a)(r),[e[o]]);l?n.push(i):t(i,o+1,c-1)}}([],0,t),n}(t,n),s=[],c=[],o=Object(l.a)(r);try{var i=function(){var n=a.value;if(function(e,t){var a,n=Object(l.a)(e);try{for(n.s();!(a=n.n()).done;){if(f(a.value,t))return!0}}catch(r){n.e(r)}finally{n.f()}return!1}(c,new Set(n)))return"continue";var r=t.filter((function(e){return!n.includes(e)})),o=n.reduce((function(t,a){return t+parseInt(window.atob(e.state.playerRanks[a]))}),0),i=r.reduce((function(t,a){return t+parseInt(window.atob(e.state.playerRanks[a]))}),0),u=Math.abs(o-i);s.push([[n,o],[r,i],u]),c.push(new Set(n)),c.push(new Set(r))};for(o.s();!(a=o.n()).done;)i()}catch(m){o.e(m)}finally{o.f()}var u=s.sort((function(e,t){return e[2]-t[2]}));this.setState({teams:u})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"CS Team Generator")),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Select players"),r.a.createElement("p",null,'Selected players will be divided into two equally strong teams. Click "Generate Teams!" button and team suggestions will be presented below.'),r.a.createElement("div",{className:"checkboxes-container"},Object.keys(this.state.playerRanks).map((function(t){return r.a.createElement(v,{label:t,key:t,onChange:e.handleCheckboxChanged})}))),r.a.createElement("button",{onClick:this.generateTeams},"Generate Teams!"),this.state.teams.length>0&&r.a.createElement("div",null,r.a.createElement("h2",null,"Team suggestions"),r.a.createElement("p",null,"Team suggestions are sorted with the most equal teams on top, followed by the second most equal teams, etc."),this.state.teams.slice(0,10).map((function(e,t){return r.a.createElement(p,{key:t,team1:e[0][0],team1Score:e[0][1],team2:e[1][0],team2Score:e[1][1]})}))),""!==this.state.errorMsg&&r.a.createElement("p",{className:"error-msg"},this.state.errorMsg)))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.e2c7d39c.chunk.js.map