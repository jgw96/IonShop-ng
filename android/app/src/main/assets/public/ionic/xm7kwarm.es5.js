/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(r,o){function a(t){try{l(n.next(t))}catch(t){o(t)}}function s(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(a,s)}l((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var i,n,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,n&&(r=n[2&o[0]?"return":o[0]?"throw":"next"])&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[0,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],n=0}finally{i=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Ionic.loadBundle("xm7kwarm",["exports","./chunk-f06b75c7.js","./chunk-d492bf7f.js","./chunk-4d7345d3.js","./chunk-5d44f198.js","./chunk-eaaa20ba.js","./chunk-b122ec41.js"],function(t,e,i,n,r,o,a){var s=window.Ionic.h;function l(t,e,i,n){if(t===S||t===w){try{return e=new Date(i.year,i.month-1,i.day).getDay(),t===S?(n.dayNames?n.dayNames:W)[e]:(n.dayShortNames?n.dayShortNames:A)[e]}catch(t){}return""}if(t===N)return i&&i.hour?i.hour<12?"AM":"PM":e?e.toUpperCase():"";if(t===j)return i&&i.hour?i.hour<12?"am":"pm":e||"";if(null==e)return"";if(t===k||t===D||t===P||t===C||t===Y||t===T)return b(e);if(t===g)return v(e);if(t===x)return(n.monthNames?n.monthNames:E)[e-1];if(t===M)return(n.monthShortNames?n.monthShortNames:H)[e-1];if(t===I||t===O){if(0===e)return"12";if(e>12&&(e-=12),t===I&&e<10)return"0"+e}return e.toString()}function u(t,e,i,n,r){return void 0===n&&(n=0),void 0===r&&(r=0),parseInt("1"+v(t)+b(e)+b(i)+b(n)+b(r),10)}function c(t){return t?u(t.year,t.month,t.day,t.hour,t.minute):-1}var h=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,d=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;function p(t){var e=null;if(t&&""!==t&&((e=d.exec(t))?(e.unshift(void 0,void 0),e[2]=e[3]=void 0):e=h.exec(t)),null==e)return null;for(var i=1;i<8;i++)e[i]=void 0!==e[i]?parseInt(e[i],10):null;var n=0;return e[9]&&e[10]&&(n=60*parseInt(e[10],10),e[11]&&(n+=parseInt(e[11],10)),"-"===e[9]&&(n*=-1)),{year:e[1],month:e[2],day:e[3],hour:e[4],minute:e[5],second:e[6],millisecond:e[7],tzOffset:n}}function m(t){for(var e in F)if(F[e].f===t)return F[e].k;return null}function f(t,e){if(t){"string"==typeof t&&(t=t.replace(/\[|\]/g,"").split(","));var i=void 0;return Array.isArray(t)&&(i=t.map(function(t){return t.toString().trim()})),i&&i.length||console.warn('Invalid "'+e+'Names". Must be an array of strings, or a comma separated string.'),i}}function y(t,e){var i;return"string"==typeof t&&(t=t.replace(/\[|\]|\s/g,"").split(",")),(i=Array.isArray(t)?t.map(function(t){return parseInt(t,10)}).filter(isFinite):[t])&&i.length||console.warn('Invalid "'+e+'Values". Must be an array of numbers, or a comma separated string of numbers.'),i}function b(t){return("0"+(t?Math.abs(t):"0")).slice(-2)}function v(t){return("000"+(t?Math.abs(t):"0")).slice(-4)}var g="YYYY",k="YY",x="MMMM",M="MMM",D="MM",S="DDDD",w="DDD",P="DD",C="HH",I="hh",O="h",Y="mm",T="ss",N="A",j="a",F=[{f:g,k:"year"},{f:x,k:"month"},{f:S,k:"day"},{f:M,k:"month"},{f:w,k:"day"},{f:k,k:"year"},{f:D,k:"month"},{f:P,k:"day"},{f:C,k:"hour"},{f:I,k:"hour"},{f:Y,k:"minute"},{f:T,k:"second"},{f:"M",k:"month"},{f:"D",k:"day"},{f:"H",k:"hour"},{f:O,k:"hour"},{f:"m",k:"minute"},{f:"s",k:"second"},{f:N,k:"ampm"},{f:j,k:"ampm"}],W=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],A=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],E=["January","February","March","April","May","June","July","August","September","October","November","December"],H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],V=[I,O,Y,"m",T,"s"],_=function(){function t(){this.inputId="ion-dt-"+B++,this.labelId=this.inputId+"-lbl",this.locale={},this.datetimeMin={},this.datetimeMax={},this.datetimeValue={},this.disabled=!1,this.displayFormat="MMM D, YYYY",this.cancelText="Cancel",this.doneText="Done",this.pickerOptions={buttons:[],columns:[]}}return t.prototype.disabledChanged=function(){this.emitStyle()},t.prototype.valueChanged=function(){this.updateValue(),this.emitStyle()},t.prototype.componentWillLoad=function(){this.ionStyle=e.deferEvent(this.ionStyle),this.locale={monthNames:f(this.monthNames,"monthNames"),monthShortNames:f(this.monthShortNames,"monthShortNames"),dayNames:f(this.dayNames,"dayNames"),dayShortNames:f(this.dayShortNames,"dayShortNames")},this.updateValue()},t.prototype.componentDidLoad=function(){this.emitStyle()},t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,datetime:!0,"datetime-disabled":this.disabled,"input-has-value":this.hasValue()})},t.prototype.updateValue=function(){!function(t,e){if(e&&""!==e){if("string"==typeof e){if(e=p(e))return Object.assign(t,e),!0}else if(e.year||e.hour||e.month||e.day||e.minute||e.second){for(var i in e.ampm&&e.hour&&(e.hour.value="pm"===e.ampm.value?12===e.hour.value?12:e.hour.value+12:12===e.hour.value?0:e.hour.value),e)t[i]=e[i].value;return!0}console.warn('Error parsing date: "'+e+'". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime')}else for(var i in t)delete t[i]}(this.datetimeValue,this.value),this.updateText()},t.prototype.buildPicker=function(t){var e=this,i=t.buttons;return i&&0!==i.length||(t.buttons=[{text:this.cancelText,role:"cancel",handler:function(){return e.ionCancel.emit()}},{text:this.doneText,handler:function(t){return e.value=t}}]),t.columns=this.generateColumns(),this.pickerCtrl.create(t)},t.prototype.open=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return this.disabled?[2]:(t=Object.assign({},this.pickerOptions),e=this,[4,this.buildPicker(t)]);case 1:return e.picker=i.sent(),this.validate(),[4,this.picker.present()];case 2:return i.sent(),[2]}})})},t.prototype.generateColumns=function(){var t=this,e=[],i=this.pickerFormat||this.displayFormat||L;if(i){this.calcMinMax(),-1===(i=i.replace("DDDD","{~}").replace("DDD","{~}")).indexOf("D")&&(i=i.replace("{~}","D")),function(t){var e=[];t=t.replace(/[^\w\s]/gi," "),F.forEach(function(e){e.f.length>1&&t.indexOf(e.f)>-1&&t.indexOf(e.f+e.f.charAt(0))<0&&(t=t.replace(e.f," "+e.f+" "))});var i=t.split(" ").filter(function(t){return t.length>0});return i.forEach(function(t,n){F.forEach(function(r){if(t===r.f){if((t===N||t===j)&&(e.indexOf(O)<0&&e.indexOf(I)<0||-1===V.indexOf(i[n-1])))return;e.push(t)}})}),e}(i=i.replace(/{~}/g,"")).forEach(function(i){var n=m(i),r={name:n,selectedIndex:0,options:(t[n+"Values"]?y(t[n+"Values"],n):function(t,e,i){var n=[];if(t===g||t===k){if(!i.year||!e.year)throw new Error("min and max year is undefined");for(var r=i.year-1;r>=e.year;r--)n.push(r)}else if(t===x||t===M||t===D||"M"===t||t===I||t===O)for(r=1;r<13;r++)n.push(r);else if(t===S||t===w||t===P||"D"===t)for(r=1;r<32;r++)n.push(r);else if(t===C||"H"===t)for(r=0;r<24;r++)n.push(r);else if(t===Y||"m"===t)for(r=0;r<60;r++)n.push(r);else if(t===T||"s"===t)for(r=0;r<60;r++)n.push(r);else t!==N&&t!==j||n.push("am","pm");return n}(i,t.datetimeMin,t.datetimeMax)).map(function(e){return{value:e,text:l(i,e,null,t.locale)}})},o=function(t,e){return e===N||e===j?t.hour<12?"am":"pm":e===I||e===O?t.hour>12?t.hour-12:t.hour:t[m(e)]}(t.datetimeValue,i),a=r.options.findIndex(function(t){return t.value===o});a>=0&&(r.selectedIndex=a),e.push(r)});var n=this.datetimeMin,r=this.datetimeMax;["month","day","hour","minute"].filter(function(t){return!e.find(function(e){return e.name===t})}).forEach(function(t){n[t]=0,r[t]=0}),e=this.divyColumns(e)}return e},t.prototype.validate=function(){var t=new Date,e=c(this.datetimeMin),i=c(this.datetimeMax),n=this.picker.getColumn("year"),r=t.getFullYear();if(n){n.options.find(function(e){return e.value===t.getFullYear()})||(r=n.options[0].value);var o=n.selectedIndex;if(null!=o){var a=n.options[o];a&&(r=a.value)}}var s,l=this.validateColumn("month",1,e,i,[r,0,0,0,0],[r,12,31,23,59]),u=4===(s=l)||6===s||9===s||11===s?30:2===s?r%4==0&&r%100!=0||r%400==0?29:28:31,h=this.validateColumn("day",2,e,i,[r,l,0,0,0],[r,l,u,23,59]),d=this.validateColumn("hour",3,e,i,[r,l,h,0,0],[r,l,h,23,59]);this.validateColumn("minute",4,e,i,[r,l,h,d,0],[r,l,h,d,59])},t.prototype.calcMinMax=function(t){var e=(t||new Date).getFullYear();if(this.yearValues){var i=y(this.yearValues,"year");null==this.min&&(this.min=Math.min.apply(Math,i)),null==this.max&&(this.max=Math.max.apply(Math,i))}else null==this.min&&(this.min=(e-100).toString()),null==this.max&&(this.max=e.toString());var n=this.datetimeMin=p(this.min),r=this.datetimeMax=p(this.max);n.year=n.year||e,r.year=r.year||e,n.month=n.month||1,r.month=r.month||12,n.day=n.day||1,r.day=r.day||31,n.hour=n.hour||0,r.hour=r.hour||23,n.minute=n.minute||0,r.minute=r.minute||59,n.second=n.second||0,r.second=r.second||59,n.year>r.year&&(console.error("min.year > max.year"),n.year=r.year-100),n.year===r.year&&(n.month>r.month?(console.error("min.month > max.month"),n.month=1):n.month===r.month&&n.day>r.day&&(console.error("min.day > max.day"),n.day=1))},t.prototype.validateColumn=function(t,i,n,r,o,a){var s=this.picker.getColumn(t);if(!s)return 0;for(var l=o.slice(),c=a.slice(),h=s.options,d=h.length-1,p=0,m=0;m<h.length;m++){var f=h[m],y=f.value;l[i]=f.value,c[i]=f.value,(f.disabled=y<o[i]||y>a[i]||u(c[0],c[1],c[2],c[3],c[4])<n||u(l[0],l[1],l[2],l[3],l[4])>r)||(d=Math.min(d,m),p=Math.max(p,m))}var b=s.selectedIndex=e.clamp(d,s.selectedIndex,p),v=s.options[b];return v?v.value:0},t.prototype.divyColumns=function(t){for(var e,i,n=t,r=[],o=0;o<n.length;o++){e=n[o],r.push(0);for(var a=0;a<e.options.length;a++)(i=e.options[a].text.length)>r[o]&&(r[o]=i)}return 2===r.length?(i=Math.max(r[0],r[1]),n[0].align="right",n[1].align="left",n[0].optionsWidth=n[1].optionsWidth=17*i+"px"):3===r.length&&(i=Math.max(r[0],r[2]),n[0].align="right",n[1].columnWidth=17*r[1]+"px",n[0].optionsWidth=n[2].optionsWidth=17*i+"px",n[2].align="left"),t},t.prototype.updateText=function(){var t=this.displayFormat||this.pickerFormat||L;this.text=function(t,e,i){if(void 0!==e){var n=[],r=!1;if(F.forEach(function(o,a){if(t.indexOf(o.f)>-1){var s="{"+a+"}",u=l(o.f,e[o.k],e,i);!r&&u&&e[o.k]&&(r=!0),n.push(s,u),t=t.replace(o.f,s)}}),r){for(var o=0;o<n.length;o+=2)t=t.replace(n[o],n[o+1]);return t}}}(t,this.datetimeValue,this.locale)},t.prototype.hasValue=function(){var t=this.datetimeValue;return t&&"object"==typeof t&&Object.keys(t).length>0},t.prototype.hostData=function(){return{class:{"datetime-disabled":this.disabled}}},t.prototype.render=function(){var t=!1,e=this.text;return null==e&&(this.placeholder?(e=this.placeholder,t=!0):e=""),[s("div",{class:{"datetime-text":!0,"datetime-placeholder":t}},e),s("button",{type:"button","aria-haspopup":"true",id:this.datetimeId,"aria-labelledby":this.labelId,"aria-disabled":!!this.disabled&&"true",onClick:this.open.bind(this),class:"datetime-cover"},"md"===this.mode&&s("ion-ripple-effect",{tapClick:!0}))]},Object.defineProperty(t,"is",{get:function(){return"ion-datetime"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"host",{get:function(){return{theme:"datetime"}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{cancelText:{type:String,attr:"cancel-text"},dayNames:{type:String,attr:"day-names"},dayShortNames:{type:String,attr:"day-short-names"},dayValues:{type:"Any",attr:"day-values"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},displayFormat:{type:String,attr:"display-format"},doneText:{type:String,attr:"done-text"},hourValues:{type:"Any",attr:"hour-values"},max:{type:String,attr:"max",mutable:!0},min:{type:String,attr:"min",mutable:!0},minuteValues:{type:"Any",attr:"minute-values"},monthNames:{type:String,attr:"month-names"},monthShortNames:{type:String,attr:"month-short-names"},monthValues:{type:"Any",attr:"month-values"},pickerCtrl:{connect:"ion-picker-controller"},pickerFormat:{type:String,attr:"picker-format"},pickerOptions:{type:"Any",attr:"picker-options"},placeholder:{type:String,attr:"placeholder"},text:{state:!0},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]},yearValues:{type:"Any",attr:"year-values"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-datetime{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden}.datetime-cover{left:0;top:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer}.datetime-cover:active,.datetime-cover:focus{outline:0}.datetime-text{overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;min-width:16px;min-height:1.2em;font-size:inherit;line-height:1.2;text-overflow:ellipsis;white-space:nowrap}.datetime-disabled,.item-datetime-disabled ion-label{opacity:.4;pointer-events:none}.item-label-floating ion-datetime,.item-label-stacked ion-datetime{padding-left:0;width:100%}.item .datetime{position:static}.datetime-md{padding:13px 8px 13px 16px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.datetime-md .datetime-placeholder{color:var(--ion-placeholder-text-md-color,var(--ion-placeholder-text-color,#999))}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),B=0,L="MMM D, YYYY";function q(t,e){var i=new t,n=new t;n.addElement(e.querySelector("ion-backdrop"));var r=new t;return r.addElement(e.querySelector(".picker-wrapper")),n.fromTo("opacity",.01,.26),r.fromTo("translateY","100%","0%"),Promise.resolve(i.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(n).add(r))}function U(t,e){var i=new t,n=new t;n.addElement(e.querySelector("ion-backdrop"));var r=new t;return r.addElement(e.querySelector(".picker-wrapper")),n.fromTo("opacity",.26,.01),r.fromTo("translateY","0%","100%"),Promise.resolve(i.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(n).add(r))}var J=function(){function t(){this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.columns=[],this.showBackdrop=!0,this.enableBackdropDismiss=!0,this.willAnimate=!0}return t.prototype.componentWillLoad=function(){if(!this.spinner){var t="ios"===this.mode?"lines":"crescent";this.spinner=this.config.get("pickerSpinner",t)}void 0===this.showSpinner&&(this.showSpinner=!(!this.spinner||"hide"===this.spinner))},t.prototype.componentDidLoad=function(){this.ionPickerDidLoad.emit()},t.prototype.componentDidUnload=function(){this.ionPickerDidUnload.emit()},t.prototype.onBackdropTap=function(){var t=this.buttons.find(function(t){return"cancel"===t.role});t?this.buttonClick(t):this.dismiss()},t.prototype.present=function(){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(e){switch(e.label){case 0:return[4,i.present(this,"pickerEnter",q,q,void 0)];case 1:return e.sent(),this.duration&&(this.durationTimeout=setTimeout(function(){return t.dismiss()},this.duration)),[2]}})})},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),i.dismiss(this,t,e,"pickerLeave",U,U)},t.prototype.onDidDismiss=function(t){return i.eventMethod(this.el,"ionPickerDidDismiss",t)},t.prototype.onWillDismiss=function(t){return i.eventMethod(this.el,"ionPickerWillDismiss",t)},t.prototype.addButton=function(t){this.buttons.push(t)},t.prototype.addColumn=function(t){this.columns.push(t)},t.prototype.getColumn=function(t){return this.columns.find(function(e){return e.name===t})},t.prototype.getColumns=function(){return this.columns},t.prototype.buttonClick=function(t){var e=!0;t.handler&&!1===t.handler(this.getSelected())&&(e=!1),e&&this.dismiss()},t.prototype.getSelected=function(){var t={};return this.columns.forEach(function(e,i){var n=e.selectedIndex?e.options[e.selectedIndex]:null;t[e.name]={text:n?n.text:null,value:n?n.value:null,columnIndex:i}}),t},t.prototype.hostData=function(){return{style:{zIndex:2e4+this.overlayId}}},t.prototype.render=function(){var t=this,e=this.buttons.map(function(t){return"string"==typeof t&&(t={text:t}),t.cssClass||(t.cssClass=""),t}).filter(function(t){return null!==t}),i=this.columns;return[s("ion-backdrop",{visible:this.showBackdrop,tappable:this.enableBackdropDismiss}),s("div",{class:"picker-wrapper",role:"dialog"},s("div",{class:"picker-toolbar"},e.map(function(e){return s("div",{class:function(t){var e={"picker-toolbar-button":!0};return t.role&&(e["picker-toolbar-"+t.role]=!0),e}(e)},s("button",{onClick:function(){return t.buttonClick(e)},class:(i=e,Object.assign({"picker-button":!0},n.getClassMap(i.cssClass)))},e.text));var i})),s("div",{class:"picker-columns"},s("div",{class:"picker-above-highlight"}),i.map(function(t){return s("ion-picker-column",{col:t})}),s("div",{class:"picker-below-highlight"})))]},Object.defineProperty(t,"is",{get:function(){return"ion-picker"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"host",{get:function(){return{theme:"picker"}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{addButton:{method:!0},addColumn:{method:!0},animationCtrl:{connect:"ion-animation-controller"},buttons:{type:"Any",attr:"buttons"},columns:{type:"Any",attr:"columns"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enableBackdropDismiss:{type:Boolean,attr:"enable-backdrop-dismiss"},enterAnimation:{type:"Any",attr:"enter-animation"},getColumn:{method:!0},getColumns:{method:!0},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayId:{type:Number,attr:"overlay-id"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},showSpinner:{state:!0},spinner:{state:!0},willAnimate:{type:Boolean,attr:"will-animate"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionPickerDidLoad",method:"ionPickerDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidUnload",method:"ionPickerDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-picker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;position:absolute;z-index:1000;display:block;width:100%;height:100%;contain:strict}.picker-toolbar{z-index:1;width:100%;contain:strict}.picker-wrapper{left:0;right:0;bottom:0;margin:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);position:absolute;z-index:10;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;max-width:500px;contain:strict}.picker-columns{margin-bottom:constant(safe-area-inset-bottom);margin-bottom:env(safe-area-inset-bottom);position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;contain:strict}.picker-col{-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;contain:content}.picker-opts{position:relative;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;max-width:100%}.picker-prefix{text-align:right;text-align:end;position:relative;-webkit-box-flex:2;-webkit-flex:2;-ms-flex:2;flex:2;min-width:45%;max-width:50%;white-space:nowrap}.picker-suffix{text-align:left;text-align:start;position:relative;-webkit-box-flex:2;-webkit-flex:2;-ms-flex:2;flex:2;min-width:45%;max-width:50%;white-space:nowrap}.picker-opt{left:0;top:0;text-align:center;position:absolute;display:block;overflow:hidden;width:100%;border:0;text-overflow:ellipsis;white-space:nowrap;will-change:transform;contain:strict}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.picker-above-highlight,.picker-below-highlight{display:none;pointer-events:none}.picker-button{border:0;font-family:inherit}.picker-button:active,.picker-button:focus,.picker-opt:active,.picker-opt:focus{outline:0}.picker-md{font-family:Roboto,\"Helvetica Neue\",sans-serif}.picker-md .picker-wrapper{height:260px;border-top:.55px solid rgba(var(--ion-item-md-border-color-rgb,var(--ion-item-border-color-rgb,0,0,0)),.13);background:var(--ion-background-md-color,var(--ion-background-color,#fff))}.picker-md .picker-toolbar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:44px;background:var(--ion-background-md-color,var(--ion-background-color,#fff))}.picker-md .picker-button,.picker-md .picker-button.activated{margin:0;padding:0 1.1em;height:44px;font-size:14px;font-weight:500;text-transform:uppercase;color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));background:0 0;-webkit-box-shadow:none;box-shadow:none}.picker-md .picker-columns{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-md .picker-col{padding:0 8px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-md .picker-opts,.picker-md .picker-prefix,.picker-md .picker-suffix{top:77px;font-size:22px;line-height:42px;color:var(--ion-item-md-text-color,var(--ion-item-text-color,var(--ion-text-color,#000)));-webkit-transform-style:preserve-3d;transform-style:preserve-3d;pointer-events:none}.picker-md .picker-opt{margin:0;padding:0;height:43px;font-size:22px;line-height:42px;color:var(--ion-item-md-text-color,var(--ion-item-text-color,var(--ion-text-color,#000)));background:0 0;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-md .picker-opt.picker-opt-selected,.picker-md .picker-prefix,.picker-md .picker-suffix{color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.picker-md .picker-above-highlight{left:0;top:0;-webkit-transform:translate3d(0,0,90px);transform:translate3d(0,0,90px);position:absolute;z-index:10;width:100%;height:81px;border-bottom:1px solid rgba(var(--ion-item-md-border-color-rgb,var(--ion-item-border-color-rgb,0,0,0)),.13);background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--ion-background-md-color,var(--ion-background-color,#fff))),to(rgba(var(--ion-background-md-color-rgb,var(--ion-background-color-rgb,255,255,255)),.8)));background:linear-gradient(to bottom,var(--ion-background-md-color,var(--ion-background-color,#fff)) 20%,rgba(var(--ion-background-md-color-rgb,var(--ion-background-color-rgb,255,255,255)),.8) 100%)}.picker-md .picker-below-highlight{left:0;top:115px;-webkit-transform:translate3d(0,0,90px);transform:translate3d(0,0,90px);position:absolute;z-index:11;width:100%;height:119px;border-top:1px solid rgba(var(--ion-item-md-border-color-rgb,var(--ion-item-border-color-rgb,0,0,0)),.13);background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--ion-background-md-color,var(--ion-background-color,#fff))),to(rgba(var(--ion-background-md-color-rgb,var(--ion-background-color-rgb,255,255,255)),.8)));background:linear-gradient(to top,var(--ion-background-md-color,var(--ion-background-color,#fff)) 30%,rgba(var(--ion-background-md-color-rgb,var(--ion-background-color-rgb,255,255,255)),.8) 100%)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),z=function(){function t(){this.optHeight=0,this.pos=[],this.rotateFactor=0,this.scaleFactor=1,this.velocity=0,this.y=0}return t.prototype.componentWillLoad=function(){var t=0,e=.81;"ios"===this.mode&&(t=-.46,e=1),this.rotateFactor=t,this.scaleFactor=e},t.prototype.componentDidLoad=function(){var t=this.el.querySelector(".picker-opts");this.optHeight=t.firstElementChild?t.firstElementChild.clientHeight:0,this.refresh()},t.prototype.optClick=function(t,e){this.velocity||(t.preventDefault(),t.stopPropagation(),this.setSelected(e,150))},t.prototype.setSelected=function(t,e){var i=t>-1?t*this.optHeight*-1:0;this.velocity=0,this.update(i,e,!0,!0)},t.prototype.update=function(t,e,i,n){var r,o,a,s,l;t=Math.round(t);var u,c,h,d=0,p=0,m=this.el.querySelector(".picker-opts").children,f=m.length,y=this.col.selectedIndex=Math.min(Math.max(Math.round(-t/this.optHeight),0),f-1),b=0===e?null:e+"ms",v="scale("+this.scaleFactor+")";for(r=0;r<f;r++)o=m[r],a=this.col.options[r],s=r*this.optHeight+t,l=!0,c="",0!==this.rotateFactor?(u=s*this.rotateFactor,Math.abs(u)>90?l=!1:(d=0,p=90,c="rotateX("+u+"deg) ")):(p=0,d=s,Math.abs(d)>170&&(l=!1)),h=y===r,l?(c+="translate3d(0px,"+d+"px,"+p+"px) ",1===this.scaleFactor||h||(c+=v)):c="translate3d(-9999px,0px,0px)",e!==a.duration&&(a.duration=e,o.style.transitionDuration=b),c!==a.transform&&(a.transform=c,o.style.transform=c),h!==a.selected&&(a.selected=h,h?o.classList.add(R):o.classList.remove(R));this.col.prevSelected=y,i&&(this.y=t),n&&(void 0===this.lastIndex?this.lastIndex=this.col.selectedIndex:this.lastIndex!==this.col.selectedIndex&&(this.lastIndex=this.col.selectedIndex))},t.prototype.decelerate=function(){var t=this,e=0;if(isNaN(this.y)||!this.optHeight)this.update(e,0,!0,!0);else if(Math.abs(this.velocity)>0){this.velocity*=K,this.velocity=this.velocity>0?Math.max(this.velocity,1):Math.min(this.velocity,-1),(e=Math.round(this.y-this.velocity))>this.minY?(e=this.minY,this.velocity=0):e<this.maxY&&(e=this.maxY,this.velocity=0);var i=e%this.optHeight!=0||Math.abs(this.velocity)>1;this.update(e,0,!0,!i),i&&this.queue.read(function(){return t.decelerate()})}else if(this.y%this.optHeight!=0){var n=Math.abs(this.y%this.optHeight);this.velocity=n>this.optHeight/2?1:-1,this.decelerate()}var r=Math.max(Math.abs(Math.round(e/this.optHeight)),0);r!==this.lastTempIndex&&o.hapticSelectionChanged(),this.lastTempIndex=r},t.prototype.canStart=function(){return!0},t.prototype.onDragStart=function(t){this.startY,t.event&&(t.event.preventDefault(),t.event.stopPropagation()),this.startY=t.startY,this.velocity=0,this.pos.length=0,this.pos.push(this.startY,Date.now());for(var e=this.col.options,i=e.length-1,n=0,r=0;r<e.length;r++)e[r].disabled||(i=Math.min(i,r),n=Math.max(n,r));return this.minY=i*this.optHeight*-1,this.maxY=n*this.optHeight*-1,!0},t.prototype.onDragMove=function(t){t.event&&(t.event.preventDefault(),t.event.stopPropagation());var e=t.currentY;if(this.pos.push(e,Date.now()),void 0!==this.startY){var i=this.y+(e-this.startY);i>this.minY?(i=Math.pow(i,.8),this.bounceFrom=i):i<this.maxY?(i+=Math.pow(this.maxY-i,.9),this.bounceFrom=i):this.bounceFrom=0,this.update(i,0,!1,!1);var n=Math.max(Math.abs(Math.round(i/this.optHeight)),0);n!==this.lastTempIndex&&(this.lastTempIndex=n)}},t.prototype.onDragEnd=function(t){if(void 0!==this.startY)if(this.velocity=0,this.bounceFrom>0)this.update(this.minY,100,!0,!0);else if(this.bounceFrom<0)this.update(this.maxY,100,!0,!0);else{var i=t.currentY;this.pos.push(i,Date.now());for(var n=this.pos.length-1,r=n,o=Date.now()-100,a=n;a>0&&this.pos[a]>o;a-=2)r=a;if(r!==n){var s=this.pos[n]-this.pos[r],l=(this.pos[r-1]-this.pos[n-1])/s*Z;this.velocity=e.clamp(-$,l,$)}if(Math.abs(i-this.startY)>3){var u=this.y+(i-this.startY);this.update(u,0,!0,!0)}this.startY=void 0,this.decelerate()}},t.prototype.refresh=function(){for(var t=this.col.options.length-1,i=0,n=this.col.options,r=0;r<n.length;r++)n[r].disabled||(t=Math.min(t,r),i=Math.max(i,r));var o=e.clamp(t,this.col.selectedIndex,i);if(this.col.prevSelected!==o){var a=o*this.optHeight*-1;this.velocity=0,this.update(a,150,!0,!1)}},t.prototype.hostData=function(){return{class:{"picker-opts-left":"left"===this.col.align,"picker-opts-right":"right"===this.col.align},style:{"max-width":this.col.columnWidth}}},t.prototype.render=function(){var t=this,e=this.col,i=e.options.map(function(t){return"string"==typeof t&&(t={text:t}),t}).filter(function(t){return null!==t}),n=[];return e.prefix&&n.push(s("div",{class:"picker-prefix",style:{width:e.prefixWidth}},e.prefix)),n.push(s("ion-gesture",{canStart:this.canStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),gestureName:"picker-swipe",gesturePriority:10,direction:"y",passive:!1,threshold:0,attachTo:"parent"}),s("div",{class:"picker-opts",style:{maxWidth:e.optionsWidth}},i.map(function(e,i){return s("button",{class:{"picker-opt":!0,"picker-opt-disabled":!!e.disabled},"disable-activated":!0,onClick:function(e){return t.optClick(e,i)}},e.text)}))),e.suffix&&n.push(s("div",{class:"picker-suffix",style:{width:e.suffixWidth}},e.suffix)),n},Object.defineProperty(t,"is",{get:function(){return"ion-picker-column"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"host",{get:function(){return{theme:"picker-col"}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{col:{type:"Any",attr:"col"},el:{elementRef:!0},queue:{context:"queue"}}},enumerable:!0,configurable:!0}),t}(),R="picker-opt-selected",K=.97,Z=1e3/60,$=60,G=function(){function t(){this.pickers=new Map}return t.prototype.pickerWillPresent=function(t){this.pickers.set(t.target.overlayId,t.target)},t.prototype.pickerWillDismiss=function(t){this.pickers.delete(t.target.overlayId)},t.prototype.escapeKeyUp=function(){i.removeLastOverlay(this.pickers)},t.prototype.create=function(t){return i.createOverlay(this.doc.createElement("ion-picker"),t)},t.prototype.dismiss=function(t,e,n){return void 0===n&&(n=-1),i.dismissOverlay(t,e,this.pickers,n)},t.prototype.getTop=function(){return i.getTopOverlay(this.pickers)},Object.defineProperty(t,"is",{get:function(){return"ion-picker-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"body:ionPickerWillPresent",method:"pickerWillPresent"},{name:"body:ionPickerWillDismiss",method:"pickerWillDismiss"},{name:"body:ionPickerDidUnload",method:"pickerWillDismiss"},{name:"body:keyup.escape",method:"escapeKeyUp"}]},enumerable:!0,configurable:!0}),t}();t.IonDatetime=_,t.IonPicker=J,t.IonPickerColumn=z,t.IonPickerController=G,Object.defineProperty(t,"__esModule",{value:!0})});