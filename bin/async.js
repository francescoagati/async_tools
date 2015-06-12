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
		var __fn_tmp_62158432_1416092366_c4ad0af4a46bd640bb117245a7749e0b = function(__return4) {
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
						__return4();
					};
					var a5 = a4;
					var b5 = b4;
					var __return5 = function(__parameter_7) {
						__afterVar_6(__parameter_7);
					};
					setTimeout(function() {
						__return5(a5 + b5);
					},2000);
				};
				var a6 = a4;
				var b6 = b4;
				var __return6 = function(__parameter_5) {
					__afterVar_4(__parameter_5);
				};
				setTimeout(function() {
					__return6(a6 + b6);
				},2000);
			};
			var a7 = a4;
			var b7 = b4;
			var __return7 = function(__parameter_3) {
				__afterVar_2(__parameter_3);
			};
			setTimeout(function() {
				__return7(a7 + b7);
			},2000);
		};
		$r = __fn_tmp_62158432_1416092366_c4ad0af4a46bd640bb117245a7749e0b;
		return $r;
	}(this)))(function() {
	});
	var fn = (function($this) {
		var $r;
		var __fn_tmp_53873012_3995364755_d8081b09746fbad3457f971ab73d1af4 = function(__return) {
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
					var __return1 = function(__parameter_15) {
						__afterVar_14(__parameter_15);
					};
					setTimeout(function() {
						__return1(a1 + b1);
					},2000);
				};
				var a2 = a;
				var b2 = b;
				var __return2 = function(__parameter_13) {
					__afterVar_12(__parameter_13);
				};
				setTimeout(function() {
					__return2(a2 + b2);
				},2000);
			};
			var a3 = a;
			var b3 = b;
			var __return3 = function(__parameter_11) {
				__afterVar_10(__parameter_11);
			};
			setTimeout(function() {
				__return3(a3 + b3);
			},2000);
		};
		$r = __fn_tmp_53873012_3995364755_d8081b09746fbad3457f971ab73d1af4;
		return $r;
	}(this));
	fn(function() {
	});
	((function($this) {
		var $r;
		var __fn_tmp_87733048_2467451841_d8081b09746fbad3457f971ab73d1af4 = function(__return8) {
			var callable = window;
			callable;
			var __afterVar_17 = function(x) {
				x;
				((function($this) {
					var $r;
					var __tmp35770861817_6204224_1772483784 = function(cb) {
						callable.pippo(function(v) {
							var __args = arguments;
							cb(__args);
						});
					};
					$r = __tmp35770861817_6204224_1772483784;
					return $r;
				}(this)))(function(__parameter_19) {
					__parameter_19;
					var __afterVar_20 = function(x2) {
						x2;
						var __afterVar_22 = function(x3) {
							x3;
							var __afterVar_24 = function(x4) {
								x4;
								__return8();
							};
							((function($this) {
								var $r;
								var __tmp81232841852_6913147_1772483784 = function(p1,p2,p3,p4,cb1) {
									callable.pippo(p1,p2,p3,p4,function(v1) {
										var __args1 = arguments;
										cb1(__args1);
									});
								};
								$r = __tmp81232841852_6913147_1772483784;
								return $r;
							}(this)))("x","y","z","k",function(__parameter_25) {
								__afterVar_24(__parameter_25);
							});
						};
						((function($this) {
							var $r;
							var __tmp68937902105_4945221_1772483784 = function(p11,p21,p31,cb2) {
								callable.pippo(p11,p21,p31,function(v2) {
									var __args2 = arguments;
									cb2(__args2);
								});
							};
							$r = __tmp68937902105_4945221_1772483784;
							return $r;
						}(this)))("x","y","z",function(__parameter_23) {
							__afterVar_22(__parameter_23);
						});
					};
					((function($this) {
						var $r;
						var __tmp16440937154_0411186_1772483784 = function(p12,p22,cb3) {
							callable.pippo(p12,p22,function(v3) {
								var __args3 = arguments;
								cb3(__args3);
							});
						};
						$r = __tmp16440937154_0411186_1772483784;
						return $r;
					}(this)))("x","y",function(__parameter_21) {
						__afterVar_20(__parameter_21);
					});
				});
			};
			((function($this) {
				var $r;
				var __tmp75428119186_3989105_1772483784 = function(p13,cb4) {
					callable.pippo(p13,function(v4) {
						var __args4 = arguments;
						cb4(__args4);
					});
				};
				$r = __tmp75428119186_3989105_1772483784;
				return $r;
			}(this)))("x",function(__parameter_18) {
				__afterVar_17(__parameter_18);
			});
		};
		$r = __fn_tmp_87733048_2467451841_d8081b09746fbad3457f971ab73d1af4;
		return $r;
	}(this)))(function() {
	});
};
async_$tools_Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
