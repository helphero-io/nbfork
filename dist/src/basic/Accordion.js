Object.defineProperty(exports,"__esModule",{value:true});exports.Accordion=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/basic/Accordion.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _Text=require('./Text');var _Icon=require('./Icon');var _platform=require('../theme/variables/platform');var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var styles=_reactNative.StyleSheet.create({defaultHeader:{flexDirection:'row',padding:_platform2.default.accordionContentPadding,justifyContent:'space-between',alignItems:'center'}});var DefaultHeader=function(_React$Component){_inherits(DefaultHeader,_React$Component);function DefaultHeader(){_classCallCheck(this,DefaultHeader);return _possibleConstructorReturn(this,(DefaultHeader.__proto__||Object.getPrototypeOf(DefaultHeader)).apply(this,arguments));}_createClass(DefaultHeader,[{key:'render',value:function render(){var _props=this.props,expanded=_props.expanded,expandedIcon=_props.expandedIcon,expandedIconStyle=_props.expandedIconStyle,headerStyle=_props.headerStyle,icon=_props.icon,iconStyle=_props.iconStyle,title=_props.title;var variables=this.context.theme?this.context.theme['@@shoutem.theme/themeStyle'].variables:_platform2.default;return _react2.default.createElement(_reactNative.View,{style:[styles.defaultHeader,headerStyle||{backgroundColor:variables.headerStyle}],__source:{fileName:_jsxFileName,lineNumber:38}},_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:44}},' ',title),_react2.default.createElement(_Icon.Icon,{style:[{fontSize:variables.accordionIconFontSize},expanded?expandedIcon&&expandedIconStyle?expandedIconStyle:{color:variables.expandedIconStyle}:icon&&iconStyle?iconStyle:{color:variables.iconStyle}],name:expanded?expandedIcon||'ios-arrow-up':icon||'ios-arrow-down',__source:{fileName:_jsxFileName,lineNumber:45}}));}}]);return DefaultHeader;}(_react2.default.Component);var DefaultContent=function(_React$Component2){_inherits(DefaultContent,_React$Component2);function DefaultContent(){_classCallCheck(this,DefaultContent);return _possibleConstructorReturn(this,(DefaultContent.__proto__||Object.getPrototypeOf(DefaultContent)).apply(this,arguments));}_createClass(DefaultContent,[{key:'render',value:function render(){var _props2=this.props,content=_props2.content,contentStyle=_props2.contentStyle;var variables=this.context.theme?this.context.theme['@@shoutem.theme/themeStyle'].variables:_platform2.default;return _react2.default.createElement(_Text.Text,{style:[{padding:_platform2.default.accordionContentPadding},contentStyle||{backgroundColor:variables.contentStyle}],__source:{fileName:_jsxFileName,lineNumber:72}},content);}}]);return DefaultContent;}(_react2.default.Component);var AccordionSubItem=function(_React$Component3){_inherits(AccordionSubItem,_React$Component3);function AccordionSubItem(){var _ref;var _temp,_this3,_ret;_classCallCheck(this,AccordionSubItem);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this3=_possibleConstructorReturn(this,(_ref=AccordionSubItem.__proto__||Object.getPrototypeOf(AccordionSubItem)).call.apply(_ref,[this].concat(args))),_this3),_this3.state={fadeAnim:new _reactNative.Animated.Value(0.3)},_temp),_possibleConstructorReturn(_this3,_ret);}_createClass(AccordionSubItem,[{key:'componentDidMount',value:function componentDidMount(){_reactNative.Animated.timing(this.state.fadeAnim,{toValue:1,duration:500,useNativeDriver:true}).start();}},{key:'render',value:function render(){var _props3=this.props,children=_props3.children,style=_props3.style;var fadeAnim=this.state.fadeAnim;return _react2.default.createElement(_reactNative.Animated.View,{style:_extends({},style,{opacity:fadeAnim}),__source:{fileName:_jsxFileName,lineNumber:99}},children);}}]);return AccordionSubItem;}(_react2.default.Component);var AccordionItem=function(_React$Component4){_inherits(AccordionItem,_React$Component4);function AccordionItem(){_classCallCheck(this,AccordionItem);return _possibleConstructorReturn(this,(AccordionItem.__proto__||Object.getPrototypeOf(AccordionItem)).apply(this,arguments));}_createClass(AccordionItem,[{key:'render',value:function render(){var _props4=this.props,contentStyle=_props4.contentStyle,expanded=_props4.expanded,expandedIcon=_props4.expandedIcon,expandedIconStyle=_props4.expandedIconStyle,headerStyle=_props4.headerStyle,icon=_props4.icon,iconStyle=_props4.iconStyle,index=_props4.index,item=_props4.item,onAccordionClose=_props4.onAccordionClose,onAccordionOpen=_props4.onAccordionOpen,renderContent=_props4.renderContent,renderHeader=_props4.renderHeader,setSelected=_props4.setSelected;return _react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:125}},_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:function onPress(){onAccordionOpen&&!expanded&&onAccordionOpen(item,index);onAccordionClose&&expanded&&onAccordionClose(item,index);setSelected(index);},__source:{fileName:_jsxFileName,lineNumber:126}},_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:133}},renderHeader?renderHeader(item,expanded,index):_react2.default.createElement(DefaultHeader,{title:item.title,expanded:expanded,headerStyle:headerStyle,icon:icon,iconStyle:iconStyle,expandedIcon:expandedIcon,expandedIconStyle:expandedIconStyle,__source:{fileName:_jsxFileName,lineNumber:137}}))),expanded?_react2.default.createElement(AccordionSubItem,{__source:{fileName:_jsxFileName,lineNumber:150}},renderContent?renderContent(item,index):_react2.default.createElement(DefaultContent,{content:item.content,contentStyle:contentStyle,__source:{fileName:_jsxFileName,lineNumber:154}})):null);}}]);return AccordionItem;}(_react2.default.Component);var Accordion=exports.Accordion=function(_React$Component5){_inherits(Accordion,_React$Component5);function Accordion(props){_classCallCheck(this,Accordion);var _this5=_possibleConstructorReturn(this,(Accordion.__proto__||Object.getPrototypeOf(Accordion)).call(this,props));var _this5$props=_this5.props,expanded=_this5$props.expanded,expandMultiple=_this5$props.expandMultiple;var selected=void 0;if(expanded!==undefined&&expanded!==null){selected=Array.isArray(expanded)?expanded:[expanded];selected=expandMultiple?selected:selected.slice(0,1);}_this5.state={selected:selected};return _this5;}_createClass(Accordion,[{key:'setSelected',value:function setSelected(index){var expandMultiple=this.props.expandMultiple;var selected=this.state.selected.slice();if(selected.indexOf(index)!==-1){selected.splice(selected.indexOf(index),1);this.setState({selected:selected});}else{selected.push(index);this.setState({selected:expandMultiple?selected:[index]});}}},{key:'render',value:function render(){var _this6=this;var _props5=this.props,contentStyle=_props5.contentStyle,dataArray=_props5.dataArray,expandedIcon=_props5.expandedIcon,expandedIconStyle=_props5.expandedIconStyle,headerStyle=_props5.headerStyle,icon=_props5.icon,iconStyle=_props5.iconStyle,onAccordionClose=_props5.onAccordionClose,onAccordionOpen=_props5.onAccordionOpen,renderContent=_props5.renderContent,renderHeader=_props5.renderHeader,style=_props5.style;var variables=this.context.theme?this.context.theme['@@shoutem.theme/themeStyle'].variables:_platform2.default;return _react2.default.createElement(_reactNative.FlatList,_extends({data:dataArray,extraData:this.state,style:[{borderColor:variables.accordionBorderColor,borderWidth:variables.borderWidth},style],keyExtractor:function keyExtractor(item,index){return String(index);},renderItem:function renderItem(_ref2){var item=_ref2.item,index=_ref2.index;return _react2.default.createElement(AccordionItem,{key:String(index),item:item,expanded:_this6.state.selected.indexOf(index)!==-1,index:index,setSelected:function setSelected(i){return _this6.setSelected(i);},headerStyle:headerStyle,contentStyle:contentStyle,renderHeader:renderHeader,renderContent:renderContent,icon:icon,iconStyle:iconStyle,expandedIcon:expandedIcon,expandedIconStyle:expandedIconStyle,onAccordionOpen:onAccordionOpen,onAccordionClose:onAccordionClose,__source:{fileName:_jsxFileName,lineNumber:224}});}},this.props,{__source:{fileName:_jsxFileName,lineNumber:212}}));}}]);return Accordion;}(_react2.default.Component);
//# sourceMappingURL=Accordion.js.map