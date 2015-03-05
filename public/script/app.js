'use strict';var c = this;
function g(a, b) {
  var e = a.split("."), d = c;
  e[0] in d || !d.execScript || d.execScript("var " + e[0]);
  for (var f;e.length && (f = e.shift());) {
    e.length || void 0 === b ? d = d[f] ? d[f] : d[f] = {} : d[f] = b;
  }
}
;function h() {
}
g("app.AppController", h);
function k() {
}
g("app.AppService", k);
function l(a) {
  this.a = a;
}
g("app.characterTemplate.CharacterTemplateApiService", l);
l.$inject = ["$http"];
l.prototype = {get:function() {
  return this.a.get("http://127.0.0.1:3000/api/character_templates");
}, create:function(a) {
  return this.a.post("http://127.0.0.1:3000/api/character_templates", a);
}, update:function(a) {
  return this.a.put("http://127.0.0.1:3000/api/character_templates/" + a.id, a);
}, destroy:function(a) {
  return this.a.delete("http://127.0.0.1:3000/api/character_templates/" + a.id);
}};
function m(a) {
  this.a = a;
}
g("app.itemTemplate.ItemTemplateApiService", m);
m.$inject = ["$http"];
m.prototype = {get:function() {
  return this.a.get("http://127.0.0.1:3000/api/item_templates");
}, create:function(a) {
  return this.a.post("http://127.0.0.1:3000/api/item_templates", a);
}, update:function(a) {
  return this.a.put("http://127.0.0.1:3000/api/item_templates/" + a.id, a);
}, destroy:function(a) {
  return this.a.delete("http://127.0.0.1:3000/api/item_templates/" + a.id);
}};
function n(a) {
  this.a = a;
}
g("app.memberItem.MemberItemApiService", n);
n.$inject = ["$http"];
n.prototype = {get:function() {
  return this.a.get("http://127.0.0.1:3000/api/member_item");
}, create:function(a) {
  return this.a.post("http://127.0.0.1:3000/api/member_item", a);
}, update:function(a) {
  return this.a.put("http://127.0.0.1:3000/api/member_item/" + a.id, a);
}, destroy:function(a) {
  return this.a.delete("http://127.0.0.1:3000/api/member_item/" + a.id);
}};
function p() {
}
g("app.memberItem.MemberItemService", p);
var q = angular.module("app.memberItem", []);
q.service("memberItemApiService", n);
q.service("memberItemService", p);
function r(a) {
  this.a = a;
}
g("app.memberSkill.MemberSkillApiService", r);
r.$inject = ["$http"];
r.prototype = {get:function() {
  return this.a.get("http://127.0.0.1:3000/api/member_skill");
}, create:function(a) {
  return this.a.post("http://127.0.0.1:3000/api/member_skill", a);
}, update:function(a) {
  return this.a.put("http://127.0.0.1:3000/api/member_skill/" + a.id, a);
}, destroy:function(a) {
  return this.a.delete("http://127.0.0.1:3000/api/member_skill/" + a.id);
}};
function s() {
}
g("app.memberSkill.MemberSkillService", s);
var t = angular.module("app.memberSkill", []);
t.service("memberSkillApiService", r);
t.service("memberSkillService", s);
function u(a) {
  this.a = a;
}
g("app.party.PartyApiService", u);
u.$inject = ["$http"];
u.prototype = {get:function() {
  return this.a.get("http://127.0.0.1:3000/api/party");
}, create:function(a) {
  return this.a.post("http://127.0.0.1:3000/api/party", a);
}, update:function(a) {
  return this.a.put("http://127.0.0.1:3000/api/party/" + a.id, a);
}, destroy:function(a) {
  return this.a.delete("http://127.0.0.1:3000/api/party/" + a.id);
}};
function v() {
}
g("app.party.PartyService", v);
var w = angular.module("app.party", []);
w.service("partyApiService", u);
w.service("partyService", v);
var x = ["errors", "selectParty"];
function y(a) {
  this.g = a;
  this.d = {};
  z(this);
}
g("app.pubSub.PubSubService", y);
y.$inject = ["postal"];
y.prototype = {subscribe:function(a, b, e) {
  return this.d[a].subscribe(b, e);
}};
function z(a) {
  x.forEach(function(b) {
    a.d[b] = a.g.channel(b);
  });
}
;function A(a, b) {
  this.e = a;
  this.b = {};
  b.subscribe("selectParty", "launched", this.c.bind(this));
}
g("app.characterTemplate.CharacterTemplateService", A);
A.$inject = ["characterTemplateApiService", "pubSubService"];
A.prototype = {c:function() {
  var a = this;
  return this.e.get().then(function(b) {
    b.data.forEach(function(b) {
      a.b["" + b.id] = b;
    });
  });
}, get:function() {
  return this.b;
}};
var B = angular.module("app.characterTemplate", []);
B.service("characterTemplateApiService", l);
B.service("characterTemplateService", A);
B.run(["characterTemplateService", function() {
}]);
function C(a, b) {
  this.f = a;
  this.b = {};
  b.subscribe("selectParty", "launched", this.c.bind(this));
}
g("app.itemTemplate.ItemTemplateService", C);
C.$inject = ["itemTemplateApiService", "pubSubService"];
C.prototype = {c:function() {
  var a = this;
  return this.f.get().then(function(b) {
    b.data.forEach(function(b) {
      a.b["" + b.id] = b;
    });
  });
}, get:function() {
  return this.b;
}};
var D = angular.module("app.itemTemplate", []);
D.service("itemTemplateApiService", m);
D.service("itemTemplateService", C);
D.run(["itemTemplateService", function() {
}]);
var E = angular.module("app.pubSub", []);
E.service("pubSubService", y);
E.constant("postal", window.postal);
function F(a) {
  this.a = a;
}
g("app.skillTemplate.SkillTemplateApiService", F);
F.$inject = ["$http"];
F.prototype = {get:function() {
  return this.a.get("http://127.0.0.1:3000/api/skill_templates");
}, create:function(a) {
  return this.a.post("http://127.0.0.1:3000/api/skill_templates", a);
}, update:function(a) {
  return this.a.put("http://127.0.0.1:3000/api/skill_templates/" + a.id, a);
}, destroy:function(a) {
  return this.a.delete("http://127.0.0.1:3000/api/skill_templates/" + a.id);
}};
function G(a, b) {
  this.h = a;
  this.b = {};
  b.subscribe("selectParty", "launched", this.c.bind(this));
}
g("app.skillTemplate.SkillTemplateService", G);
G.$inject = ["skillTemplateApiService", "pubSubService"];
G.prototype = {c:function() {
  var a = this;
  return this.h.get().then(function(b) {
    b.data.forEach(function(b) {
      a.b["" + b.id] = b;
    });
  });
}, get:function() {
  return this.b;
}};
var H = angular.module("app.skillTemplate", []);
H.service("skillTemplateApiService", F);
H.service("skillTemplateService", G);
H.run(["skillTemplateService", function() {
}]);
function I() {
}
g("app.editParty.EditPartyController", I);
I.$inject = ["pubSubService"];
I.prototype = {};
var J = angular.module("app.editParty", []);
J.config(["$routeProvider", function(a) {
  a.when("/edit-party", {templateUrl:"views/routes/edit-party/edit-party.html", controller:I, controllerAs:"editPartyCtrl"});
}]);
J.controller("editPartyCtrl", I);
function K() {
}
g("app.editTactics.EditTacticsController", K);
K.$inject = ["pubSubService"];
K.prototype = {};
var L = angular.module("app.editTactics", []);
L.config(["$routeProvider", function(a) {
  a.when("/edit-tactics", {templateUrl:"views/routes/edit-tactics/edit-tactics.html", controller:K, controllerAs:"editTacticsCtrl"});
}]);
L.controller("editTacticsCtrl", K);
function M() {
}
g("app.findMatch.FindMatchController", M);
M.$inject = ["pubSubService"];
M.prototype = {};
var N = angular.module("app.findMatch", []);
N.config(["$routeProvider", function(a) {
  a.when("/find-match", {templateUrl:"views/routes/find-match/find-match.html", controller:M, controllerAs:"findMatchCtrl"});
}]);
N.controller("findMatchCtrl", M);
function O() {
}
g("app.matchResult.MatchResultController", O);
O.$inject = ["pubSubService"];
O.prototype = {};
var P = angular.module("app.matchResult", []);
P.config(["$routeProvider", function(a) {
  a.when("/match-result", {templateUrl:"views/routes/match-result/match-result.html", controller:O, controllerAs:"matchResultCtrl"});
}]);
P.controller("matchResultCtrl", O);
function Q() {
}
g("app.root.RootController", Q);
Q.$inject = ["pubSubService"];
Q.prototype = {};
var R = angular.module("app.root", []);
R.config(["$routeProvider", function(a) {
  a.when("/root", {templateUrl:"views/routes/root/root.html", controller:Q, controllerAs:"rootCtrl"});
}]);
R.controller("rootCtrl", Q);
function S(a, b, e, d) {
  this.characterTemplates = b.get();
  this.itemTemplates = e.get();
  this.skillTemplates = d.get();
  console.log("%s %s %s", "selectParty", "launched", "");
  a.d.selectParty.publish("launched", "");
}
g("app.selectParty.SelectPartyController", S);
S.$inject = ["pubSubService", "characterTemplateService", "itemTemplateService", "skillTemplateService"];
S.prototype = {};
var T = angular.module("app.selectParty", []);
T.config(["$routeProvider", function(a) {
  a.when("/select-party", {templateUrl:"views/routes/select-party/select-party.html", controller:S, controllerAs:"selectPartyCtrl"});
}]);
T.controller("selectPartyCtrl", S);
function U() {
}
g("app.signIn.SignInController", U);
U.$inject = ["pubSubService"];
U.prototype = {};
var V = angular.module("app.signIn", []);
V.config(["$routeProvider", function(a) {
  a.when("/sign-in", {templateUrl:"views/routes/sign-in/sign-in.html", controller:U, controllerAs:"signInCtrl"});
}]);
V.controller("signInCtrl", U);
var W = angular.module("template", ["ngRoute", "ngTouch", B.name, J.name, L.name, N.name, D.name, P.name, q.name, t.name, w.name, R.name, T.name, V.name, H.name, E.name]);
W.config(["$routeProvider", function(a) {
  a.when("/", {redirectTo:function(a, e, d) {
    return "/" + (d["goto"] ? d["goto"] : "root");
  }}).otherwise({redirectTo:"/root"});
}]);
W.config(["$locationProvider", function(a) {
  a.html5Mode(!0);
}]);
W.controller("appController", h);
W.service("appService", k);

