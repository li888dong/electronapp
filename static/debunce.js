export const debounce = function(fn, delay){
	let last;
	return function(){
		let ctx = this, args = arguments;
		clearTimeout(last);
		last = setTimeout(function(){
			fn.apply(ctx, args)
		}, delay)
	}
};