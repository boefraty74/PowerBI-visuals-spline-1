var powerbi;!function(e){!function(e){!function(e){!function(e){function t(){r=0}function i(){return 0===r}function s(e,t){var i=[];if(e&&e.hasChildNodes()){for(var s=e.children,o=0;o<s.length;o++){var r=void 0;r="script"===s.item(o).nodeName.toLowerCase()?n(s.item(o)):s.item(o).cloneNode(!0),t.appendChild(r),i.push(r)}return i}}function n(e){for(var t=document.createElement("script"),i=e.attributes,s=0;s<i.length;s++)t.setAttribute(i[s].name,i[s].textContent),"src"===i[s].name.toLowerCase()&&(r++,t.onload=function(){r--});return t.innerHTML=e.innerHTML,t}function o(){var e=window.setInterval(function(){i()&&(window.clearInterval(e),window.hasOwnProperty("HTMLWidgets")&&window.HTMLWidgets.staticRender&&window.HTMLWidgets.staticRender())},100)}var r=0;e.ResetInjector=t,e.injectorReady=i,e.ParseElement=s,e.RunHTMLWidgetRenderer=o}(e.PBI_CV_9D783E0D_2610_4C22_9576_88AD092AB59E||(e.PBI_CV_9D783E0D_2610_4C22_9576_88AD092AB59E={}))}(e.visual||(e.visual={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(e){!function(e){!function(e){function t(e,t,i,s){if(e){var n=e[t];if(n){var o=n[i];if(void 0!==o)return o}}return s}function i(e,t,i,s,n){var o=e.objects;if(o){var r=o[t];if(r){var a=r[i];if(a){var l=a[s];if(void 0!==l)return l}}}return n}function s(e,t,i){return e<t?t:e>i?i:e}e.getValue=t,e.getCategoricalObjectValue=i,e.inMinMax=s}(e.PBI_CV_9D783E0D_2610_4C22_9576_88AD092AB59E||(e.PBI_CV_9D783E0D_2610_4C22_9576_88AD092AB59E={}))}(e.visual||(e.visual={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(t){!function(t){!function(t){var i=[e.VisualUpdateType.Resize,e.VisualUpdateType.ResizeEnd,e.VisualUpdateType.Resize+e.VisualUpdateType.ResizeEnd],s=function(){function e(e){e&&e.element&&(this.rootElement=e.element),this.headNodes=[],this.bodyNodes=[],this.settings_spline={model:"auto",smoothness:30,lineColor:"red"},this.settings_scatter={pointColor:"blue",weight:10,percentile:40,sparsify:!0},this.settings_conf={show:!0,confLevel:.99}}return e.prototype.update=function(e){if(e&&e.type&&e.viewport){var t=e.dataViews;if(t&&0!==t.length){var s=t[0];if(s&&s.metadata){this.updateObjects(s.metadata.objects);var n=null;s.scriptResult&&s.scriptResult.payloadBase64&&(n=s.scriptResult.payloadBase64),i.indexOf(e.type)===-1&&n&&this.injectCodeFromPayload(n),this.onResizing(e.viewport)}}}},e.prototype.onResizing=function(e){},e.prototype.injectCodeFromPayload=function(e){if(t.ResetInjector(),e){var i=document.createElement("html");try{i.innerHTML=window.atob(e)}catch(e){return}if(0===this.headNodes.length){for(;this.headNodes.length>0;){var s=this.headNodes.pop();document.head.removeChild(s)}var n=i.getElementsByTagName("head");if(n&&n.length>0){var o=n[0];this.headNodes=t.ParseElement(o,document.head)}}for(;this.bodyNodes.length>0;){var s=this.bodyNodes.pop();this.rootElement.removeChild(s)}var r=i.getElementsByTagName("body");if(r&&r.length>0){var a=r[0];this.bodyNodes=t.ParseElement(a,this.rootElement)}t.RunHTMLWidgetRenderer()}},e.prototype.updateObjects=function(e){this.settings_spline={model:t.getValue(e,"settings_spline_params","model","auto"),smoothness:t.getValue(e,"settings_spline_params","percentile",30),lineColor:t.getValue(e,"settings_spline_params","lineColor","red")},this.settings_scatter={pointColor:t.getValue(e,"settings_scatter_params","pointColor","blue"),weight:t.getValue(e,"settings_scatter_params","weight",10),percentile:t.getValue(e,"settings_scatter_params","percentile",40),sparsify:t.getValue(e,"settings_scatter_params","sparsify",!0)},this.settings_conf={confLevel:t.getValue(e,"settings_conf_params","confLevel",.99),show:t.getValue(e,"settings_conf_params","show",!0)}},e.prototype.enumerateObjectInstances=function(e){var i=e.objectName,s=[];switch(i){case"settings_spline_params":s.push({objectName:i,properties:{lineColor:this.settings_spline.lineColor,model:this.settings_spline.model},selector:null}),"auto"!=this.settings_spline.model&&"loess"!=this.settings_spline.model||s.push({objectName:i,properties:{percentile:this.settings_spline.smoothness},selector:null});break;case"settings_conf_params":s.push({objectName:i,properties:{confLevel:t.inMinMax(this.settings_conf.confLevel,.25,1),show:this.settings_conf.show},selector:null});break;case"settings_scatter_params":s.push({objectName:i,properties:{pointColor:this.settings_scatter.pointColor,weight:t.inMinMax(this.settings_scatter.weight,1,50),percentile:this.settings_scatter.percentile,sparsify:this.settings_scatter.sparsify},selector:null})}return s},e}();t.Visual=s}(t.PBI_CV_9D783E0D_2610_4C22_9576_88AD092AB59E||(t.PBI_CV_9D783E0D_2610_4C22_9576_88AD092AB59E={}))}(t.visual||(t.visual={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(t){!function(t){t.PBI_CV_9D783E0D_2610_4C22_9576_88AD092AB59E={name:"PBI_CV_9D783E0D_2610_4C22_9576_88AD092AB59E",displayName:"Spline",class:"Visual",version:"1.0.3",apiVersion:"1.4.0",create:function(t){return new e.extensibility.visual.PBI_CV_9D783E0D_2610_4C22_9576_88AD092AB59E.Visual(t)},custom:!0}}(t.plugins||(t.plugins={}))}(e.visuals||(e.visuals={}))}(powerbi||(powerbi={}));