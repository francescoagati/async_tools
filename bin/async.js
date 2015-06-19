(function (console) { "use strict";
var HxOverrides = function() { };
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var async_$tools_Async = function() { };
var async_$tools_Main = function() { };
async_$tools_Main.__interfaces__ = [async_$tools_Async];
async_$tools_Main.main = function() {
};
async_$tools_Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
