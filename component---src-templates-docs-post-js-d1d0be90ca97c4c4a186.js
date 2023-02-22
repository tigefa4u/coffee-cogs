(self.webpackChunkcoffee_cogs_docs=self.webpackChunkcoffee_cogs_docs||[]).push([[751],{478:function(e,n,l){"use strict";var t=l(791),o=Object.prototype.hasOwnProperty,r={align:"text-align",valign:"vertical-align",height:"height",width:"width"};function a(e){var n;if("tr"===e.tagName||"td"===e.tagName||"th"===e.tagName)for(n in r)o.call(r,n)&&void 0!==e.properties[n]&&(i(e,r[n],e.properties[n]),delete e.properties[n])}function i(e,n,l){var t=(e.properties.style||"").trim();t&&!/;\s*/.test(t)&&(t+=";"),t&&(t+=" ");var o=t+n+": "+l+";";e.properties.style=o}e.exports=function(e){return t(e,"element",a),e}},3790:function(e){"use strict";function n(e){if("string"==typeof e)return function(e){return n;function n(n){return Boolean(n&&n.type===e)}}(e);if(null==e)return o;if("object"==typeof e)return("length"in e?t:l)(e);if("function"==typeof e)return e;throw new Error("Expected function, string, or object as test")}function l(e){return function(n){var l;for(l in e)if(n[l]!==e[l])return!1;return!0}}function t(e){var l=function(e){for(var l=[],t=e.length,o=-1;++o<t;)l[o]=n(e[o]);return l}(e),t=l.length;return function(){var e=-1;for(;++e<t;)if(l[e].apply(this,arguments))return!0;return!1}}function o(){return!0}e.exports=n},1150:function(e,n,l){"use strict";e.exports=a;var t=l(3790),o="skip",r=!1;function a(e,n,l,a){var u;function s(e,t,c){var p,d=[];return(n&&!u(e,t,c[c.length-1]||null)||(d=i(l(e,c)))[0]!==r)&&e.children&&d[0]!==o?(p=i(function(e,n){var l,t=-1,o=a?-1:1,i=(a?e.length:t)+o;for(;i>t&&i<e.length;){if((l=s(e[i],i,n))[0]===r)return l;i="number"==typeof l[1]?l[1]:i+o}}(e.children,c.concat(e))),p[0]===r?p:d):d}"function"==typeof n&&"function"!=typeof l&&(a=l,l=n,n=null),u=t(n),s(e,null,[])}function i(e){return null!==e&&"object"==typeof e&&"length"in e?e:"number"==typeof e?[true,e]:[e]}a.CONTINUE=true,a.SKIP=o,a.EXIT=r},791:function(e,n,l){"use strict";e.exports=i;var t=l(1150),o=t.CONTINUE,r=t.SKIP,a=t.EXIT;function i(e,n,l,o){"function"==typeof n&&"function"!=typeof l&&(o=l,l=n,n=null),t(e,n,(function(e,n){var t=n[n.length-1],o=t?t.children.indexOf(e):null;return l(e,o,t)}),o)}i.CONTINUE=o,i.SKIP=r,i.EXIT=a},9357:function(e,n,l){"use strict";var t=l(7294),o=l(1883);n.Z=e=>{var n,l,r;let{description:a,title:i,children:u}=e;const{site:s}=(0,o.useStaticQuery)("2841359383"),c=a||s.siteMetadata.description,p=null===(n=s.siteMetadata)||void 0===n?void 0:n.title;return t.createElement(t.Fragment,null,t.createElement("title",null,i?p?i+" | "+p:i:"Coffee Cogs ☕"),t.createElement("meta",{name:"description",content:c||"Documentation site for Coffee Cogs ☕"}),t.createElement("meta",{property:"og:title",content:i?i+" | Coffee Cogs ☕":"Coffee Cogs ☕"}),t.createElement("meta",{property:"og:description",content:c||"Documentation site for Coffee Cogs ☕"}),t.createElement("meta",{property:"og:image",content:"/coffee-cogs/coffee-cogs-rd.png"}),t.createElement("meta",{property:"og:image:type",content:"image/png"}),t.createElement("meta",{property:"og:image:width",content:"200"}),t.createElement("meta",{property:"og:image:height",content:"200"}),t.createElement("meta",{name:"twitter:card",content:"summary"}),t.createElement("meta",{name:"twitter:creator",content:(null===(l=s.siteMetadata)||void 0===l||null===(r=l.social)||void 0===r?void 0:r.twitter)||""}),t.createElement("meta",{name:"twitter:title",content:i}),t.createElement("meta",{name:"twitter:description",content:c}),u)}},8517:function(e,n,l){"use strict";l.r(n),l.d(n,{Head:function(){return ee},default:function(){return ne}});var t={};l.r(t),l.d(t,{boolean:function(){return p},booleanish:function(){return d},commaOrSpaceSeparated:function(){return y},commaSeparated:function(){return h},number:function(){return g},overloadedBoolean:function(){return m},spaceSeparated:function(){return f}});var o=l(7294),r=l(1883);class a{constructor(e,n,l){this.property=e,this.normal=n,l&&(this.space=l)}}function i(e,n){const l={},t={};let o=-1;for(;++o<e.length;)Object.assign(l,e[o].property),Object.assign(t,e[o].normal);return new a(l,t,n)}function u(e){return e.toLowerCase()}a.prototype.property={},a.prototype.normal={},a.prototype.space=null;class s{constructor(e,n){this.property=e,this.attribute=n}}s.prototype.space=null,s.prototype.boolean=!1,s.prototype.booleanish=!1,s.prototype.overloadedBoolean=!1,s.prototype.number=!1,s.prototype.commaSeparated=!1,s.prototype.spaceSeparated=!1,s.prototype.commaOrSpaceSeparated=!1,s.prototype.mustUseProperty=!1,s.prototype.defined=!1;let c=0;const p=v(),d=v(),m=v(),g=v(),f=v(),h=v(),y=v();function v(){return 2**++c}const x=Object.keys(t);class b extends s{constructor(e,n,l,o){let r=-1;if(super(e,n),k(this,"space",o),"number"==typeof l)for(;++r<x.length;){const e=x[r];k(this,x[r],(l&t[e])===t[e])}}}function k(e,n,l){l&&(e[n]=l)}b.prototype.defined=!0;const w={}.hasOwnProperty;function E(e){const n={},l={};let t;for(t in e.properties)if(w.call(e.properties,t)){const o=e.properties[t],r=new b(t,e.transform(e.attributes||{},t),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(t)&&(r.mustUseProperty=!0),n[t]=r,l[u(t)]=t,l[u(r.attribute)]=t}return new a(n,l,e.space)}const C=E({space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),S=E({space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function L(e,n){return n in e?e[n]:n}function P(e,n){return L(e,n.toLowerCase())}const M=E({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:P,properties:{xmlns:null,xmlnsXLink:null}}),O=E({transform(e,n){return"role"===n?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:d,ariaAutoComplete:null,ariaBusy:d,ariaChecked:d,ariaColCount:g,ariaColIndex:g,ariaColSpan:g,ariaControls:f,ariaCurrent:null,ariaDescribedBy:f,ariaDetails:null,ariaDisabled:d,ariaDropEffect:f,ariaErrorMessage:null,ariaExpanded:d,ariaFlowTo:f,ariaGrabbed:d,ariaHasPopup:null,ariaHidden:d,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:f,ariaLevel:g,ariaLive:null,ariaModal:d,ariaMultiLine:d,ariaMultiSelectable:d,ariaOrientation:null,ariaOwns:f,ariaPlaceholder:null,ariaPosInSet:g,ariaPressed:d,ariaReadOnly:d,ariaRelevant:null,ariaRequired:d,ariaRoleDescription:f,ariaRowCount:g,ariaRowIndex:g,ariaRowSpan:g,ariaSelected:d,ariaSetSize:g,ariaSort:null,ariaValueMax:g,ariaValueMin:g,ariaValueNow:g,ariaValueText:null,role:null}}),D=E({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:P,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:h,acceptCharset:f,accessKey:f,action:null,allow:null,allowFullScreen:p,allowPaymentRequest:p,allowUserMedia:p,alt:null,as:null,async:p,autoCapitalize:null,autoComplete:f,autoFocus:p,autoPlay:p,capture:p,charSet:null,checked:p,cite:null,className:f,cols:g,colSpan:null,content:null,contentEditable:d,controls:p,controlsList:f,coords:g|h,crossOrigin:null,data:null,dateTime:null,decoding:null,default:p,defer:p,dir:null,dirName:null,disabled:p,download:m,draggable:d,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:p,formTarget:null,headers:f,height:g,hidden:p,high:g,href:null,hrefLang:null,htmlFor:f,httpEquiv:f,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:p,itemId:null,itemProp:f,itemRef:f,itemScope:p,itemType:f,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:p,low:g,manifest:null,max:null,maxLength:g,media:null,method:null,min:null,minLength:g,multiple:p,muted:p,name:null,nonce:null,noModule:p,noValidate:p,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:p,optimum:g,pattern:null,ping:f,placeholder:null,playsInline:p,poster:null,preload:null,readOnly:p,referrerPolicy:null,rel:f,required:p,reversed:p,rows:g,rowSpan:g,sandbox:f,scope:null,scoped:p,seamless:p,selected:p,shape:null,size:g,sizes:null,slot:null,span:g,spellCheck:d,src:null,srcDoc:null,srcLang:null,srcSet:null,start:g,step:null,style:null,tabIndex:g,target:null,title:null,translate:null,type:null,typeMustMatch:p,useMap:null,value:d,width:g,wrap:null,align:null,aLink:null,archive:f,axis:null,background:null,bgColor:null,border:g,borderColor:null,bottomMargin:g,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:p,declare:p,event:null,face:null,frame:null,frameBorder:null,hSpace:g,leftMargin:g,link:null,longDesc:null,lowSrc:null,marginHeight:g,marginWidth:g,noResize:p,noHref:p,noShade:p,noWrap:p,object:null,profile:null,prompt:null,rev:null,rightMargin:g,rules:null,scheme:null,scrolling:d,standby:null,summary:null,text:null,topMargin:g,valueType:null,version:null,vAlign:null,vLink:null,vSpace:g,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:p,disableRemotePlayback:p,prefix:null,property:null,results:g,security:null,unselectable:null}}),N=E({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:L,properties:{about:y,accentHeight:g,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:g,amplitude:g,arabicForm:null,ascent:g,attributeName:null,attributeType:null,azimuth:g,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:g,by:null,calcMode:null,capHeight:g,className:f,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:g,diffuseConstant:g,direction:null,display:null,dur:null,divisor:g,dominantBaseline:null,download:p,dx:null,dy:null,edgeMode:null,editable:null,elevation:g,enableBackground:null,end:null,event:null,exponent:g,externalResourcesRequired:null,fill:null,fillOpacity:g,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:h,g2:h,glyphName:h,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:g,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:g,horizOriginX:g,horizOriginY:g,id:null,ideographic:g,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:g,k:g,k1:g,k2:g,k3:g,k4:g,kernelMatrix:y,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:g,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:g,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:g,overlineThickness:g,paintOrder:null,panose1:null,path:null,pathLength:g,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:f,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:g,pointsAtY:g,pointsAtZ:g,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:y,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:y,rev:y,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:y,requiredFeatures:y,requiredFonts:y,requiredFormats:y,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:g,specularExponent:g,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:g,strikethroughThickness:g,string:null,stroke:null,strokeDashArray:y,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:g,strokeOpacity:g,strokeWidth:null,style:null,surfaceScale:g,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:y,tabIndex:g,tableValues:null,target:null,targetX:g,targetY:g,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:y,to:null,transform:null,u1:null,u2:null,underlinePosition:g,underlineThickness:g,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:g,values:null,vAlphabetic:g,vMathematical:g,vectorEffect:null,vHanging:g,vIdeographic:g,version:null,vertAdvY:g,vertOriginX:g,vertOriginY:g,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:g,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),R=i([S,C,M,O,D],"html"),A=i([S,C,M,O,N],"svg"),T=/^data[-\w.:]+$/i,U=/-[a-z]/g,I=/[A-Z]/g;function z(e){return"-"+e.toLowerCase()}function B(e){return e.charAt(1).toUpperCase()}const _={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var H=l(9368);const F={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},j={}.hasOwnProperty;function V(e,n,l){if("function"!=typeof e)throw new TypeError("h is not a function");const t=function(e){const n=e("div",{});return Boolean(n&&("_owner"in n||"_store"in n)&&(void 0===n.key||null===n.key))}(e),o=function(e){const n=e("div",{});return Boolean(n&&n.context&&n.context._isVue)}(e),r=function(e){return"VirtualNode"===e("div",{}).type}(e);let a,i;if("string"==typeof l||"boolean"==typeof l?(a=l,l={}):(l||(l={}),a=l.prefix),n&&"root"===n.type){const e=n.children[0];i=1===n.children.length&&"element"===e.type?e:{type:"element",tagName:"div",properties:{},children:n.children}}else{if(!n||"element"!==n.type)throw new Error("Expected root or element, not `"+(n&&n.type||n)+"`");i=n}return X(e,i,{schema:"svg"===l.space?A:R,prefix:null==a?t||o||r?"h-":void 0:"string"==typeof a?a:a?"h-":void 0,key:0,react:t,vue:o,vdom:r,hyperscript:q(e)})}function X(e,n,l){const t=l.schema;let o=t,r=n.tagName;const a={},i=[];let u,s=-1;for(u in"html"===t.space&&"svg"===r.toLowerCase()&&(o=A,l.schema=o),n.properties)n.properties&&j.call(n.properties,u)&&K(a,u,n.properties[u],l,r);if(l.vdom&&("html"===o.space?r=r.toUpperCase():o.space&&(a.namespace=F[o.space])),l.prefix&&(l.key++,a.key=l.prefix+l.key),n.children)for(;++s<n.children.length;){const t=n.children[s];"element"===t.type?i.push(X(e,t,l)):"text"===t.type&&i.push(t.value)}return l.schema=t,i.length>0?e.call(n,r,a,i):e.call(n,r,a)}function K(e,n,l,t,o){const r=function(e,n){const l=u(n);let t=n,o=s;if(l in e.normal)return e.property[e.normal[l]];if(l.length>4&&"data"===l.slice(0,4)&&T.test(n)){if("-"===n.charAt(4)){const e=n.slice(5).replace(U,B);t="data"+e.charAt(0).toUpperCase()+e.slice(1)}else{const e=n.slice(4);if(!U.test(e)){let l=e.replace(I,z);"-"!==l.charAt(0)&&(l="-"+l),n="data"+l}}o=b}return new o(t,n)}(t.schema,n);let a;null==l||"number"==typeof l&&Number.isNaN(l)||!1===l&&(t.vue||t.vdom||t.hyperscript)||!l&&r.boolean&&(t.vue||t.vdom||t.hyperscript)||(Array.isArray(l)&&(l=r.commaSeparated?function(e,n){const l=n||{};return(""===e[e.length-1]?[...e,""]:e).join((l.padRight?" ":"")+","+(!1===l.padLeft?"":" ")).trim()}(l):l.join(" ").trim()),r.boolean&&t.hyperscript&&(l=""),"style"===r.property&&"string"==typeof l&&(t.react||t.vue||t.vdom)&&(l=function(e,n){const l={};try{H(e,((e,n)=>{"-ms-"===e.slice(0,4)&&(e="ms-"+e.slice(4)),l[e.replace(/-([a-z])/g,((e,n)=>n.toUpperCase()))]=n}))}catch(t){const e=t;throw e.message=n+"[style]"+e.message.slice("undefined".length),e}return l}(l,o)),t.vue?"style"!==r.property&&(a="attrs"):r.mustUseProperty||(t.vdom?"style"!==r.property&&(a="attributes"):t.hyperscript&&(a="attrs")),a?e[a]=Object.assign(e[a]||{},{[r.attribute]:l}):r.space&&t.react?e[_[r.property]||r.property]=l:e[r.attribute]=l)}function q(e){return"context"in e&&"cleanup"in e}var W=l(478);const Y={}.hasOwnProperty,Z=new Set(["table","thead","tbody","tfoot","tr","th","td"]);var G=l(9357);var J=e=>{const{0:n,1:l}=(0,o.useState)(null);return(0,o.useEffect)((()=>{fetch(e).then((e=>e.json())).then((e=>l(e))).catch((e=>console.log(e)))}),[e]),n};var $=e=>{const n=J("https://github.com/coffeebank/coffee-cogs/blob/master/"+e.cog+"/info.json?raw=true")||{};return o.createElement("div",null,o.createElement("div",{className:"transition-opacity duration-150"},o.createElement("div",{className:"text-xl whitespace-pre-line"},n.description||e.desc||o.createElement("div",{className:"w-full h-16 rounded-lg bg-black/5 dark:bg-white/30 animate-pulse"})),n.tags?o.createElement("div",{className:"pt-4 flex flex-wrap"},n.tags.map((e=>o.createElement("div",{key:e,className:"mx-1 mt-1 px-2 py-1 bg-gray-300 text-gray-800 rounded text-xs select-none"},e)))):o.createElement("div",{className:"pt-4 flex flex-wrap"},o.createElement("div",{className:"mx-1 mt-1 px-2 py-1 animate-pulse bg-gray-300 dark:bg-white/30 text-gray-800 rounded text-xs select-none"},"..."),o.createElement("div",{className:"mx-1 mt-1 px-2 py-1 animate-pulse bg-gray-300 dark:bg-white/30 text-gray-800 rounded text-xs select-none"},"..."),o.createElement("div",{className:"mx-1 mt-1 px-2 py-1 animate-pulse bg-gray-300 dark:bg-white/30 text-gray-800 rounded text-xs select-none"},"...")),o.createElement("div",{className:"pt-10 font-bold"},"Install"),o.createElement("div",{className:"py-2 text-sm"},"New here? ",o.createElement(r.Link,{to:"/start/"},"See the Getting Started guide ▸")),o.createElement("div",{className:"px-5 py-4 sm:py-3 rounded-md bg-black/5 dark:bg-white/[0.075]",title:"Replace [p] with your bot's prefix"},o.createElement("pre",{className:"m-0 p-0 !bg-transparent text-gray-600 text-sm overflow-x-auto leading-6"},o.createElement("span",{className:"select-none"},"[p]"),o.createElement("span",{className:"select-all sm:select-auto"},"repo add coffee-cogs https://github.com/coffeebank/coffee-cogs"),o.createElement("br",null),o.createElement("span",{className:"select-none"},"[p]"),o.createElement("span",{className:"select-all sm:select-auto"},"cog install coffee-cogs ",n.name||e.cog))),o.createElement("div",{className:"pt-2 text-sm"},n.end_user_data_statement||"")),o.createElement("div",{className:"pt-2 pb-10 text-sm"},o.createElement("a",{href:"https://github.com/coffeebank/coffee-cogs/tree/master/"+e.cog,rel:"noopener",target:"_blank"},"Browse Source Code")))};const Q=new function(e){if(!e||"function"!=typeof e.createElement)throw new TypeError("createElement is not a function");const n=e.createElement;function l(l,t,o){if(o&&Z.has(l)&&(o=o.filter((e=>!function(e){const n=e&&"object"==typeof e&&"text"===e.type?e.value||"":e;return"string"==typeof n&&""===n.replace(/[ \t\n\f\r]/g,"")}(e)))),e.components&&Y.call(e.components,l)){const r=e.components[l];return e.passNode&&"function"==typeof r&&(t=Object.assign({node:this},t)),n(r,t,o)}return n(l,t,o)}Object.assign(this,{Compiler:function(t){let o=V(l,W(t),e.prefix);if("root"===t.type)return o=o&&"object"==typeof o&&"type"in o&&"props"in o&&"div"===o.type&&(1!==t.children.length||"element"!==t.children[0].type)?o.props.children:[o],n(e.Fragment||"div",{},o);return o}})}({createElement:o.createElement,components:{"component-cogfork":function(e){let{cog:n}=e;return o.createElement("div",null,o.createElement("p",null,n.charAt(0).toUpperCase()+n.slice(1)," is flexible, but may not be flexible enough for everyone's needs. ",n.charAt(0).toUpperCase()+n.slice(1)," is open-source and encourages you to customize by making tweaks."),o.createElement("h4",null,"Fork Repo"),o.createElement("ol",null,o.createElement("li",null,"Go to ",o.createElement("a",{href:"https://github.com/coffeebank/coffee-cogs",target:"_blank",rel:"noopener"},"coffeebank/coffee-cogs",o.createElement("span",null,o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"icon outbound"},o.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"})," ",o.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))," and click Fork at the top"),o.createElement("li",null,"You should now be at USERNAME/coffee-cogs. Click into ",o.createElement("code",null,n)," folder here"),o.createElement("li",null,"Make the edits you would like, then click Save (join the ",o.createElement("a",{href:"/discord"},"Support Discord")," if you need help)"),o.createElement("li",null,"Add the repo to your bot by typing in Discord (replacing with your GitHub username from above):",o.createElement("br",null),o.createElement("div",{title:"Replace [p] with your bot's prefix"},o.createElement("pre",{className:"px-5 py-4 sm:py-3 rounded-md text-gray-600 dark:text-gray-200 text-sm overflow-x-auto leading-6"},o.createElement("span",{className:"select-none"},"[p]"),o.createElement("span",{className:"select-all sm:select-auto"},"cog uninstall ",n),o.createElement("br",null),o.createElement("span",{className:"select-none"},"[p]"),o.createElement("span",{className:"select-all sm:select-auto"},"repo add coffee-cogs2 https://github.com/USERNAME/coffee-cogs"),o.createElement("br",null),o.createElement("span",{className:"select-none"},"[p]"),o.createElement("span",{className:"select-all sm:select-auto"},"cog install coffee-cogs2 ",n))))),o.createElement("h4",null,"Updates"),o.createElement("ol",null,o.createElement("li",null,"Visit your copy of the GitHub repo at USERNAME/coffee-cogs")," ",o.createElement("li",null,'Click "Fetch upstream" and merge updates')," ",o.createElement("li",null,"On Discord, type:",o.createElement("br",null),o.createElement("div",{title:"Replace [p] with your bot's prefix"},o.createElement("pre",{className:"px-5 py-4 sm:py-3 rounded-md text-gray-600 dark:text-gray-200 text-sm overflow-x-auto leading-6"},o.createElement("span",{className:"select-none"},"[p]"),o.createElement("span",{className:"select-all sm:select-auto"},"cog update ",n),o.createElement("br",null))))),o.createElement("br",null))},"component-coghero":$,"component-reactbutton":function(e){let{children:n,body:l="Open Link",classButton:t="bg-purple-700/90 hover:bg-purple-800/90 dark:bg-purple-800/90 dark:hover:bg-purple-700/90 text-white",className:a="",newTab:i=!0,to:u}=e;return o.createElement("div",{className:"mb-[24px] "+a},o.createElement(r.Link,{to:u,target:!0===i?"_blank":"",rel:"noopener noreferrer",className:"!no-underline inline-block"},n||o.createElement("div",{className:"px-6 py-3 transition duration-300 rounded-md !no-underline "+t},l)))},"component-reactframe":function(e){let{newTab:n=!0,title:l,to:t}=e;return o.createElement("div",{className:"w-full rounded-lg overflow-hidden components-reactframe__height"},o.createElement("iframe",{src:t,className:"w-full border-0 components-reactframe__height",title:l||t},o.createElement("a",{href:t,target:!0===n?"_blank":"",rel:"noopener noreferrer"},"Open in new tab: ",t)))}}}).Compiler,ee=e=>{let{data:{markdownRemark:n}}=e;return o.createElement(G.Z,{title:n.frontmatter.title,description:n.frontmatter.description||n.excerpt})};var ne=e=>{let{data:{previous:n,next:l,site:t,markdownRemark:r}}=e;return o.createElement("section",{className:"w-full flex flex-wrap gap-x-[45px] xl:flex-nowrap pt-nav justify-start"},o.createElement("main",{className:"w-full max-w-[710px] text-[#2c3e50] dark:text-[#faf9f7] \\ prose prose-neutral dark:prose-invert \\ prose-a:transition-colors \\ prose-h1:font-bold prose-h1:text-[2rem] prose-h1:mb-[20px] prose-h1:text-black/80 dark:prose-h1:text-white \\ prose-h2:text-[1.65rem] prose-h2:pb-[0.3rem] prose-h2:text-black/90 dark:prose-h2:text-white \\ prose-h2:border-b-[1px] prose-h2:border-[#eaecef] dark:prose-h2:border-[#515355] \\ prose-img:rounded-lg prose-img:mt-0 prose-img:mb-[1.25em] \\ prose-pre:bg-black/5 dark:prose-pre:bg-white/[0.075] \\ prose-pre:text-gray-600 dark:prose-pre:text-gray-200 \\ prose-pre:rounded-md \\ [&_blockquote_p:first-of-type::before]:content-none [&_blockquote_p:first-of-type::after]:content-none \\ dark:[&_a.anchor]:fill-purple-500 \\ [&_.anchor.before]:h-full [&_.anchor.before]:flex [&_.anchor.before]:items-center \\ "},Q(r.htmlAst),o.createElement("hr",null)),o.createElement("aside",{className:"w-full lg:min-w-[100px] lg:max-w-[235px] h-full sticky top-0"},o.createElement("div",{className:"pt-20"},o.createElement("h2",{className:"font-bold text-sm uppercase text-black/80 dark:text-white/80"},"On this page"),o.createElement("div",{className:"py-2 text-sm [&_li>p]:hidden [&_li]:py-1 hover:[&_li>a]:text-purple-700 [&_li]:transition-all",dangerouslySetInnerHTML:{__html:r.tableOfContents}}))))}},8139:function(e){var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,l=/\n/g,t=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,r=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,i=/^[;\s]*/,u=/^\s+|\s+$/g,s="";function c(e){return e?e.replace(u,s):s}e.exports=function(e,u){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];u=u||{};var p=1,d=1;function m(e){var n=e.match(l);n&&(p+=n.length);var t=e.lastIndexOf("\n");d=~t?e.length-t:d+e.length}function g(){var e={line:p,column:d};return function(n){return n.position=new f(e),x(),n}}function f(e){this.start=e,this.end={line:p,column:d},this.source=u.source}f.prototype.content=e;var h=[];function y(n){var l=new Error(u.source+":"+p+":"+d+": "+n);if(l.reason=n,l.filename=u.source,l.line=p,l.column=d,l.source=e,!u.silent)throw l;h.push(l)}function v(n){var l=n.exec(e);if(l){var t=l[0];return m(t),e=e.slice(t.length),l}}function x(){v(t)}function b(e){var n;for(e=e||[];n=k();)!1!==n&&e.push(n);return e}function k(){var n=g();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var l=2;s!=e.charAt(l)&&("*"!=e.charAt(l)||"/"!=e.charAt(l+1));)++l;if(l+=2,s===e.charAt(l-1))return y("End of comment missing");var t=e.slice(2,l-2);return d+=2,m(t),e=e.slice(l),d+=2,n({type:"comment",comment:t})}}function w(){var e=g(),l=v(o);if(l){if(k(),!v(r))return y("property missing ':'");var t=v(a),u=e({type:"declaration",property:c(l[0].replace(n,s)),value:t?c(t[0].replace(n,s)):s});return v(i),u}}return x(),function(){var e,n=[];for(b(n);e=w();)!1!==e&&(n.push(e),b(n));return n}()}},9368:function(e,n,l){var t=l(8139);function o(e,n){var l,o=null;if(!e||"string"!=typeof e)return o;for(var r,a,i=t(e),u="function"==typeof n,s=0,c=i.length;s<c;s++)r=(l=i[s]).property,a=l.value,u?n(r,a,l):a&&(o||(o={}),o[r]=a);return o}e.exports=o,e.exports.default=o}}]);
//# sourceMappingURL=component---src-templates-docs-post-js-d1d0be90ca97c4c4a186.js.map