package async_tools;
using promhx_tools.StreamTools;


class Stream {

  inline static function wait_for_stream<T>(stream:promhx.Stream<T>,cb:T->Void) {
    stream.take(1).then(function(value) {
      cb(value);
    });
  }
  
}
