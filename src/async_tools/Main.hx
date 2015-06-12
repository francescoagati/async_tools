package async_tools;

import async_tools.Async;
import async_tools.Cps.*;
using async_tools.Sync2Async;

class Main implements Async {

  public inline static function sum(a,b,cb) {
    haxe.Timer.delay(function() {
      cb(a+b);
    },2000);
  }

  static function main() {

    cont_exec({
        var a = untyped __js__('1');
        var b = untyped __js__('2');
        var z = @await sum(a,b);
        trace(z);
        var z = @await sum(a,b);
        trace(z);
        var z = @await sum(a,b);
        trace(z);
    });

    var fn =  cont({
        var a = untyped __js__('1');
        var b = untyped __js__('2');
        var z = @await sum(a,b);
        trace(z);
        var z = @await sum(a,b);
        trace(z);
        var z = @await sum(a,b);
        trace(z);
    });

    fn(function() {});

    cont_exec({

      var callable:Dynamic = untyped window;
      var x = @await callable.pippo.async()("x");
      @await callable.pippo.async(0)();
      var x2 = @await callable.pippo.async(2)("x","y");
      var x3 = @await callable.pippo.async(3)("x","y","z");
      var x4 = @await callable.pippo.async(4)("x","y","z","k");
    });

  }
}
