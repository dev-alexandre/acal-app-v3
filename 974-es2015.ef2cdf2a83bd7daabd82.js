(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[974],{38017:function(e,t,n){"use strict";n.d(t,{D:function(){return p}});var r=n(38583),a=n(3679),o=n(78937),i=n(12734),l=n(78627),s=n(25814),c=n(94544),u=n(67893),d=n(67343),m=n(37716);let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({providers:[d.v,l.k,i.l,o.t],imports:[[u.FormsModule,a.UX,r.ez,s.zyh,s.nKr,s.IIj,s.T2N,s.CG_,s.V7y,s.KdK,s.j7H.forChild(),c.d]]}),e})()},14131:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var r=n(37716),a=n(25814);let o=(()=>{class e{constructor(){this.rowSize=10,this.lastRowSize=10,this.setValue=new r.EventEmitter}onSelectionChange(){this.lastRowSize!==this.rowSize&&(this.lastRowSize=this.rowSize,this.setValue.emit(this.rowSize))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-select-rows-number"]],outputs:{setValue:"setValue"},decls:15,vars:7,consts:[[1,"caption"],[3,"selected","selectedChange"],[3,"value"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"p",0),r["\u0275\u0275text"](1," Exibir: "),r["\u0275\u0275elementStart"](2,"nb-select",1),r["\u0275\u0275listener"]("selectedChange",function(e){return t.rowSize=e})("selectedChange",function(){return t.onSelectionChange()}),r["\u0275\u0275elementStart"](3,"nb-option",2),r["\u0275\u0275text"](4,"1"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"nb-option",2),r["\u0275\u0275text"](6,"5"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"nb-option",2),r["\u0275\u0275text"](8,"10"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"nb-option",2),r["\u0275\u0275text"](10,"20"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"nb-option",2),r["\u0275\u0275text"](12,"50"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"nb-option",2),r["\u0275\u0275text"](14,"100"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("selected",t.rowSize),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("value",1),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("value",5),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("value",10),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("value",20),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("value",50),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("value",100))},directives:[a.rs,a.q51],encapsulation:2}),e})()},2741:function(e,t,n){"use strict";n.d(t,{M:function(){return o}});var r=n(37716);const a=["*"];let o=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-table"]],ngContentSelectors:a,decls:2,vars:0,consts:[[1,"table","table-bordered","table-striped"]],template:function(e,t){1&e&&(r["\u0275\u0275projectionDef"](),r["\u0275\u0275elementStart"](0,"table",0),r["\u0275\u0275projection"](1),r["\u0275\u0275elementEnd"]())},styles:['@forward "@nebular/theme/styles/theming";@use "@nebular/theme/styles/theming" as *;@use "@nebular/theme/styles/themes/dark";.nb-theme-default   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}.nb-theme-dark   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#fff}.nb-theme-cosmic   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#fff}.nb-theme-corporate   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}.nb-theme-aquamarine   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#fff}']}),e})()},77411:function(e,t,n){"use strict";n.d(t,{D:function(){return r}});class r{constructor(e,t,n,r){this.router=e,this.activeRouter=t,this.service=n,this.toastrService=r,this.loading=!1,this.submitted=!1}onSubmit(){this.submitted=!0,this.form.invalid||this.service.save(this.form.value).subscribe(()=>{this.voltar()},e=>{this.showToast(`Esse valor est\xe1 duplicado: ${e.error.error}`)})}voltar(){this.router.navigate(["./listar"],{relativeTo:this.activeRouter.parent})}showToast(e){this.toastrService.danger(e,"Imposs\xedvel completar")}getStatus(e){return this.submitted?e.valid?"success":"danger":"basic"}}},47183:function(e,t,n){"use strict";n.d(t,{T:function(){return r}});class r{constructor(e,t,n,r){this.router=e,this.activeRouter=t,this.service=n,this.toastrService=r,this.path=`${this.key()}[deletar]`,this.loaded=!1}load(){null===sessionStorage.getItem(this.path)&&this.voltar(),this.data=JSON.parse(sessionStorage.getItem(this.path)),sessionStorage.removeItem(this.path),this.loaded=!0}voltar(){this.router.navigate(["./listar"],{relativeTo:this.activeRouter.parent})}deletar(){this.service.delete(this.data.id).subscribe(()=>{this.toastrService.success("Completado","registro deletado"),this.voltar()},e=>{this.showToast(`${e.error.error}`)})}showToast(e){this.toastrService.danger(e,"Imposs\xedvel completar")}}},14162:function(e,t,n){"use strict";n.d(t,{F:function(){return r}});class r{constructor(e,t,n,r){this.router=e,this.activeRouter=t,this.service=n,this.toastrService=r,this.path=`${this.key()}[editar]`,this.loading=!1,this.submitted=!1}onSubmit(){this.submitted=!0,this.form.invalid||this.service.update(this.form.value).subscribe(()=>{this.voltar()},e=>{this.showToast(`Esse valor est\xe1 duplicado: ${e.error.error}`)})}compareById(e,t){return(null==e?void 0:e.id)===(null==t?void 0:t.id)}loadForm(){null===sessionStorage.getItem(this.path)&&this.voltar(),this.data=JSON.parse(sessionStorage.getItem(this.path)),sessionStorage.removeItem(this.path),this.createForm(this.data)}voltar(){this.router.navigate(["./listar"],{relativeTo:this.activeRouter.parent})}showToast(e){this.toastrService.danger(e,"Imposs\xedvel completar")}getStatus(e){return this.submitted?e.valid?"success":"danger":"basic"}get name(){return this.form.get("name")}}},70995:function(e,t,n){"use strict";n.d(t,{n:function(){return a}});class r{constructor(){this.model=null,this.sort={value:null,asc:null}}}class a{constructor(e,t,n){this.router=e,this.activeRouter=t,this.service=n,this.loading=!1,this.filter=new r,this.filter.page={number:0,size:10},this.filter.model=null,this.initModel(this.filter)}seach(){this.loading=!0,this.filter.page.number=0,this.load()}load(){this.service.filter(this.filter).subscribe(e=>{this.table=e,this.loading=!1})}order(e){null==this.filter.sort.asc&&(this.filter.sort.asc=!1),this.filter.sort.asc=!this.filter.sort.asc,this.filter.sort.value=e,this.load()}paginar(e){this.filter.page.number=e,this.load()}navegar(e,t){sessionStorage.setItem(`${this.key()}[${e}]`,JSON.stringify(t)),this.router.navigate([e],{relativeTo:this.activeRouter.parent})}adicionar(){this.router.navigate(["./adicionar"],{relativeTo:this.activeRouter.parent})}}},78171:function(e,t,n){"use strict";n.d(t,{t:function(){return r}});class r{constructor(e){this.http=e}filter(e){return this.http.post(`${this.getUrl()}/pageable`,e)}filterByExample(e){return this.http.post(`${this.getUrl()}/filter`,e)}list(){return this.http.get(`${this.getUrl()}`)}save(e){return this.http.post(this.getUrl(),e)}update(e){return this.http.put(this.getUrl(),e)}delete(e){return this.http.delete(`${this.getUrl()}/${e}`)}}},52066:function(e,t,n){"use strict";n.d(t,{q:function(){return a}});var r=n(37716);let a=(()=>{class e{transform(e){return`${e.addressType.name} ${e.name}`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"address",type:e,pure:!0}),e})()},94544:function(e,t,n){"use strict";n.d(t,{d:function(){return l}});var r=n(38583),a=n(52066),o=n(37716);let i=(()=>{class e{transform(e){return`${e.category} ${e.name} ${e.monetaryValue}`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o["\u0275\u0275definePipe"]({name:"group",type:e,pure:!0}),e})(),l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({providers:[a.q,i],imports:[[r.ez]]}),e})()},61974:function(e,t,n){"use strict";n.r(t),n.d(t,{AddressTypeModule:function(){return X}});var r=n(25814),a=n(78937),o=n(38583),i=n(3679),l=n(99763),s=n(77411),c=n(37716);function u(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"p",9),c["\u0275\u0275text"](1," Nome \xe9 obrigat\xf3rio. "),c["\u0275\u0275elementEnd"]())}function d(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p",9),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" Nome deve ter pelo menos ",null==e.name.errors.minlength?null:e.name.errors.minlength.requiredLength," caracteres ")}}function m(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p",9),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" Nome deve ter no maximo ",e.name.errors.maxlength.requiredLength," caracteres ")}}function p(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div"),c["\u0275\u0275template"](1,u,2,0,"p",8),c["\u0275\u0275template"](2,d,2,1,"p",8),c["\u0275\u0275template"](3,m,2,1,"p",8),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==e.name.errors?null:e.name.errors.required),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==e.name.errors?null:e.name.errors.minlength),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==e.name.errors?null:e.name.errors.maxlength)}}let f=(()=>{class e extends s.D{constructor(e,t,n,r){super(e,t,n,r),this.router=e,this.activeRouter=t,this.service=n,this.toastrService=r}ngOnInit(){this.createForm()}createForm(){this.form=new i.cw({name:new i.NI(null,[i.kI.required,i.kI.minLength(3),i.kI.maxLength(100)])})}get name(){return this.form.get("name")}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](l.F0),c["\u0275\u0275directiveInject"](l.gz),c["\u0275\u0275directiveInject"](a.t),c["\u0275\u0275directiveInject"](r.quB))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ng-component"]],features:[c["\u0275\u0275InheritDefinitionFeature"]],decls:15,vars:5,consts:[["novalidate","",1,"needs-validation",3,"formGroup","nbSpinner","ngSubmit"],["accent","success"],[1,"form-group"],["for","name",1,"label"],["id","name","nbInput","","type","text","fullWidth","","placeholder","Nome",3,"formControl","status"],[4,"ngIf"],["type","button","nbButton","","status","basic",3,"click"],["type","submit","nbButton","","status","success",1,"float-right"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0),c["\u0275\u0275listener"]("ngSubmit",function(){return t.onSubmit()}),c["\u0275\u0275elementStart"](1,"nb-card",1),c["\u0275\u0275elementStart"](2,"nb-card-header"),c["\u0275\u0275text"](3," Tipo Logradouro "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"nb-card-body"),c["\u0275\u0275elementStart"](5,"div",2),c["\u0275\u0275elementStart"](6,"label",3),c["\u0275\u0275text"](7,"Nome"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](8,"input",4),c["\u0275\u0275template"](9,p,4,3,"div",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"nb-card-footer"),c["\u0275\u0275elementStart"](11,"button",6),c["\u0275\u0275listener"]("click",function(){return t.voltar()}),c["\u0275\u0275text"](12,"Voltar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](13,"button",7),c["\u0275\u0275text"](14,"Salvar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("formGroup",t.form)("nbSpinner",t.loading),c["\u0275\u0275advance"](8),c["\u0275\u0275property"]("formControl",t.name)("status",t.submitted?t.name.valid?"success":"danger":"basic"),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",t.name.invalid&&t.submitted))},directives:[i._Y,i.JL,i.sg,r.Q7R,r.Asz,r.ndF,r.yKW,r.h8i,i.Fj,i.JJ,i.oH,o.O5,r.XWE,r.DPz],encapsulation:2}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,t){1&e&&c["\u0275\u0275element"](0,"router-outlet")},directives:[l.lC],encapsulation:2}),e})();var g=n(47183);function b(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"div",4),c["\u0275\u0275elementStart"](1,"label",5),c["\u0275\u0275text"](2,"Nome"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"input",6),c["\u0275\u0275listener"]("ngModelChange",function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().data.name=t}),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngModel",e.data.name)}}let v=(()=>{class e extends g.T{constructor(e,t,n,r){super(e,t,n,r),this.router=e,this.activeRouter=t,this.service=n,this.toastrService=r}ngOnInit(){super.load()}key(){return"[address-type]"}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](l.F0),c["\u0275\u0275directiveInject"](l.gz),c["\u0275\u0275directiveInject"](a.t),c["\u0275\u0275directiveInject"](r.quB))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ng-component"]],features:[c["\u0275\u0275InheritDefinitionFeature"]],decls:10,vars:1,consts:[["accent","danger"],["class","form-group",4,"ngIf"],["type","button","nbButton","","status","basic",3,"click"],["type","submit","nbButton","","status","danger",1,"float-right",3,"click"],[1,"form-group"],["for","name",1,"label"],["id","name","nbInput","","type","text","fullWidth","","placeholder","Nome","disabled","",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"nb-card",0),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275text"](2," Tipo Logradouro "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"nb-card-body"),c["\u0275\u0275template"](4,b,4,1,"div",1),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"nb-card-footer"),c["\u0275\u0275elementStart"](6,"button",2),c["\u0275\u0275listener"]("click",function(){return t.voltar()}),c["\u0275\u0275text"](7,"Voltar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"button",3),c["\u0275\u0275listener"]("click",function(){return t.deletar()}),c["\u0275\u0275text"](9,"Deletar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("ngIf",t.data))},directives:[r.Asz,r.ndF,r.yKW,o.O5,r.XWE,r.DPz,r.h8i,i.Fj,i.JJ,i.On],encapsulation:2}),e})();var S=n(14162);function y(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"p",9),c["\u0275\u0275text"](1," Nome \xe9 obrigat\xf3rio. "),c["\u0275\u0275elementEnd"]())}function x(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p",9),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" Nome deve ter pelo menos ",null==e.name.errors.minlength?null:e.name.errors.minlength.requiredLength," caracteres ")}}function I(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p",9),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" Nome deve ter no maximo ",e.name.errors.maxlength.requiredLength," caracteres ")}}function E(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div"),c["\u0275\u0275template"](1,y,2,0,"p",8),c["\u0275\u0275template"](2,x,2,1,"p",8),c["\u0275\u0275template"](3,I,2,1,"p",8),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==e.name.errors?null:e.name.errors.required),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==e.name.errors?null:e.name.errors.minlength),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==e.name.errors?null:e.name.errors.maxlength)}}let C=(()=>{class e extends S.F{constructor(e,t,n,r){super(e,t,n,r),this.router=e,this.activeRouter=t,this.service=n,this.toastrService=r}key(){return"[address-type]"}ngOnInit(){this.loadForm()}createForm(e){this.form=new i.cw({id:new i.NI(e.id,[i.kI.required]),name:new i.NI(e.name,[i.kI.required,i.kI.minLength(3),i.kI.maxLength(100)]),createdAt:new i.NI(e.createdAt,[i.kI.required])})}get name(){return this.form.get("name")}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](l.F0),c["\u0275\u0275directiveInject"](l.gz),c["\u0275\u0275directiveInject"](a.t),c["\u0275\u0275directiveInject"](r.quB))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ng-component"]],features:[c["\u0275\u0275InheritDefinitionFeature"]],decls:15,vars:5,consts:[["novalidate","",1,"needs-validation",3,"formGroup","nbSpinner","ngSubmit"],["accent","warning"],[1,"form-group"],["for","name",1,"label"],["id","name","nbInput","","type","text","fullWidth","","placeholder","Nome",3,"formControl","status"],[4,"ngIf"],["type","button","nbButton","","status","basic",3,"click"],["type","submit","nbButton","","status","warning",1,"float-right"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0),c["\u0275\u0275listener"]("ngSubmit",function(){return t.onSubmit()}),c["\u0275\u0275elementStart"](1,"nb-card",1),c["\u0275\u0275elementStart"](2,"nb-card-header"),c["\u0275\u0275text"](3," Tipo Logradouro "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"nb-card-body"),c["\u0275\u0275elementStart"](5,"div",2),c["\u0275\u0275elementStart"](6,"label",3),c["\u0275\u0275text"](7,"Nome"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](8,"input",4),c["\u0275\u0275template"](9,E,4,3,"div",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"nb-card-footer"),c["\u0275\u0275elementStart"](11,"button",6),c["\u0275\u0275listener"]("click",function(){return t.voltar()}),c["\u0275\u0275text"](12,"Voltar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](13,"button",7),c["\u0275\u0275text"](14,"Editar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("formGroup",t.form)("nbSpinner",t.loading),c["\u0275\u0275advance"](8),c["\u0275\u0275property"]("formControl",t.name)("status",t.submitted?t.name.valid?"success":"danger":"basic"),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",t.name.invalid&&t.submitted))},directives:[i._Y,i.JL,i.sg,r.Q7R,r.Asz,r.ndF,r.yKW,r.h8i,i.Fj,i.JJ,i.oH,o.O5,r.XWE,r.DPz],encapsulation:2}),e})();var w=n(70995),k=n(14131),N=n(2741),j=n(29417);function M(e,t){1&e&&c["\u0275\u0275element"](0,"nb-icon",14)}function z(e,t){1&e&&c["\u0275\u0275element"](0,"nb-icon",15)}function O(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,M,1,0,"nb-icon",12),c["\u0275\u0275template"](2,z,1,0,"nb-icon",13),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",e.filter.sort.asc),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",!e.filter.sort.asc)}}function F(e,t){1&e&&c["\u0275\u0275element"](0,"nb-icon",14)}function T(e,t){1&e&&c["\u0275\u0275element"](0,"nb-icon",15)}function $(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,F,1,0,"nb-icon",12),c["\u0275\u0275template"](2,T,1,0,"nb-icon",13),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",e.filter.sort.asc),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",!e.filter.sort.asc)}}function P(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tr"),c["\u0275\u0275elementStart"](1,"th",17),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"td",17),c["\u0275\u0275text"](4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"td"),c["\u0275\u0275elementStart"](6,"button",18),c["\u0275\u0275listener"]("click",function(){const t=c["\u0275\u0275restoreView"](e).$implicit;return c["\u0275\u0275nextContext"](2).navegar("editar",t)}),c["\u0275\u0275element"](7,"nb-icon",19),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"td"),c["\u0275\u0275elementStart"](9,"button",20),c["\u0275\u0275listener"]("click",function(){const t=c["\u0275\u0275restoreView"](e).$implicit;return c["\u0275\u0275nextContext"](2).navegar("deletar",t)}),c["\u0275\u0275element"](10,"nb-icon",21),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate1"](" ",e.id," "),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate1"](" ",e.name," ")}}function R(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"tbody"),c["\u0275\u0275template"](1,P,11,2,"tr",16),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngForOf",e.table.content)}}function V(e,t){1&e&&c["\u0275\u0275element"](0,"nb-icon",14)}function B(e,t){1&e&&c["\u0275\u0275element"](0,"nb-icon",15)}function q(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,V,1,0,"nb-icon",12),c["\u0275\u0275template"](2,B,1,0,"nb-icon",13),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",e.filter.sort.asc),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",!e.filter.sort.asc)}}function L(e,t){1&e&&c["\u0275\u0275element"](0,"nb-icon",14)}function U(e,t){1&e&&c["\u0275\u0275element"](0,"nb-icon",15)}function W(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,L,1,0,"nb-icon",12),c["\u0275\u0275template"](2,U,1,0,"nb-icon",13),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",e.filter.sort.asc),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",!e.filter.sort.asc)}}function _(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"nb-card-footer"),c["\u0275\u0275elementStart"](1,"div",22),c["\u0275\u0275elementStart"](2,"div",23),c["\u0275\u0275text"](3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"div",24),c["\u0275\u0275text"](5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate2"](" ",e.table.pageable.offset+1," - ",e.table.pageable.offset+e.table.numberOfElements," "),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate1"](" Paginas: ",e.table.totalPages," ")}}function D(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"nb-card-footer"),c["\u0275\u0275elementStart"](1,"div",25),c["\u0275\u0275elementStart"](2,"button",26),c["\u0275\u0275listener"]("click",function(){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().paginar(0)}),c["\u0275\u0275element"](3,"nb-icon",27),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"button",26),c["\u0275\u0275listener"]("click",function(){c["\u0275\u0275restoreView"](e);const t=c["\u0275\u0275nextContext"]();return t.paginar(t.table.pageable.pageNumber-1)}),c["\u0275\u0275element"](5,"nb-icon",28),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"button",29),c["\u0275\u0275text"](7),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"button",26),c["\u0275\u0275listener"]("click",function(){c["\u0275\u0275restoreView"](e);const t=c["\u0275\u0275nextContext"]();return t.paginar(t.table.pageable.pageNumber+1)}),c["\u0275\u0275element"](9,"nb-icon",30),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"button",26),c["\u0275\u0275listener"]("click",function(){c["\u0275\u0275restoreView"](e);const t=c["\u0275\u0275nextContext"]();return t.paginar(t.table.totalPages-1)}),c["\u0275\u0275element"](11,"nb-icon",31),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("disabled",0===e.table.pageable.pageNumber),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("disabled",0===e.table.pageable.pageNumber),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"](" ",e.table.pageable.pageNumber+1," "),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("disabled",e.table.pageable.pageNumber+1===e.table.totalPages),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("disabled",e.table.pageable.pageNumber+1===e.table.totalPages)}}const J=[{path:"",redirectTo:"listar"},{path:"",component:h,children:[{path:"listar",component:(()=>{class e extends w.n{constructor(e,t,n){super(e,t,n),this.router=e,this.activeRouter=t,this.service=n}initModel(){this.filter.model={deletedAt:null}}key(){return"[address-type]"}ngOnInit(){this.seach()}setRowsSize(e){this.filter.page.size=e,this.seach()}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](l.F0),c["\u0275\u0275directiveInject"](l.gz),c["\u0275\u0275directiveInject"](a.t))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ng-component"]],features:[c["\u0275\u0275InheritDefinitionFeature"]],decls:39,vars:10,consts:[["nbSpinnerStatus","primary","nbSpinnerSize","large","nbSpinnerMessage","Carregando",3,"nbSpinner"],[3,"setValue"],[1,"col-1","bold",3,"click"],[4,"ngIf"],[1,"col-10","bold",3,"click"],["colspan","2",1,"text-center"],["type","text","mask","0*","nbInput","","fullWidth","","placeholder","#",1,"form-control",3,"ngModel","ngModelChange","keyup.enter"],["type","text","nbInput","","fullWidth","","placeholder","Nome",1,"form-control",3,"ngModel","ngModelChange","keyup.enter"],["colspan","2"],["nbButton","","outline","","fullWidth","","status","success",3,"click"],["icon","plus-circle-outline"],[1,"bold",3,"click"],["icon","arrow-up-outline","class","float-right",4,"ngIf"],["icon","arrow-down-outline","class","float-right",4,"ngIf"],["icon","arrow-up-outline",1,"float-right"],["icon","arrow-down-outline",1,"float-right"],[4,"ngFor","ngForOf"],[1,"align-middle"],["nbButton","","outline","","fullWidth","","status","warning",3,"click"],["icon","edit-2-outline"],["nbButton","","outline","","fullWidth","","status","danger",3,"click"],["icon","trash-2-outline"],[1,"item","text-hint"],[1,"float-left"],[1,"float-right"],[1,"d-flex","justify-content-center"],["nbButton","","status","basic",3,"disabled","click"],["icon","arrowhead-left-outline"],["icon","arrow-ios-back-outline"],["nbButton","","status","primary"],["icon","arrow-ios-forward-outline"],["icon","arrowhead-right-outline"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"nb-card",0),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275text"](2," Tipo Logradouro "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"nb-card-body"),c["\u0275\u0275elementStart"](4,"app-select-rows-number",1),c["\u0275\u0275listener"]("setValue",function(e){return t.setRowsSize(e)}),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"nb-card-body"),c["\u0275\u0275elementStart"](6,"app-table"),c["\u0275\u0275elementStart"](7,"thead"),c["\u0275\u0275elementStart"](8,"tr"),c["\u0275\u0275elementStart"](9,"th",2),c["\u0275\u0275listener"]("click",function(){return t.order("id")}),c["\u0275\u0275text"](10,"# "),c["\u0275\u0275template"](11,O,3,2,"ng-container",3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"th",4),c["\u0275\u0275listener"]("click",function(){return t.order("name")}),c["\u0275\u0275text"](13," Tipo Logradouro "),c["\u0275\u0275template"](14,$,3,2,"ng-container",3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](15,"th",5),c["\u0275\u0275text"](16,"A\xe7\xf5es"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](17,"thead"),c["\u0275\u0275elementStart"](18,"tr"),c["\u0275\u0275elementStart"](19,"th"),c["\u0275\u0275elementStart"](20,"input",6),c["\u0275\u0275listener"]("ngModelChange",function(e){return t.filter.model.id=e})("keyup.enter",function(){return t.seach()}),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](21,"th"),c["\u0275\u0275elementStart"](22,"input",7),c["\u0275\u0275listener"]("ngModelChange",function(e){return t.filter.model.name=e})("keyup.enter",function(){return t.seach()}),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](23,"th",8),c["\u0275\u0275elementStart"](24,"button",9),c["\u0275\u0275listener"]("click",function(){return t.adicionar()}),c["\u0275\u0275element"](25,"nb-icon",10),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](26,R,2,1,"tbody",3),c["\u0275\u0275elementStart"](27,"tfoot"),c["\u0275\u0275elementStart"](28,"tr"),c["\u0275\u0275elementStart"](29,"th",11),c["\u0275\u0275listener"]("click",function(){return t.order("id")}),c["\u0275\u0275text"](30,"# "),c["\u0275\u0275template"](31,q,3,2,"ng-container",3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](32,"th",11),c["\u0275\u0275listener"]("click",function(){return t.order("name")}),c["\u0275\u0275text"](33,"Tipo Logradouro "),c["\u0275\u0275template"](34,W,3,2,"ng-container",3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](35,"th",5),c["\u0275\u0275text"](36,"A\xe7\xf5es"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](37,_,6,3,"nb-card-footer",3),c["\u0275\u0275template"](38,D,12,5,"nb-card-footer",3),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("nbSpinner",t.loading),c["\u0275\u0275advance"](11),c["\u0275\u0275property"]("ngIf","id"===t.filter.sort.value),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngIf","name"===t.filter.sort.value),c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("ngModel",t.filter.model.id),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngModel",t.filter.model.name),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("ngIf",t.table),c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("ngIf","id"===t.filter.sort.value),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngIf","name"===t.filter.sort.value),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngIf",t.table),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",t.table))},directives:[r.Asz,r.Q7R,r.ndF,r.yKW,k.h,N.M,o.O5,j.hx,r.h8i,i.Fj,i.JJ,i.On,r.DPz,r.fMN,o.sg,r.XWE],encapsulation:2}),e})()},{path:"adicionar",component:f},{path:"editar",component:C},{path:"deletar",component:v}]}];let A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[l.Bz.forChild(J)],l.Bz]}),e})();var K=n(38017);let X=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({providers:[a.t],imports:[[r.zyh,r.T2N,r.nKr,r.KdK,r.IIj,r.Qry,r.uuI,o.ez,i.u5,i.UX,A,j.yI.forChild(),K.D]]}),e})()},78937:function(e,t,n){"use strict";n.d(t,{t:function(){return l}});var r=n(78171),a=n(92340),o=n(37716),i=n(91841);let l=(()=>{class e extends r.t{constructor(e){super(e),this.http=e}getUrl(){return`${a.N.apiUrl}/address-type`}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](i.eN))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})()},67343:function(e,t,n){"use strict";n.d(t,{v:function(){return l}});var r=n(78171),a=n(92340),o=n(37716),i=n(91841);let l=(()=>{class e extends r.t{constructor(e){super(e),this.http=e}getUrl(){return`${a.N.apiUrl}/customer`}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](i.eN))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})()},12734:function(e,t,n){"use strict";n.d(t,{l:function(){return l}});var r=n(78171),a=n(92340),o=n(37716),i=n(91841);let l=(()=>{class e extends r.t{constructor(e){super(e),this.http=e}getUrl(){return`${a.N.apiUrl}/group`}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](i.eN))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})()},78627:function(e,t,n){"use strict";n.d(t,{k:function(){return l}});var r=n(78171),a=n(92340),o=n(37716),i=n(91841);let l=(()=>{class e extends r.t{constructor(e){super(e),this.http=e}getUrl(){return`${a.N.apiUrl}/place`}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](i.eN))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})()}}]);