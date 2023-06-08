"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2464],{"../node_modules/@react-hookz/web/esm/useToggle/useToggle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>useToggle});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@react-hookz/web/esm/useSafeState/useSafeState.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/@react-hookz/web/esm/useSyncedRef/useSyncedRef.js"),_util_resolveHookState_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/@react-hookz/web/esm/util/resolveHookState.js");function useToggle(initialState,ignoreReactEvents){void 0===initialState&&(initialState=!1),void 0===ignoreReactEvents&&(ignoreReactEvents=!0);var _a=(0,___WEBPACK_IMPORTED_MODULE_1__.F)(initialState),state=_a[0],setState=_a[1],ignoreReactEventsRef=(0,___WEBPACK_IMPORTED_MODULE_2__.x)(ignoreReactEvents);return[state,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(nextState){setState((function(prevState){return void 0===nextState||ignoreReactEventsRef.current&&"object"==typeof nextState&&("SyntheticBaseEvent"===nextState.constructor.name||"string"==typeof nextState._reactName)?!prevState:Boolean((0,_util_resolveHookState_js__WEBPACK_IMPORTED_MODULE_3__.f)(nextState,prevState))}))}),[])]}},"../node_modules/react-virtualized-auto-sizer/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classCallCheck=function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")},createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},possibleConstructorReturn=function(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call},slicedToArray=function(arr,i){if(Array.isArray(arr))return arr;if(Symbol.iterator in Object(arr))return function sliceIterator(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{!_n&&_i.return&&_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")},windowObject=void 0;windowObject="undefined"!=typeof window?window:"undefined"!=typeof self?self:__webpack_require__.g;var cancelFrame=null,requestFrame=null,clearTimeoutFn=windowObject.clearTimeout,setTimeoutFn=windowObject.setTimeout,cancelAnimationFrameFn=windowObject.cancelAnimationFrame||windowObject.mozCancelAnimationFrame||windowObject.webkitCancelAnimationFrame,requestAnimationFrameFn=windowObject.requestAnimationFrame||windowObject.mozRequestAnimationFrame||windowObject.webkitRequestAnimationFrame;function createDetectElementResize(nonce){var animationKeyframes=void 0,animationName=void 0,animationStartEvent=void 0,animationStyle=void 0,checkTriggers=void 0,resetTriggers=void 0,scrollListener=void 0,attachEvent="undefined"!=typeof document&&document.attachEvent;if(!attachEvent){resetTriggers=function resetTriggers(element){var triggers=element.__resizeTriggers__,expand=triggers.firstElementChild,contract=triggers.lastElementChild,expandChild=expand.firstElementChild;contract.scrollLeft=contract.scrollWidth,contract.scrollTop=contract.scrollHeight,expandChild.style.width=expand.offsetWidth+1+"px",expandChild.style.height=expand.offsetHeight+1+"px",expand.scrollLeft=expand.scrollWidth,expand.scrollTop=expand.scrollHeight},checkTriggers=function checkTriggers(element){return element.offsetWidth!==element.__resizeLast__.width||element.offsetHeight!==element.__resizeLast__.height},scrollListener=function scrollListener(e){if(!(e.target.className&&"function"==typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var element=this;resetTriggers(this),this.__resizeRAF__&&cancelFrame(this.__resizeRAF__),this.__resizeRAF__=requestFrame((function animationFrame(){checkTriggers(element)&&(element.__resizeLast__.width=element.offsetWidth,element.__resizeLast__.height=element.offsetHeight,element.__resizeListeners__.forEach((function forEachResizeListener(fn){fn.call(element,e)})))}))}};var animation=!1,keyframeprefix="";animationStartEvent="animationstart";var domPrefixes="Webkit Moz O ms".split(" "),startEvents="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),elm=document.createElement("fakeelement");if(void 0!==elm.style.animationName&&(animation=!0),!1===animation)for(var i=0;i<domPrefixes.length;i++)if(void 0!==elm.style[domPrefixes[i]+"AnimationName"]){keyframeprefix="-"+domPrefixes[i].toLowerCase()+"-",animationStartEvent=startEvents[i],animation=!0;break}animationKeyframes="@"+keyframeprefix+"keyframes "+(animationName="resizeanim")+" { from { opacity: 0; } to { opacity: 0; } } ",animationStyle=keyframeprefix+"animation: 1ms "+animationName+"; "}return{addResizeListener:function addResizeListener(element,fn){if(attachEvent)element.attachEvent("onresize",fn);else{if(!element.__resizeTriggers__){var doc=element.ownerDocument,elementStyle=windowObject.getComputedStyle(element);elementStyle&&"static"===elementStyle.position&&(element.style.position="relative"),function createStyles(doc){if(!doc.getElementById("detectElementResize")){var css=(animationKeyframes||"")+".resize-triggers { "+(animationStyle||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',head=doc.head||doc.getElementsByTagName("head")[0],style=doc.createElement("style");style.id="detectElementResize",style.type="text/css",null!=nonce&&style.setAttribute("nonce",nonce),style.styleSheet?style.styleSheet.cssText=css:style.appendChild(doc.createTextNode(css)),head.appendChild(style)}}(doc),element.__resizeLast__={},element.__resizeListeners__=[],(element.__resizeTriggers__=doc.createElement("div")).className="resize-triggers";var expandTrigger=doc.createElement("div");expandTrigger.className="expand-trigger",expandTrigger.appendChild(doc.createElement("div"));var contractTrigger=doc.createElement("div");contractTrigger.className="contract-trigger",element.__resizeTriggers__.appendChild(expandTrigger),element.__resizeTriggers__.appendChild(contractTrigger),element.appendChild(element.__resizeTriggers__),resetTriggers(element),element.addEventListener("scroll",scrollListener,!0),animationStartEvent&&(element.__resizeTriggers__.__animationListener__=function animationListener(e){e.animationName===animationName&&resetTriggers(element)},element.__resizeTriggers__.addEventListener(animationStartEvent,element.__resizeTriggers__.__animationListener__))}element.__resizeListeners__.push(fn)}},removeResizeListener:function removeResizeListener(element,fn){if(attachEvent)element.detachEvent("onresize",fn);else if(element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn),1),!element.__resizeListeners__.length){element.removeEventListener("scroll",scrollListener,!0),element.__resizeTriggers__.__animationListener__&&(element.__resizeTriggers__.removeEventListener(animationStartEvent,element.__resizeTriggers__.__animationListener__),element.__resizeTriggers__.__animationListener__=null);try{element.__resizeTriggers__=!element.removeChild(element.__resizeTriggers__)}catch(e){}}}}}null==cancelAnimationFrameFn||null==requestAnimationFrameFn?(cancelFrame=clearTimeoutFn,requestFrame=function requestAnimationFrameViaSetTimeout(callback){return setTimeoutFn(callback,20)}):(cancelFrame=function cancelFrame(_ref){var _ref2=slicedToArray(_ref,2),animationFrameID=_ref2[0],timeoutID=_ref2[1];cancelAnimationFrameFn(animationFrameID),clearTimeoutFn(timeoutID)},requestFrame=function requestAnimationFrameWithSetTimeoutFallback(callback){var animationFrameID=requestAnimationFrameFn((function animationFrameCallback(){clearTimeoutFn(timeoutID),callback()})),timeoutID=setTimeoutFn((function timeoutCallback(){cancelAnimationFrameFn(animationFrameID),callback()}),20);return[animationFrameID,timeoutID]});var AutoSizer=function(_React$PureComponent){function AutoSizer(){var _ref,_temp,_this;classCallCheck(this,AutoSizer);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _temp=_this=possibleConstructorReturn(this,(_ref=AutoSizer.__proto__||Object.getPrototypeOf(AutoSizer)).call.apply(_ref,[this].concat(args))),_this.state={height:_this.props.defaultHeight||0,width:_this.props.defaultWidth||0},_this._onResize=function(){var _this$props=_this.props,disableHeight=_this$props.disableHeight,disableWidth=_this$props.disableWidth,onResize=_this$props.onResize;if(_this._parentNode){var _height=_this._parentNode.offsetHeight||0,_width=_this._parentNode.offsetWidth||0,_style=window.getComputedStyle(_this._parentNode)||{},paddingLeft=parseInt(_style.paddingLeft,10)||0,paddingRight=parseInt(_style.paddingRight,10)||0,paddingTop=parseInt(_style.paddingTop,10)||0,paddingBottom=parseInt(_style.paddingBottom,10)||0,newHeight=_height-paddingTop-paddingBottom,newWidth=_width-paddingLeft-paddingRight;(!disableHeight&&_this.state.height!==newHeight||!disableWidth&&_this.state.width!==newWidth)&&(_this.setState({height:_height-paddingTop-paddingBottom,width:_width-paddingLeft-paddingRight}),onResize({height:_height,width:_width}))}},_this._setRef=function(autoSizer){_this._autoSizer=autoSizer},possibleConstructorReturn(_this,_temp)}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(AutoSizer,_React$PureComponent),createClass(AutoSizer,[{key:"componentDidMount",value:function componentDidMount(){var nonce=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._detectElementResize=createDetectElementResize(nonce),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function componentWillUnmount(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function render(){var _props=this.props,children=_props.children,className=_props.className,disableHeight=_props.disableHeight,disableWidth=_props.disableWidth,style=_props.style,_state=this.state,height=_state.height,width=_state.width,outerStyle={overflow:"visible"},childParams={},bailoutOnChildren=!1;return disableHeight||(0===height&&(bailoutOnChildren=!0),outerStyle.height=0,childParams.height=height),disableWidth||(0===width&&(bailoutOnChildren=!0),outerStyle.width=0,childParams.width=width),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div",{className,ref:this._setRef,style:_extends({},outerStyle,style)},!bailoutOnChildren&&children(childParams))}}]),AutoSizer}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);AutoSizer.defaultProps={onResize:function onResize(){},disableHeight:!1,disableWidth:!1,style:{}};const __WEBPACK_DEFAULT_EXPORT__=AutoSizer},"../node_modules/react-window/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t7:()=>FixedSizeList});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),memoize_one__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/memoize-one/dist/memoize-one.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),now="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function cancelTimeout(timeoutID){cancelAnimationFrame(timeoutID.id)}function requestTimeout(callback,delay){var start=now();var timeoutID={id:requestAnimationFrame((function tick(){now()-start>=delay?callback.call(null):timeoutID.id=requestAnimationFrame(tick)}))};return timeoutID}var size=-1;function getScrollbarSize(recalculate){if(void 0===recalculate&&(recalculate=!1),-1===size||recalculate){var div=document.createElement("div"),style=div.style;style.width="50px",style.height="50px",style.overflow="scroll",document.body.appendChild(div),size=div.offsetWidth-div.clientWidth,document.body.removeChild(div)}return size}var cachedRTLResult=null;function getRTLOffsetType(recalculate){if(void 0===recalculate&&(recalculate=!1),null===cachedRTLResult||recalculate){var outerDiv=document.createElement("div"),outerStyle=outerDiv.style;outerStyle.width="50px",outerStyle.height="50px",outerStyle.overflow="scroll",outerStyle.direction="rtl";var innerDiv=document.createElement("div"),innerStyle=innerDiv.style;return innerStyle.width="100px",innerStyle.height="100px",outerDiv.appendChild(innerDiv),document.body.appendChild(outerDiv),outerDiv.scrollLeft>0?cachedRTLResult="positive-descending":(outerDiv.scrollLeft=1,cachedRTLResult=0===outerDiv.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(outerDiv),cachedRTLResult}return cachedRTLResult}var defaultItemKey$1=function defaultItemKey(index,data){return index};function createListComponent(_ref){var _class,getItemOffset=_ref.getItemOffset,getEstimatedTotalSize=_ref.getEstimatedTotalSize,getItemSize=_ref.getItemSize,getOffsetForIndexAndAlignment=_ref.getOffsetForIndexAndAlignment,getStartIndexForOffset=_ref.getStartIndexForOffset,getStopIndexForStartIndex=_ref.getStopIndexForStartIndex,initInstanceProps=_ref.initInstanceProps,shouldResetStyleCacheOnItemSizeChange=_ref.shouldResetStyleCacheOnItemSizeChange,validateProps=_ref.validateProps;return _class=function(_PureComponent){function List(props){var _this;return(_this=_PureComponent.call(this,props)||this)._instanceProps=initInstanceProps(_this.props,(0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.Z)(_this)),_this._outerRef=void 0,_this._resetIsScrollingTimeoutId=null,_this.state={instance:(0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.Z)(_this),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof _this.props.initialScrollOffset?_this.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},_this._callOnItemsRendered=void 0,_this._callOnItemsRendered=(0,memoize_one__WEBPACK_IMPORTED_MODULE_3__.Z)((function(overscanStartIndex,overscanStopIndex,visibleStartIndex,visibleStopIndex){return _this.props.onItemsRendered({overscanStartIndex,overscanStopIndex,visibleStartIndex,visibleStopIndex})})),_this._callOnScroll=void 0,_this._callOnScroll=(0,memoize_one__WEBPACK_IMPORTED_MODULE_3__.Z)((function(scrollDirection,scrollOffset,scrollUpdateWasRequested){return _this.props.onScroll({scrollDirection,scrollOffset,scrollUpdateWasRequested})})),_this._getItemStyle=void 0,_this._getItemStyle=function(index){var style,_this$props=_this.props,direction=_this$props.direction,itemSize=_this$props.itemSize,layout=_this$props.layout,itemStyleCache=_this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange&&itemSize,shouldResetStyleCacheOnItemSizeChange&&layout,shouldResetStyleCacheOnItemSizeChange&&direction);if(itemStyleCache.hasOwnProperty(index))style=itemStyleCache[index];else{var _offset=getItemOffset(_this.props,index,_this._instanceProps),size=getItemSize(_this.props,index,_this._instanceProps),isHorizontal="horizontal"===direction||"horizontal"===layout,isRtl="rtl"===direction,offsetHorizontal=isHorizontal?_offset:0;itemStyleCache[index]=style={position:"absolute",left:isRtl?void 0:offsetHorizontal,right:isRtl?offsetHorizontal:void 0,top:isHorizontal?0:_offset,height:isHorizontal?"100%":size,width:isHorizontal?size:"100%"}}return style},_this._getItemStyleCache=void 0,_this._getItemStyleCache=(0,memoize_one__WEBPACK_IMPORTED_MODULE_3__.Z)((function(_,__,___){return{}})),_this._onScrollHorizontal=function(event){var _event$currentTarget=event.currentTarget,clientWidth=_event$currentTarget.clientWidth,scrollLeft=_event$currentTarget.scrollLeft,scrollWidth=_event$currentTarget.scrollWidth;_this.setState((function(prevState){if(prevState.scrollOffset===scrollLeft)return null;var direction=_this.props.direction,scrollOffset=scrollLeft;if("rtl"===direction)switch(getRTLOffsetType()){case"negative":scrollOffset=-scrollLeft;break;case"positive-descending":scrollOffset=scrollWidth-clientWidth-scrollLeft}return scrollOffset=Math.max(0,Math.min(scrollOffset,scrollWidth-clientWidth)),{isScrolling:!0,scrollDirection:prevState.scrollOffset<scrollLeft?"forward":"backward",scrollOffset,scrollUpdateWasRequested:!1}}),_this._resetIsScrollingDebounced)},_this._onScrollVertical=function(event){var _event$currentTarget2=event.currentTarget,clientHeight=_event$currentTarget2.clientHeight,scrollHeight=_event$currentTarget2.scrollHeight,scrollTop=_event$currentTarget2.scrollTop;_this.setState((function(prevState){if(prevState.scrollOffset===scrollTop)return null;var scrollOffset=Math.max(0,Math.min(scrollTop,scrollHeight-clientHeight));return{isScrolling:!0,scrollDirection:prevState.scrollOffset<scrollOffset?"forward":"backward",scrollOffset,scrollUpdateWasRequested:!1}}),_this._resetIsScrollingDebounced)},_this._outerRefSetter=function(ref){var outerRef=_this.props.outerRef;_this._outerRef=ref,"function"==typeof outerRef?outerRef(ref):null!=outerRef&&"object"==typeof outerRef&&outerRef.hasOwnProperty("current")&&(outerRef.current=ref)},_this._resetIsScrollingDebounced=function(){null!==_this._resetIsScrollingTimeoutId&&cancelTimeout(_this._resetIsScrollingTimeoutId),_this._resetIsScrollingTimeoutId=requestTimeout(_this._resetIsScrolling,150)},_this._resetIsScrolling=function(){_this._resetIsScrollingTimeoutId=null,_this.setState({isScrolling:!1},(function(){_this._getItemStyleCache(-1,null)}))},_this}(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(List,_PureComponent),List.getDerivedStateFromProps=function getDerivedStateFromProps(nextProps,prevState){return validateSharedProps$1(nextProps,prevState),validateProps(nextProps),null};var _proto=List.prototype;return _proto.scrollTo=function scrollTo(scrollOffset){scrollOffset=Math.max(0,scrollOffset),this.setState((function(prevState){return prevState.scrollOffset===scrollOffset?null:{scrollDirection:prevState.scrollOffset<scrollOffset?"forward":"backward",scrollOffset,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},_proto.scrollToItem=function scrollToItem(index,align){void 0===align&&(align="auto");var _this$props2=this.props,itemCount=_this$props2.itemCount,layout=_this$props2.layout,scrollOffset=this.state.scrollOffset;index=Math.max(0,Math.min(index,itemCount-1));var scrollbarSize=0;if(this._outerRef){var outerRef=this._outerRef;scrollbarSize="vertical"===layout?outerRef.scrollWidth>outerRef.clientWidth?getScrollbarSize():0:outerRef.scrollHeight>outerRef.clientHeight?getScrollbarSize():0}this.scrollTo(getOffsetForIndexAndAlignment(this.props,index,align,scrollOffset,this._instanceProps,scrollbarSize))},_proto.componentDidMount=function componentDidMount(){var _this$props3=this.props,direction=_this$props3.direction,initialScrollOffset=_this$props3.initialScrollOffset,layout=_this$props3.layout;if("number"==typeof initialScrollOffset&&null!=this._outerRef){var outerRef=this._outerRef;"horizontal"===direction||"horizontal"===layout?outerRef.scrollLeft=initialScrollOffset:outerRef.scrollTop=initialScrollOffset}this._callPropsCallbacks()},_proto.componentDidUpdate=function componentDidUpdate(){var _this$props4=this.props,direction=_this$props4.direction,layout=_this$props4.layout,_this$state=this.state,scrollOffset=_this$state.scrollOffset;if(_this$state.scrollUpdateWasRequested&&null!=this._outerRef){var outerRef=this._outerRef;if("horizontal"===direction||"horizontal"===layout)if("rtl"===direction)switch(getRTLOffsetType()){case"negative":outerRef.scrollLeft=-scrollOffset;break;case"positive-ascending":outerRef.scrollLeft=scrollOffset;break;default:var clientWidth=outerRef.clientWidth,scrollWidth=outerRef.scrollWidth;outerRef.scrollLeft=scrollWidth-clientWidth-scrollOffset}else outerRef.scrollLeft=scrollOffset;else outerRef.scrollTop=scrollOffset}this._callPropsCallbacks()},_proto.componentWillUnmount=function componentWillUnmount(){null!==this._resetIsScrollingTimeoutId&&cancelTimeout(this._resetIsScrollingTimeoutId)},_proto.render=function render(){var _this$props5=this.props,children=_this$props5.children,className=_this$props5.className,direction=_this$props5.direction,height=_this$props5.height,innerRef=_this$props5.innerRef,innerElementType=_this$props5.innerElementType,innerTagName=_this$props5.innerTagName,itemCount=_this$props5.itemCount,itemData=_this$props5.itemData,_this$props5$itemKey=_this$props5.itemKey,itemKey=void 0===_this$props5$itemKey?defaultItemKey$1:_this$props5$itemKey,layout=_this$props5.layout,outerElementType=_this$props5.outerElementType,outerTagName=_this$props5.outerTagName,style=_this$props5.style,useIsScrolling=_this$props5.useIsScrolling,width=_this$props5.width,isScrolling=this.state.isScrolling,isHorizontal="horizontal"===direction||"horizontal"===layout,onScroll=isHorizontal?this._onScrollHorizontal:this._onScrollVertical,_this$_getRangeToRend=this._getRangeToRender(),startIndex=_this$_getRangeToRend[0],stopIndex=_this$_getRangeToRend[1],items=[];if(itemCount>0)for(var _index=startIndex;_index<=stopIndex;_index++)items.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(children,{data:itemData,key:itemKey(_index,itemData),index:_index,isScrolling:useIsScrolling?isScrolling:void 0,style:this._getItemStyle(_index)}));var estimatedTotalSize=getEstimatedTotalSize(this.props,this._instanceProps);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(outerElementType||outerTagName||"div",{className,onScroll,ref:this._outerRefSetter,style:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({position:"relative",height,width,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction},style)},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(innerElementType||innerTagName||"div",{children:items,ref:innerRef,style:{height:isHorizontal?"100%":estimatedTotalSize,pointerEvents:isScrolling?"none":void 0,width:isHorizontal?estimatedTotalSize:"100%"}}))},_proto._callPropsCallbacks=function _callPropsCallbacks(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var _this$_getRangeToRend2=this._getRangeToRender(),_overscanStartIndex=_this$_getRangeToRend2[0],_overscanStopIndex=_this$_getRangeToRend2[1],_visibleStartIndex=_this$_getRangeToRend2[2],_visibleStopIndex=_this$_getRangeToRend2[3];this._callOnItemsRendered(_overscanStartIndex,_overscanStopIndex,_visibleStartIndex,_visibleStopIndex)}if("function"==typeof this.props.onScroll){var _this$state2=this.state,_scrollDirection=_this$state2.scrollDirection,_scrollOffset=_this$state2.scrollOffset,_scrollUpdateWasRequested=_this$state2.scrollUpdateWasRequested;this._callOnScroll(_scrollDirection,_scrollOffset,_scrollUpdateWasRequested)}},_proto._getRangeToRender=function _getRangeToRender(){var _this$props6=this.props,itemCount=_this$props6.itemCount,overscanCount=_this$props6.overscanCount,_this$state3=this.state,isScrolling=_this$state3.isScrolling,scrollDirection=_this$state3.scrollDirection,scrollOffset=_this$state3.scrollOffset;if(0===itemCount)return[0,0,0,0];var startIndex=getStartIndexForOffset(this.props,scrollOffset,this._instanceProps),stopIndex=getStopIndexForStartIndex(this.props,startIndex,scrollOffset,this._instanceProps),overscanBackward=isScrolling&&"backward"!==scrollDirection?1:Math.max(1,overscanCount),overscanForward=isScrolling&&"forward"!==scrollDirection?1:Math.max(1,overscanCount);return[Math.max(0,startIndex-overscanBackward),Math.max(0,Math.min(itemCount-1,stopIndex+overscanForward)),startIndex,stopIndex]},List}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent),_class.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},_class}var validateSharedProps$1=function validateSharedProps(_ref2,_ref3){_ref2.children,_ref2.direction,_ref2.height,_ref2.layout,_ref2.innerTagName,_ref2.outerTagName,_ref2.width,_ref3.instance},FixedSizeList=createListComponent({getItemOffset:function getItemOffset(_ref,index){return index*_ref.itemSize},getItemSize:function getItemSize(_ref2,index){return _ref2.itemSize},getEstimatedTotalSize:function getEstimatedTotalSize(_ref3){var itemCount=_ref3.itemCount;return _ref3.itemSize*itemCount},getOffsetForIndexAndAlignment:function getOffsetForIndexAndAlignment(_ref4,index,align,scrollOffset,instanceProps,scrollbarSize){var direction=_ref4.direction,height=_ref4.height,itemCount=_ref4.itemCount,itemSize=_ref4.itemSize,layout=_ref4.layout,width=_ref4.width,size="horizontal"===direction||"horizontal"===layout?width:height,lastItemOffset=Math.max(0,itemCount*itemSize-size),maxOffset=Math.min(lastItemOffset,index*itemSize),minOffset=Math.max(0,index*itemSize-size+itemSize+scrollbarSize);switch("smart"===align&&(align=scrollOffset>=minOffset-size&&scrollOffset<=maxOffset+size?"auto":"center"),align){case"start":return maxOffset;case"end":return minOffset;case"center":var middleOffset=Math.round(minOffset+(maxOffset-minOffset)/2);return middleOffset<Math.ceil(size/2)?0:middleOffset>lastItemOffset+Math.floor(size/2)?lastItemOffset:middleOffset;default:return scrollOffset>=minOffset&&scrollOffset<=maxOffset?scrollOffset:scrollOffset<minOffset?minOffset:maxOffset}},getStartIndexForOffset:function getStartIndexForOffset(_ref5,offset){var itemCount=_ref5.itemCount,itemSize=_ref5.itemSize;return Math.max(0,Math.min(itemCount-1,Math.floor(offset/itemSize)))},getStopIndexForStartIndex:function getStopIndexForStartIndex(_ref6,startIndex,scrollOffset){var direction=_ref6.direction,height=_ref6.height,itemCount=_ref6.itemCount,itemSize=_ref6.itemSize,layout=_ref6.layout,width=_ref6.width,offset=startIndex*itemSize,size="horizontal"===direction||"horizontal"===layout?width:height,numVisibleItems=Math.ceil((size+scrollOffset-offset)/itemSize);return Math.max(0,Math.min(itemCount-1,startIndex+numVisibleItems-1))},initInstanceProps:function initInstanceProps(props){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function validateProps(_ref7){_ref7.itemSize}})},"../node_modules/ansi-regex/index.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ansiRegex});__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js");function ansiRegex(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$onlyFirst=_ref.onlyFirst,onlyFirst=void 0!==_ref$onlyFirst&&_ref$onlyFirst,pattern=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(pattern,onlyFirst?void 0:"g")}}}]);