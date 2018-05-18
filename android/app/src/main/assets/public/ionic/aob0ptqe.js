/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{e as t,b as a}from"./chunk-770a6cdb.js";import{a as i}from"./chunk-f025f93c.js";class s{constructor(){this.didBlurAfterEdit=!1,this.autocapitalize="none",this.autocomplete="off",this.autofocus=!1,this.clearOnEdit=!1,this.debounce=0,this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.value=""}debounceChanged(){this.ionChange=t(this.ionChange,this.debounce)}disabledChanged(){this.emitStyle()}valueChanged(){const e=this.el.querySelector("textarea"),t=this.value;e.value!==t&&(e.value=t),this.ionChange.emit({value:t})}componentDidLoad(){this.ionStyle=a(this.ionStyle),this.debounceChanged(),this.emitStyle()}emitStyle(){this.ionStyle.emit({interactive:!0,textarea:!0,input:!0,"input-disabled":this.disabled,"input-has-value":this.hasValue(),"input-has-focus":this.hasFocus()})}clearTextInput(){this.value=""}onInput(e){this.value=e.target&&e.target.value||"",this.emitStyle(),this.ionInput.emit(e)}onFocus(){this.focusChange(),this.emitStyle(),this.ionFocus.emit()}onBlur(){this.focusChange(),this.emitStyle(),this.ionBlur.emit()}onKeyDown(){this.checkClearOnEdit()}checkClearOnEdit(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&this.clearTextInput(),this.didBlurAfterEdit=!1)}focusChange(){this.clearOnEdit&&!this.hasFocus()&&this.hasValue()&&(this.didBlurAfterEdit=!0)}hasFocus(){return this.el&&this.el.querySelector(":focus")===this.el.querySelector("textarea")}hasValue(){return""!==this.value}render(){const t=i(this.mode,this.color,"native-textarea");return e("textarea",{autoCapitalize:this.autocapitalize,autoFocus:this.autofocus,disabled:this.disabled,maxLength:this.maxlength,minLength:this.minlength,name:this.name,placeholder:this.placeholder,readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,cols:this.cols,rows:this.rows,wrap:this.wrap,class:t,onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),onKeyDown:this.onKeyDown.bind(this)},this.value)}static get is(){return"ion-textarea"}static get host(){return{theme:"textarea"}}static get properties(){return{autocapitalize:{type:String,attr:"autocapitalize"},autocomplete:{type:String,attr:"autocomplete"},autofocus:{type:Boolean,attr:"autofocus"},clearOnEdit:{type:Boolean,attr:"clear-on-edit",mutable:!0},cols:{type:Number,attr:"cols"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},maxlength:{type:Number,attr:"maxlength"},minlength:{type:Number,attr:"minlength"},name:{type:String,attr:"name"},placeholder:{type:String,attr:"placeholder"},readonly:{type:Boolean,attr:"readonly"},required:{type:Boolean,attr:"required"},rows:{type:Number,attr:"rows"},spellcheck:{type:Boolean,attr:"spellcheck"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]},wrap:{type:String,attr:"wrap"}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-textarea{position:relative;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:100%}.item-input ion-textarea{position:static}.item.item-textarea{-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.native-textarea{-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;border-radius:0;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:92%;width:calc(100% - 10px);border:0;font-size:inherit;background:0 0}.native-textarea:active,.native-textarea:focus{outline:0}.native-textarea[disabled]{opacity:.4}.platform-mobile .native-textarea{resize:none}.item-input-has-focus a,.item-input-has-focus button,.item-input-has-focus textarea{pointer-events:auto}.textarea-cover{left:0;top:0;position:absolute;width:100%;height:100%}.textarea[disabled] .textarea-cover{pointer-events:none}.native-textarea-md{margin:13px 8px;padding:0;width:calc(100% - 8px - 8px);font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:inherit}.native-textarea-md::-moz-placeholder{color:var(--ion-placeholder-text-md-color,var(--ion-placeholder-text-color,#999))}.native-textarea-md:-ms-input-placeholder{color:var(--ion-placeholder-text-md-color,var(--ion-placeholder-text-color,#999))}.native-textarea-md::-webkit-input-placeholder{text-indent:0;color:var(--ion-placeholder-text-md-color,var(--ion-placeholder-text-color,#999))}.item-label-floating .native-textarea-md,.item-label-stacked .native-textarea-md{margin-left:0;margin-top:8px;margin-bottom:8px;width:calc(100% - 8px)}"}static get styleMode(){return"md"}}export{s as IonTextarea};