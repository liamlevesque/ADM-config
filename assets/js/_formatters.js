function formatprice(amt){
	if(amt === 0) return 0;
	else if(!amt) return null;

	var price;

	if($('#js--body').hasClass('INR')) 
		price = amt.toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1<span class="divider"></span>');
	else 
		price = amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '<span class="divider"></span>');

	return price; 
};
 
rivets.formatters.price = function(value){
	return formatprice(value);
};

rivets.formatters.compare = function(value, comparisons){
	if(typeof value == "undefined" || typeof comparisons == "undefined") return false;
	
	if(typeof comparisons == "string"){
		var args = comparisons.split(',');
		if(args.includes(value)) return true;
	}
	else if(comparisons === value) return true;
	
	return false;
};

rivets.formatters.greaterthan = function(value, comparisons){
	if(typeof value == "undefined" || typeof comparisons == "undefined") return false;

	if(value > comparisons) return true;
	else return false;
};

rivets.binders.addtextclass = function(el,value){
	if(value === "") return false;
	$(el).removeClass().addClass('s-'+ value);
};

rivets.binders.percenttowidth = function(el,value){
	$(el).css({'transform':"scaleX("+value/100+")"});
};

rivets.binders.sortclasses = function(el,value){
	var thiscolumn = $(el).data('column');
	var direction = dataObject.sortdirection;
	$(el).removeClass('s-active-sort s-sort-asc s-sort-desc');
	
	if(value === thiscolumn) $(el).addClass('s-active-sort s-sort-'+direction);
};

rivets.binders.ischecked = function(el,value){
	if(value) $(el).prop('checked',true);
	else $(el).prop('checked',false);
};

rivets.binders.lotgroupdecor = function(el,value){
	if(value === 'start') $(el).addClass('s-group-start');
	if(value === 'mid') $(el).addClass('s-group');
	if(value === 'end') $(el).addClass('s-group-end');
};

rivets.formatters.indexof = function(list,item){
	if(list.indexOf(item) >= 0) return true;
	else return false;
};


rivets.formatters.divide = function(value,divisor){
	return Math.floor((value/divisor*100));
};

rivets.formatters.lengthToBool = function(value){
	if(typeof value === 'undefined') return false;
	if(value.length === 0) return false;
	return true;
};

rivets.formatters.invalidinput = function(value){
	if(typeof value === 'undefined') return false;
	if(value.length === 0) return false;
	if(value.match(/[^A-Za-z0-9-_]/gi) != null) return false;
	return true;
};

rivets.formatters.lengthGreaterThanOne = function(value){
	if(typeof value === 'undefined') return false;
	if(value.length > 1) return true;
	return false;
};

rivets.formatters.inverseLengthToBool = function(value){
	if(typeof value === 'undefined') return true;
	if(value.length === 0) return true;
	return false;
};

rivets.formatters.length = function(value){
	if(typeof value === 'undefined') return 0;
	return value.length;
};

rivets.formatters.invert = function(value){
	console.log(value);
	if(typeof value != "undefined") return false;
	return true;
};

rivets.formatters.propertyList = function(obj) {
  return (function() {
    var properties = []
    for (key in obj) {
      properties.push({key: key, value: obj[key]})
    }
    return properties
  });
};

rivets.formatters.findShortcuts = function(arr,index){
	if(typeof arr[index] === 'undefined') return false;
	return arr[index].shortcuts;
};

rivets.formatters.and = function(value,item){
	if(value && item) return true;
	return false;
};

rivets.binders.backgroundsrc = function(el,value){
	$(el).css({'background-image':value});
}

rivets.formatters.formatThousands = function(value){
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

rivets.formatters.disablePhotoDownload = function(value, arg){
	if(typeof value == "undefined" || typeof arg == "undefined") return true;
	if(arg.length === 0 && value) return false;
	return true;
}



