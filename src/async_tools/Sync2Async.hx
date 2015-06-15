package async_tools;

import haxe.macro.Context;
import haxe.macro.Expr;
using haxe.macro.ExprTools;
using haxe.macro.MacroStringTools;
using StringTools;

class Sync2Async {

  public macro static function to_async(o:ExprOf<Dynamic>,?params:Int = 1) {

    inline function params0(fnName:String) {
      return macro  {
        var $fnName = function(cb:Array<Dynamic>->Void) {
          $o(function(v){
            var __args = untyped __js__('arguments');
            cb(__args);
          });
        };
        $i{fnName};
      };
    }


    inline function params1(fnName:String) {
      return macro  {
        var $fnName = function(p1:Dynamic,cb:Array<Dynamic>->Void) {
          $o(p1,function(v){
            var __args = untyped __js__('arguments');
            cb(__args);
          });
        };
        $i{fnName};
      };
    }


    inline function params2(fnName:String) {
      return macro  {
        var $fnName = function(p1:Dynamic,p2:Dynamic,cb:Dynamic) {
          $o(p1,p2,function(v){
            var __args = untyped __js__('arguments');
            cb(__args);
          });
        };
        $i{fnName};
      };
    }


    inline function params3(fnName:String) {
      return macro  {
        var $fnName = function(p1:Dynamic,p2:Dynamic,p3:Dynamic,cb:Dynamic) {
          $o(p1,p2,p3,function(v){
            var __args = untyped __js__('arguments');
            cb(__args);
          });
        };
        $i{fnName};
      };
    }

    inline function params4(fnName:String) {
      return macro  {
        var $fnName = function(p1:Dynamic,p2:Dynamic,p3:Dynamic,p4:Dynamic,cb:Dynamic) {
          $o(p1,p2,p3,p4,function(v){
            var __args = untyped __js__('arguments');
            cb(__args);
          });
        };
        $i{fnName};
      };
    }


    var fnName = "__tmp" + Std.string((Math.random() * 99999999999)).replace('.','_') + "_" + Std.string(Std.int(Date.now().getTime()));


    var rt = switch params {
    case 0:params0(fnName);
    case 1:params1(fnName);
    case 2:params2(fnName);
    case 3:params3(fnName);
    case 4:params4(fnName);
    case _:throw('too many arguments');
    }

    return rt;
  }

}
