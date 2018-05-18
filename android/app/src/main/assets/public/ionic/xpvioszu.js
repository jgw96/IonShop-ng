/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{e}from"./chunk-770a6cdb.js";import{a as s}from"./chunk-f025f93c.js";class i{constructor(){this.isCancelVisible=!1,this.shouldBlur=!0,this.shouldAlignLeft=!0,this.activated=!1,this.focused=!1,this.animated=!1,this.autocomplete="off",this.autocorrect="off",this.cancelButtonText="Cancel",this.debounce=250,this.placeholder="Search",this.showCancelButton=!1,this.spellcheck=!1,this.type="search",this.value=""}debounceChanged(){this.ionChange=e(this.ionChange,this.debounce)}valueChanged(){const t=this.nativeInput,e=this.value;t&&t.value!==e&&(t.value=e),this.ionChange.emit({value:e})}componentDidLoad(){this.positionElements(),this.debounceChanged()}clearInput(){this.ionClear.emit(),setTimeout(()=>{const t=this.value;void 0!==t&&""!==t&&(this.value="")},64),this.shouldBlur=!1}cancelSearchbar(){this.ionCancel.emit(),this.clearInput(),this.shouldBlur=!0,this.activated=!1}onInput(t){const e=t.target;e&&(this.value=e.value),this.ionInput.emit(t)}inputUpdated(){this.positionElements()}onBlur(){const t=this.el.querySelector(".searchbar-input");if(!1===this.shouldBlur)return t.focus(),this.shouldBlur=!0,this.ionBlur.emit(),void this.inputUpdated();this.focused=!1,this.positionElements()}onFocus(){this.activated=!0,this.focused=!0,this.ionFocus.emit(),this.inputUpdated(),this.positionElements()}positionElements(){const t=this.shouldAlignLeft,e=!this.animated||this.value&&""!==this.value.toString().trim()||!0===this.focused;this.shouldAlignLeft=e,"ios"===this.mode&&(t!==e&&this.positionPlaceholder(),this.animated&&this.positionCancelButton())}positionPlaceholder(){const t="rtl"===this.doc.dir,e=this.el.querySelector(".searchbar-input"),s=this.el.querySelector(".searchbar-search-icon");if(this.shouldAlignLeft)e.removeAttribute("style"),s.removeAttribute("style");else{const i=this.doc,o=i.createElement("span");o.innerHTML=this.placeholder,i.body.appendChild(o);const a=o.offsetWidth;o.remove();const n="calc(50% - "+a/2+"px)",c="calc(50% - "+(a/2+30)+"px)";t?(e.style.paddingRight=n,s.style.marginRight=c):(e.style.paddingLeft=n,s.style.marginLeft=c)}}positionCancelButton(){const t="rtl"===this.doc.dir,e=this.el.querySelector(".searchbar-cancel-button-ios"),s=this.focused;if(s!==this.isCancelVisible){const i=e.style;if(this.isCancelVisible=s,s)t?i.marginLeft="0":i.marginRight="0";else{const s=e.offsetWidth;s>0&&(t?i.marginLeft=-s+"px":i.marginRight=-s+"px")}}}hostData(){return{class:{"searchbar-active":this.activated,"searchbar-animated":this.animated,"searchbar-has-value":""!==this.value,"searchbar-show-cancel":this.showCancelButton,"searchbar-left-aligned":this.shouldAlignLeft,"searchbar-has-focus":this.focused}}}render(){const e=s(this.mode,this.color,"searchbar-cancel-button"),i=s(this.mode,this.color,"searchbar-search-icon"),o=this.showCancelButton?t("button",{type:"button",tabindex:"ios"!==this.mode||this.activated?void 0:-1,onClick:this.cancelSearchbar.bind(this),onMouseDown:this.cancelSearchbar.bind(this),class:e},"md"===this.mode?t("ion-icon",{name:"md-arrow-back"}):this.cancelButtonText):null;return[t("div",{class:"searchbar-input-container"},"md"===this.mode&&o,t("div",{class:i}),t("input",{ref:t=>this.nativeInput=t,class:"searchbar-input",onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),placeholder:this.placeholder,type:this.type,value:this.value,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellCheck:this.spellcheck}),t("button",{type:"button",class:"searchbar-clear-icon",onClick:this.clearInput.bind(this),onMouseDown:this.clearInput.bind(this)})),"ios"===this.mode&&o]}static get is(){return"ion-searchbar"}static get host(){return{theme:"searchbar"}}static get properties(){return{activated:{state:!0},animated:{type:Boolean,attr:"animated"},autocomplete:{type:String,attr:"autocomplete"},autocorrect:{type:String,attr:"autocorrect"},cancelButtonText:{type:String,attr:"cancel-button-text"},color:{type:String,attr:"color"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},doc:{context:"document"},el:{elementRef:!0},focused:{state:!0},mode:{type:String,attr:"mode"},placeholder:{type:String,attr:"placeholder"},showCancelButton:{type:Boolean,attr:"show-cancel-button"},spellcheck:{type:Boolean,attr:"spellcheck"},type:{type:String,attr:"type"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClear",method:"ionClear",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-searchbar{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%}.searchbar-icon{pointer-events:none}.searchbar-input-container{position:relative;display:block;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input{-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;font-family:inherit}.searchbar-input:active,.searchbar-input:focus{outline:0}.searchbar-input::-webkit-search-cancel-button{display:none}.searchbar-clear-icon{margin:0;padding:0;display:none;min-height:0}.searchbar-has-value.searchbar-has-focus .searchbar-clear-icon{display:block}.searchbar-ios{padding:12px;height:60px;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Roboto,sans-serif;contain:strict}.searchbar-ios .searchbar-input-container{height:36px;contain:strict}.searchbar-search-icon-ios{background-position:center;background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-text-ios-color-step-400,%20var(--ion-text-color-step-400,%20%23666666))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-text-ios-color-step-400,%20var(--ion-text-color-step-400,%20%23666666))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");margin-left:calc(50% - 60px);left:9px;top:0;position:absolute;width:14px;height:100%;background-repeat:no-repeat;background-size:13px;contain:strict}.searchbar-ios .searchbar-input{padding:0 28px;border-radius:10px;height:100%;font-size:14px;font-weight:400;color:var(--ion-text-ios-color,var(--ion-text-color,#000));background-color:rgba(var(--ion-text-ios-color-rgb,var(--ion-text-color-rgb,0,0,0)),.07);contain:strict}.searchbar-ios .searchbar-input::-moz-placeholder{color:var(--ion-text-ios-color-step-400,var(--ion-text-color-step-400,#666))}.searchbar-ios .searchbar-input:-ms-input-placeholder{color:var(--ion-text-ios-color-step-400,var(--ion-text-color-step-400,#666))}.searchbar-ios .searchbar-input::-webkit-input-placeholder{text-indent:0;color:var(--ion-text-ios-color-step-400,var(--ion-text-color-step-400,#666))}.searchbar-ios .searchbar-clear-icon{right:0;top:0;background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-text-ios-color-step-400,%20var(--ion-text-color-step-400,%20%23666666))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");background-position:center;position:absolute;width:30px;height:100%;border:0;background-color:transparent;background-repeat:no-repeat;background-size:18px}.searchbar-cancel-button-ios{padding:0 0 0 8px;display:none;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border:0;font-size:16px;color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff));background-color:transparent;cursor:pointer}.searchbar-left-aligned .searchbar-search-icon-ios{margin-left:0}.searchbar-ios.searchbar-left-aligned .searchbar-input{padding-left:30px}.searchbar-show-cancel.searchbar-animated .searchbar-cancel-button-ios,.searchbar-show-cancel.searchbar-has-focus .searchbar-cancel-button-ios{display:block}.searchbar-animated .searchbar-search-icon-ios,.searchbar-ios.searchbar-animated .searchbar-input{-webkit-transition:all .3s ease;transition:all .3s ease}.searchbar-animated.searchbar-has-focus .searchbar-cancel-button-ios{opacity:1;pointer-events:auto}.searchbar-animated .searchbar-cancel-button-ios{margin-right:-100%;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:0;-webkit-transition:all .3s ease;transition:all .3s ease;pointer-events:none}.searchbar-ios-primary .searchbar-cancel-button-ios{color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff))}.searchbar-ios-primary .searchbar-cancel-button-ios:hover{color:var(--ion-color-ios-primary-tint,var(--ion-color-primary-tint,#4c8dff))}.toolbar-ios-primary .searchbar-search-icon-ios{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-primary-contrast,%20var(--ion-color-primary-contrast,%20%23fff))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-primary-contrast,%20var(--ion-color-primary-contrast,%20%23fff))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");opacity:.5}.toolbar-ios-primary .searchbar-ios .searchbar-input{color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff));background:rgba(var(--ion-color-ios-primary-contrast-rgb,var(--ion-color-primary-contrast-rgb,255,255,255)),.07)}.toolbar-ios-primary .searchbar-ios .searchbar-input::-moz-placeholder{color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff));opacity:.5}.toolbar-ios-primary .searchbar-ios .searchbar-input:-ms-input-placeholder{color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff));opacity:.5}.toolbar-ios-primary .searchbar-ios .searchbar-input::-webkit-input-placeholder{text-indent:0;color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff));opacity:.5}.toolbar-ios-primary .searchbar-ios .searchbar-clear-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-primary-contrast,%20var(--ion-color-primary-contrast,%20%23fff))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");opacity:.5}.toolbar-ios-primary .searchbar-ios .searchbar-cancel-button-ios{color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff))}.searchbar-ios-secondary .searchbar-cancel-button-ios{color:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8))}.searchbar-ios-secondary .searchbar-cancel-button-ios:hover{color:var(--ion-color-ios-secondary-tint,var(--ion-color-secondary-tint,#24d6ea))}.toolbar-ios-secondary .searchbar-search-icon-ios{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-secondary-contrast,%20var(--ion-color-secondary-contrast,%20%23fff))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-secondary-contrast,%20var(--ion-color-secondary-contrast,%20%23fff))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");opacity:.5}.toolbar-ios-secondary .searchbar-ios .searchbar-input{color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff));background:rgba(var(--ion-color-ios-secondary-contrast-rgb,var(--ion-color-secondary-contrast-rgb,255,255,255)),.07)}.toolbar-ios-secondary .searchbar-ios .searchbar-input::-moz-placeholder{color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff));opacity:.5}.toolbar-ios-secondary .searchbar-ios .searchbar-input:-ms-input-placeholder{color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff));opacity:.5}.toolbar-ios-secondary .searchbar-ios .searchbar-input::-webkit-input-placeholder{text-indent:0;color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff));opacity:.5}.toolbar-ios-secondary .searchbar-ios .searchbar-clear-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-secondary-contrast,%20var(--ion-color-secondary-contrast,%20%23fff))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");opacity:.5}.toolbar-ios-secondary .searchbar-ios .searchbar-cancel-button-ios{color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.searchbar-ios-tertiary .searchbar-cancel-button-ios{color:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#7044ff))}.searchbar-ios-tertiary .searchbar-cancel-button-ios:hover{color:var(--ion-color-ios-tertiary-tint,var(--ion-color-tertiary-tint,#7e57ff))}.toolbar-ios-tertiary .searchbar-search-icon-ios{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-tertiary-contrast,%20var(--ion-color-tertiary-contrast,%20%23fff))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-tertiary-contrast,%20var(--ion-color-tertiary-contrast,%20%23fff))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");opacity:.5}.toolbar-ios-tertiary .searchbar-ios .searchbar-input{color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));background:rgba(var(--ion-color-ios-tertiary-contrast-rgb,var(--ion-color-tertiary-contrast-rgb,255,255,255)),.07)}.toolbar-ios-tertiary .searchbar-ios .searchbar-input::-moz-placeholder{color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));opacity:.5}.toolbar-ios-tertiary .searchbar-ios .searchbar-input:-ms-input-placeholder{color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));opacity:.5}.toolbar-ios-tertiary .searchbar-ios .searchbar-input::-webkit-input-placeholder{text-indent:0;color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));opacity:.5}.toolbar-ios-tertiary .searchbar-ios .searchbar-clear-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-tertiary-contrast,%20var(--ion-color-tertiary-contrast,%20%23fff))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");opacity:.5}.toolbar-ios-tertiary .searchbar-ios .searchbar-cancel-button-ios{color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.searchbar-ios-success .searchbar-cancel-button-ios{color:var(--ion-color-ios-success,var(--ion-color-success,#10dc60))}.searchbar-ios-success .searchbar-cancel-button-ios:hover{color:var(--ion-color-ios-success-tint,var(--ion-color-success-tint,#28e070))}.toolbar-ios-success .searchbar-search-icon-ios{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-success-contrast,%20var(--ion-color-success-contrast,%20%23fff))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-success-contrast,%20var(--ion-color-success-contrast,%20%23fff))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");opacity:.5}.toolbar-ios-success .searchbar-ios .searchbar-input{color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff));background:rgba(var(--ion-color-ios-success-contrast-rgb,var(--ion-color-success-contrast-rgb,255,255,255)),.07)}.toolbar-ios-success .searchbar-ios .searchbar-input::-moz-placeholder{color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff));opacity:.5}.toolbar-ios-success .searchbar-ios .searchbar-input:-ms-input-placeholder{color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff));opacity:.5}.toolbar-ios-success .searchbar-ios .searchbar-input::-webkit-input-placeholder{text-indent:0;color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff));opacity:.5}.toolbar-ios-success .searchbar-ios .searchbar-clear-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-success-contrast,%20var(--ion-color-success-contrast,%20%23fff))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");opacity:.5}.toolbar-ios-success .searchbar-ios .searchbar-cancel-button-ios{color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff))}.searchbar-ios-warning .searchbar-cancel-button-ios{color:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00))}.searchbar-ios-warning .searchbar-cancel-button-ios:hover{color:var(--ion-color-ios-warning-tint,var(--ion-color-warning-tint,#ffd31a))}.toolbar-ios-warning .searchbar-search-icon-ios{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-warning-contrast,%20var(--ion-color-warning-contrast,%20%23fff))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-warning-contrast,%20var(--ion-color-warning-contrast,%20%23fff))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");opacity:.5}.toolbar-ios-warning .searchbar-ios .searchbar-input{color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#fff));background:rgba(var(--ion-color-ios-warning-contrast-rgb,var(--ion-color-warning-contrast-rgb,255,255,255)),.07)}.toolbar-ios-warning .searchbar-ios .searchbar-input::-moz-placeholder{color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#fff));opacity:.5}.toolbar-ios-warning .searchbar-ios .searchbar-input:-ms-input-placeholder{color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#fff));opacity:.5}.toolbar-ios-warning .searchbar-ios .searchbar-input::-webkit-input-placeholder{text-indent:0;color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#fff));opacity:.5}.toolbar-ios-warning .searchbar-ios .searchbar-clear-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-warning-contrast,%20var(--ion-color-warning-contrast,%20%23fff))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");opacity:.5}.toolbar-ios-warning .searchbar-ios .searchbar-cancel-button-ios{color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#fff))}.searchbar-ios-danger .searchbar-cancel-button-ios{color:var(--ion-color-ios-danger,var(--ion-color-danger,#f04141))}.searchbar-ios-danger .searchbar-cancel-button-ios:hover{color:var(--ion-color-ios-danger-tint,var(--ion-color-danger-tint,#f25454))}.toolbar-ios-danger .searchbar-search-icon-ios{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-danger-contrast,%20var(--ion-color-danger-contrast,%20%23fff))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-danger-contrast,%20var(--ion-color-danger-contrast,%20%23fff))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");opacity:.5}.toolbar-ios-danger .searchbar-ios .searchbar-input{color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff));background:rgba(var(--ion-color-ios-danger-contrast-rgb,var(--ion-color-danger-contrast-rgb,255,255,255)),.07)}.toolbar-ios-danger .searchbar-ios .searchbar-input::-moz-placeholder{color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff));opacity:.5}.toolbar-ios-danger .searchbar-ios .searchbar-input:-ms-input-placeholder{color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff));opacity:.5}.toolbar-ios-danger .searchbar-ios .searchbar-input::-webkit-input-placeholder{text-indent:0;color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff));opacity:.5}.toolbar-ios-danger .searchbar-ios .searchbar-clear-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-danger-contrast,%20var(--ion-color-danger-contrast,%20%23fff))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");opacity:.5}.toolbar-ios-danger .searchbar-ios .searchbar-cancel-button-ios{color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff))}.searchbar-ios-light .searchbar-cancel-button-ios{color:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8))}.searchbar-ios-light .searchbar-cancel-button-ios:hover{color:var(--ion-color-ios-light-tint,var(--ion-color-light-tint,#f5f6f9))}.toolbar-ios-light .searchbar-search-icon-ios{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-light-contrast,%20var(--ion-color-light-contrast,%20%23000))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-light-contrast,%20var(--ion-color-light-contrast,%20%23000))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");opacity:.5}.toolbar-ios-light .searchbar-ios .searchbar-input{color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000));background:rgba(var(--ion-color-ios-light-contrast-rgb,var(--ion-color-light-contrast-rgb,0,0,0)),.07)}.toolbar-ios-light .searchbar-ios .searchbar-input::-moz-placeholder{color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000));opacity:.5}.toolbar-ios-light .searchbar-ios .searchbar-input:-ms-input-placeholder{color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000));opacity:.5}.toolbar-ios-light .searchbar-ios .searchbar-input::-webkit-input-placeholder{text-indent:0;color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000));opacity:.5}.toolbar-ios-light .searchbar-ios .searchbar-clear-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-light-contrast,%20var(--ion-color-light-contrast,%20%23000))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");opacity:.5}.toolbar-ios-light .searchbar-ios .searchbar-cancel-button-ios{color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000))}.searchbar-ios-medium .searchbar-cancel-button-ios{color:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2))}.searchbar-ios-medium .searchbar-cancel-button-ios:hover{color:var(--ion-color-ios-medium-tint,var(--ion-color-medium-tint,#a2a4ab))}.toolbar-ios-medium .searchbar-search-icon-ios{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-medium-contrast,%20var(--ion-color-medium-contrast,%20%23fff))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-medium-contrast,%20var(--ion-color-medium-contrast,%20%23fff))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");opacity:.5}.toolbar-ios-medium .searchbar-ios .searchbar-input{color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#fff));background:rgba(var(--ion-color-ios-medium-contrast-rgb,var(--ion-color-medium-contrast-rgb,255,255,255)),.07)}.toolbar-ios-medium .searchbar-ios .searchbar-input::-moz-placeholder{color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#fff));opacity:.5}.toolbar-ios-medium .searchbar-ios .searchbar-input:-ms-input-placeholder{color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#fff));opacity:.5}.toolbar-ios-medium .searchbar-ios .searchbar-input::-webkit-input-placeholder{text-indent:0;color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#fff));opacity:.5}.toolbar-ios-medium .searchbar-ios .searchbar-clear-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-medium-contrast,%20var(--ion-color-medium-contrast,%20%23fff))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");opacity:.5}.toolbar-ios-medium .searchbar-ios .searchbar-cancel-button-ios{color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#fff))}.searchbar-ios-dark .searchbar-cancel-button-ios{color:var(--ion-color-ios-dark,var(--ion-color-dark,#222428))}.searchbar-ios-dark .searchbar-cancel-button-ios:hover{color:var(--ion-color-ios-dark-tint,var(--ion-color-dark-tint,#383a3e))}.toolbar-ios-dark .searchbar-search-icon-ios{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-dark-contrast,%20var(--ion-color-dark-contrast,%20%23fff))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-dark-contrast,%20var(--ion-color-dark-contrast,%20%23fff))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");opacity:.5}.toolbar-ios-dark .searchbar-ios .searchbar-input{color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff));background:rgba(var(--ion-color-ios-dark-contrast-rgb,var(--ion-color-dark-contrast-rgb,255,255,255)),.07)}.toolbar-ios-dark .searchbar-ios .searchbar-input::-moz-placeholder{color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff));opacity:.5}.toolbar-ios-dark .searchbar-ios .searchbar-input:-ms-input-placeholder{color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff));opacity:.5}.toolbar-ios-dark .searchbar-ios .searchbar-input::-webkit-input-placeholder{text-indent:0;color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff));opacity:.5}.toolbar-ios-dark .searchbar-ios .searchbar-clear-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-dark-contrast,%20var(--ion-color-dark-contrast,%20%23fff))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");opacity:.5}.toolbar-ios-dark .searchbar-ios .searchbar-cancel-button-ios{color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff))}"}static get styleMode(){return"ios"}}export{i as IonSearchbar};