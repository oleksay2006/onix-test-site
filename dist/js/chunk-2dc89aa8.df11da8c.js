(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dc89aa8"],{4579:function(t,e,c){"use strict";c("b0b2")},"6c1e":function(t,e,c){},a99e:function(t,e,c){"use strict";c("6c1e")},b0b2:function(t,e,c){},eb1f:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),i=function(t){return Object(n["B"])("data-v-fb03de50"),t=t(),Object(n["z"])(),t},s={class:"tasks-tab tab tab-1"},a={class:"list"},o=i((function(){return Object(n["g"])("p",{class:"day"},"TASK LIST",-1)})),r=i((function(){return Object(n["g"])("p",null,"Add new task +",-1)})),l=[r],d=["load","onClick"],u={class:"first-part-task"},b={class:"text"},j={class:"time"};function O(t,e,c,i,r,O){var f=Object(n["F"])("AddTaskModal"),h=Object(n["F"])("TaskDetailsModal"),v=Object(n["F"])("fa");return Object(n["y"])(),Object(n["f"])("div",s,[Object(n["g"])("div",a,[o,Object(n["g"])("div",{class:"add-new",onClick:e[0]||(e[0]=function(e){return t.showNew()})},l)]),Object(n["N"])(Object(n["i"])(f,{onRemoveNew:e[1]||(e[1]=function(e){return t.removeNew()})},null,512),[[n["K"],t.isShow]]),Object(n["N"])(Object(n["i"])(h,{onRemoveEditTask:t.removeEditTask,currentTask:t.currentTask},null,8,["onRemoveEditTask","currentTask"]),[[n["K"],t.isShowChange]]),(Object(n["y"])(!0),Object(n["f"])(n["a"],null,Object(n["E"])(t.tasks,(function(e,c){return Object(n["y"])(),Object(n["f"])("div",{class:Object(n["r"])(["message task",{new_animation:e.isNew}]),key:"task-"+c,load:t.removeAnimation(e),onClick:function(c){return t.showChange(e)}},[Object(n["g"])("div",u,[Object(n["g"])("h3",{class:"title",ref:function(e){e&&(t.divs[c]=e)}},Object(n["H"])(e.title),513),Object(n["g"])("p",b,Object(n["H"])(e.text),1)]),Object(n["g"])("p",j,"Выполнить до "+Object(n["H"])(e.time),1),Object(n["i"])(v,{class:"trash-alt",icon:"trash-alt",onClick:function(c){return t.deleteTask(e.id)}},null,8,["onClick"])],10,d)})),128))])}var f=c("5530"),h=(c("159b"),c("5502")),v=c("25a0"),m=c("3ced"),p=(c("a4d3"),c("e01a"),function(t){return Object(n["B"])("data-v-005c8b1d"),t=t(),Object(n["z"])(),t}),w={class:"mainModal",ref:"modal_wrapper"},k={class:"modal_wrapper"},T={class:"modal"},g={class:"div_form"},$={class:"first-part-task"},E=p((function(){return Object(n["g"])("h3",null,"Название задачи",-1)})),S={key:0,class:"helper"},N={class:"second-part-task"},A=p((function(){return Object(n["g"])("h3",null,"Описание задачи",-1)})),_={key:0,class:"helper"},C={class:"third-part-task"},y=p((function(){return Object(n["g"])("h3",null,"Дата выполнения задачи",-1)})),K={key:0,class:"helper"},D={class:"controls"};function M(t,e,c,i,s,a){var o=Object(n["F"])("fa");return Object(n["y"])(),Object(n["f"])("div",w,[Object(n["g"])("div",k,[Object(n["g"])("div",T,[Object(n["g"])("div",g,[Object(n["g"])("div",$,[E,Object(n["N"])(Object(n["g"])("input",{class:Object(n["r"])(["new-input new-title",{invalid:t.v$.title.$error}]),placeholder:"Введите название задачи","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.title=e})},null,2),[[n["J"],t.title]]),t.v$.title.$error?(Object(n["y"])(),Object(n["f"])("span",S,"Это обязательное поле")):Object(n["e"])("",!0)]),Object(n["g"])("div",N,[A,Object(n["N"])(Object(n["g"])("input",{class:Object(n["r"])(["new-input new-description",{invalid:t.v$.description.$error}]),placeholder:"Введите описание задачи","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.description=e})},null,2),[[n["J"],t.description]]),t.v$.description.$error?(Object(n["y"])(),Object(n["f"])("span",_,"Это обязательное поле")):Object(n["e"])("",!0)]),Object(n["g"])("div",C,[y,Object(n["N"])(Object(n["g"])("input",{class:Object(n["r"])(["dateInput",{invalid:t.v$.time.$error}]),"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.v$.time.$model=e}),type:"date",name:"trip-start",min:"2021-12-21",max:"2022-12-31"},null,2),[[n["J"],t.v$.time.$model]]),t.v$.time.$error?(Object(n["y"])(),Object(n["f"])("span",K,"Это обязательное поле")):Object(n["e"])("",!0)]),Object(n["g"])("div",D,[Object(n["i"])(o,{class:"check-square",icon:"check-square",onClick:e[3]||(e[3]=function(e){return t.addNew()})}),Object(n["i"])(o,{class:"close-window",icon:"window-close",onClick:e[4]||(e[4]=function(e){return t.$emit("removeNew")})})])])])])],512)}var R=c("e3e1"),q=Object(n["j"])({name:"AddTaskModal",data:function(){return{v$:Object(v["a"])(),title:"",description:"",time:""}},validations:function(){return{title:{required:R["a"]},description:{required:R["a"]},time:{required:R["a"]}}},computed:Object(f["a"])({},Object(h["c"])([])),methods:Object(f["a"])(Object(f["a"])({},Object(h["b"])(["CREATE_NEW_TASK"])),{},{addNew:function(){if(this.v$.$validate(),!this.v$.$error){var t={title:this.title,text:this.description,time:this.time,id:Date.now(),isNew:!0,status:m["a"].toDo};this.CREATE_NEW_TASK(t),this.title="",this.description="",this.time="",this.$emit("removeNew")}}}),mounted:function(){console.log("AddTaskModal: ",this.isShow)}}),J=(c("4579"),c("6b0d")),x=c.n(J);const F=x()(q,[["render",M],["__scopeId","data-v-005c8b1d"]]);var I=F,L=c("3971"),H=Object(n["j"])({name:"Tasks",components:{AddTaskModal:I,TaskDetailsModal:L["a"]},setup:function(){var t=0,e=Object(n["D"])([]);return Object(n["w"])((function(){e.value.forEach((function(e){setTimeout((function(){e.classList.add("animation"),console.log(e)}),t),t+=500}))})),{divs:e,close:close}},data:function(){return{v$:Object(v["a"])(),title:"",description:"",time:"",isShow:!1,isShowChange:!1,currentTask:{},Status:m["a"]}},methods:Object(f["a"])(Object(f["a"])({},Object(h["b"])(["SET_TASKS","CREATE_NEW_TASK","DELETE_TASK"])),{},{removeAnimation:function(t){setTimeout((function(){t.isNew=!1}),2e3)},showNew:function(){this.isShow=!0,console.log(this.isShow)},showChange:function(t){this.currentTask=t,this.isShowChange=!0},removeEditTask:function(){this.isShowChange=!1},removeNew:function(){this.isShow=!1},deleteTask:function(t){this.DELETE_TASK(t)}}),computed:Object(f["a"])({},Object(h["c"])(["tasks"])),mounted:function(){console.log(this.currentTask)}});c("a99e");const U=x()(H,[["render",O],["__scopeId","data-v-fb03de50"]]);e["default"]=U}}]);
//# sourceMappingURL=chunk-2dc89aa8.df11da8c.js.map