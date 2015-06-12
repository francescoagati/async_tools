package async_tools;

#if (macro || neko)
  import haxe.macro.Expr;
  using StringTools;
#end

class Cps {

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

}