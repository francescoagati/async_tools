package async_tools;
//using promhx_tools.StreamTools;


#if (macro || neko)
  import haxe.macro.Expr;
  using StringTools;
#end

class Cps {

  public static inline function rq(fn:Void->Void,next:Void->Void) {
     untyped window.requestAnimationFrame(function() {
       fn();
       next();
     });
   }

  public static inline function wait(n:Int,cb:Void->Void) untyped setTimeout(cb,n);


  public macro static function cont(body:Expr) {
    var md5 =  haxe.crypto.Md5.encode(Std.string(Date.now().getTime()));
    var randomName = '__fn_tmp_${Std.string(Math.random() * 99999999).replace(".","_")}_${md5}';

    return macro {
      com.dongxiguo.continuation.Continuation.cpsFunction(function $randomName():Void{
        $e{body};
      });
      $i{randomName};
    }
  }

  public macro static function cont_exec(body:Expr) {
    return macro async_tools.Cps.cont($e{body})(function() {});
  }

/*
  inline static function wait_for_stream<T>(stream:promhx.Stream<T>,cb:T->Void) {
    stream.take(1).then(function(value) {
      cb(value);
    });
  }
*/


}
