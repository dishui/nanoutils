export default function curry2more(f) {
  return function curried() {
    var args = [].slice.call(arguments)
    return args.length >= 2
      ? f.apply(f, args)
      : function() {
        return f.apply(f, args.concat([].slice.call(arguments)))
      }
  }
}
