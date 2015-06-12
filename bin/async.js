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
	((function($this) {
		var $r;
		var __fn_tmp_12131884_5105821453_83932211213865937321b7f11ebb9c71 = function(__return1) {
			var a4 = 1;
			a4;
			var b4 = 2;
			b4;
			var __afterVar_2 = function(z3) {
				z3;
				console.log(z3);
				var __afterVar_4 = function(z4) {
					z4;
					console.log(z4);
					var __afterVar_6 = function(z5) {
						z5;
						console.log(z5);
						__return1();
					};
					var a5 = a4;
					var b5 = b4;
					var cb3 = function(__parameter_7) {
						__afterVar_6(__parameter_7);
					};
					haxe_Timer.delay(function() {
						cb3(a5 + b5);
					},2000);
				};
				var a6 = a4;
				var b6 = b4;
				var cb4 = function(__parameter_5) {
					__afterVar_4(__parameter_5);
				};
				haxe_Timer.delay(function() {
					cb4(a6 + b6);
				},2000);
			};
			var a7 = a4;
			var b7 = b4;
			var cb5 = function(__parameter_3) {
				__afterVar_2(__parameter_3);
			};
			haxe_Timer.delay(function() {
				cb5(a7 + b7);
			},2000);
		};
		$r = __fn_tmp_12131884_5105821453_83932211213865937321b7f11ebb9c71;
		return $r;
	}(this)))(function() {
	});
	var fn = (function($this) {
		var $r;
		var __fn_tmp_87221243_3225474656_83932211213865937321b7f11ebb9c71 = function(__return) {
			var a = 1;
			a;
			var b = 2;
			b;
			var __afterVar_10 = function(z) {
				z;
				console.log(z);
				var __afterVar_12 = function(z1) {
					z1;
					console.log(z1);
					var __afterVar_14 = function(z2) {
						z2;
						console.log(z2);
						__return();
					};
					var a1 = a;
					var b1 = b;
					var cb = function(__parameter_15) {
						__afterVar_14(__parameter_15);
					};
					haxe_Timer.delay(function() {
						cb(a1 + b1);
					},2000);
				};
				var a2 = a;
				var b2 = b;
				var cb1 = function(__parameter_13) {
					__afterVar_12(__parameter_13);
				};
				haxe_Timer.delay(function() {
					cb1(a2 + b2);
				},2000);
			};
			var a3 = a;
			var b3 = b;
			var cb2 = function(__parameter_11) {
				__afterVar_10(__parameter_11);
			};
			haxe_Timer.delay(function() {
				cb2(a3 + b3);
			},2000);
		};
		$r = __fn_tmp_87221243_3225474656_83932211213865937321b7f11ebb9c71;
		return $r;
	}(this));
	fn(function() {
	});
	((function($this) {
		var $r;
		var __fn_tmp_60542675_1467530206_83932211213865937321b7f11ebb9c71 = function(__return2) {
			var callable = window;
			callable;
			var __afterVar_17 = function(x) {
				x;
				((function($this) {
					var $r;
					var __tmp36054402828_3428_1770524784 = function(cb6) {
						callable.pippo(function(v) {
							var __args = arguments;
							cb6(__args);
						});
					};
					$r = __tmp36054402828_3428_1770524784;
					return $r;
				}(this)))(function(__parameter_19) {
					__parameter_19;
					var __afterVar_20 = function(x2) {
						x2;
						var __afterVar_22 = function(x3) {
							x3;
							var __afterVar_24 = function(x4) {
								x4;
								__return2();
							};
							((function($this) {
								var $r;
								var __tmp53401637867_5991821_1770524784 = function(p1,p2,p3,p4,cb7) {
									callable.pippo(p1,p2,p3,p4,function(v1) {
										var __args1 = arguments;
										cb7(__args1);
									});
								};
								$r = __tmp53401637867_5991821_1770524784;
								return $r;
							}(this)))("x","y","z","k",function(__parameter_25) {
								__afterVar_24(__parameter_25);
							});
						};
						((function($this) {
							var $r;
							var __tmp50201541113_3963_1770524784 = function(p11,p21,p31,cb8) {
								callable.pippo(p11,p21,p31,function(v2) {
									var __args2 = arguments;
									cb8(__args2);
								});
							};
							$r = __tmp50201541113_3963_1770524784;
							return $r;
						}(this)))("x","y","z",function(__parameter_23) {
							__afterVar_22(__parameter_23);
						});
					};
					((function($this) {
						var $r;
						var __tmp5952691792_72670555_1770524784 = function(p12,p22,cb9) {
							callable.pippo(p12,p22,function(v3) {
								var __args3 = arguments;
								cb9(__args3);
							});
						};
						$r = __tmp5952691792_72670555_1770524784;
						return $r;
					}(this)))("x","y",function(__parameter_21) {
						__afterVar_20(__parameter_21);
					});
				});
			};
			((function($this) {
				var $r;
				var __tmp30823729232_9160576_1770524784 = function(p13,cb10) {
					callable.pippo(p13,function(v4) {
						var __args4 = arguments;
						cb10(__args4);
					});
				};
				$r = __tmp30823729232_9160576_1770524784;
				return $r;
			}(this)))("x",function(__parameter_18) {
				__afterVar_17(__parameter_18);
			});
		};
		$r = __fn_tmp_60542675_1467530206_83932211213865937321b7f11ebb9c71;
		return $r;
	}(this)))(function() {
	});
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
};
async_$tools_Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
