'use strict';var b = this;
function f(a, g) {
  var d = a.split("."), c = b;
  d[0] in c || !c.execScript || c.execScript("var " + d[0]);
  for (var e;d.length && (e = d.shift());) {
    d.length || void 0 === g ? c = c[e] ? c[e] : c[e] = {} : c[e] = g;
  }
}
;function h() {
}
f("app.AppController", h);
function k() {
}
f("app.AppService", k);
function l() {
}
f("app.levela.LevelAService", l);
function m() {
}
f("app.levela.LevelAController", m);
m.$inject = ["levelAService"];
var n = angular.module("app.levela", []);
n.config(["$routeProvider", function(a) {
  a.when("/level-a", {templateUrl:"views/level-a/level-a.html", controller:m, controllerAs:"levelACtrl"});
}]);
n.controller("levelACtrl", m);
n.service("levelAService", l);
function p(a) {
  this.a = a;
}
f("app.characterTemplate.CharacterTemplateApiService", p);
p.prototype = {get:function() {
  return this.a.get("127.0.0.1:3000/api/character_template");
}, create:function(a) {
  return this.a.post("127.0.0.1:3000/api/character_template", a);
}, update:function(a) {
  return this.a.put("127.0.0.1:3000/api/character_template/" + a.id, a);
}, destroy:function(a) {
  return this.a.delete("127.0.0.1:3000/api/character_template/" + a.id);
}};
function q() {
}
f("app.characterTemplate.CharacterTemplateService", q);
var r = angular.module("app.characterTemplate", []);
r.service("characterTemplateApiService", p);
r.service("characterTemplateService", q);
function s(a) {
  this.a = a;
}
f("app.itemTemplate.ItemTemplateApiService", s);
s.prototype = {get:function() {
  return this.a.get("127.0.0.1:3000/api/item_template");
}, create:function(a) {
  return this.a.post("127.0.0.1:3000/api/item_template", a);
}, update:function(a) {
  return this.a.put("127.0.0.1:3000/api/item_template/" + a.id, a);
}, destroy:function(a) {
  return this.a.delete("127.0.0.1:3000/api/item_template/" + a.id);
}};
function t() {
}
f("app.itemTemplate.ItemTemplateService", t);
var u = angular.module("app.itemTemplate", []);
u.service("itemTemplateApiService", s);
u.service("itemTemplateService", t);
function v(a) {
  this.a = a;
}
f("app.memberItem.MemberItemApiService", v);
v.prototype = {get:function() {
  return this.a.get("127.0.0.1:3000/api/member_item");
}, create:function(a) {
  return this.a.post("127.0.0.1:3000/api/member_item", a);
}, update:function(a) {
  return this.a.put("127.0.0.1:3000/api/member_item/" + a.id, a);
}, destroy:function(a) {
  return this.a.delete("127.0.0.1:3000/api/member_item/" + a.id);
}};
function w() {
}
f("app.memberItem.MemberItemService", w);
var x = angular.module("app.memberItem", []);
x.service("memberItemApiService", v);
x.service("memberItemService", w);
function y(a) {
  this.a = a;
}
f("app.memberSkill.MemberSkillApiService", y);
y.prototype = {get:function() {
  return this.a.get("127.0.0.1:3000/api/member_skill");
}, create:function(a) {
  return this.a.post("127.0.0.1:3000/api/member_skill", a);
}, update:function(a) {
  return this.a.put("127.0.0.1:3000/api/member_skill/" + a.id, a);
}, destroy:function(a) {
  return this.a.delete("127.0.0.1:3000/api/member_skill/" + a.id);
}};
function z() {
}
f("app.memberSkill.MemberSkillService", z);
var A = angular.module("app.memberSkill", []);
A.service("memberSkillApiService", y);
A.service("memberSkillService", z);
function B(a) {
  this.a = a;
}
f("app.party.PartyApiService", B);
B.prototype = {get:function() {
  return this.a.get("127.0.0.1:3000/api/party");
}, create:function(a) {
  return this.a.post("127.0.0.1:3000/api/party", a);
}, update:function(a) {
  return this.a.put("127.0.0.1:3000/api/party/" + a.id, a);
}, destroy:function(a) {
  return this.a.delete("127.0.0.1:3000/api/party/" + a.id);
}};
function C() {
}
f("app.party.PartyService", C);
var D = angular.module("app.party", []);
D.service("partyApiService", B);
D.service("partyService", C);
function E(a) {
  this.a = a;
}
f("app.skillTemplate.SkillTemplateApiService", E);
E.prototype = {get:function() {
  return this.a.get("127.0.0.1:3000/api/skill_template");
}, create:function(a) {
  return this.a.post("127.0.0.1:3000/api/skill_template", a);
}, update:function(a) {
  return this.a.put("127.0.0.1:3000/api/skill_template/" + a.id, a);
}, destroy:function(a) {
  return this.a.delete("127.0.0.1:3000/api/skill_template/" + a.id);
}};
function F() {
}
f("app.skillTemplate.SkillTemplateService", F);
var G = angular.module("app.skillTemplate", []);
G.service("skillTemplateApiService", E);
G.service("skillTemplateService", F);
var H = angular.module("template", ["ngRoute", "ngTouch", r.name, u.name, n.name, x.name, A.name, D.name, G.name]);
H.config(["$routeProvider", function(a) {
  a.otherwise({redirectTo:"/level-a"});
}]);
H.config(["$locationProvider", function(a) {
  a.html5Mode(!0);
}]);
H.controller("appController", h);
H.service("appService", k);
H.filter("unsafeResource", ["$sce", function(a) {
  return function(g) {
    return a.trustAsResourceUrl(g);
  };
}]);

