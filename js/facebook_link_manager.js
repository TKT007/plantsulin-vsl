document.addEventListener('DOMContentLoaded', function() {

	var fbclid_bg = getQueryVariable('fbclid');
	if(fbclid_bg !== false){

		//find bg links
		var bg_link_Nodelist = document.getElementsByTagName("a");
		var bg_i;

		// pattern to look for
		var bg_pattern = "fb=1";

		//iterate and attach the fbclid
		for (bg_i = 0; bg_i < bg_link_Nodelist.length; bg_i++) 
		{
		    var bg_link = bg_link_Nodelist[bg_i].href;

		    //count the slashes in bg link
		    var slashes = bg_link.split('/');
			slashes.pop();

		    // check if bg link contains "fb=1"
		    if(bg_link.indexOf(bg_pattern) > -1 /*&& slashes.length == 6*/)
		    {
		    	//remove the fb param and attach the fbclid
		    	bg_link = removeParam("fb", bg_link);
		    	if(bg_link.indexOf("?") > -1){
		    		bg_link = bg_link+"&fbclid="+fbclid_bg;
		    	}else{
		    		bg_link = bg_link+"?fbclid="+fbclid_bg;
		    	}
		        
		        bg_link_Nodelist[bg_i].href = bg_link;
		    }
		}
	}
});
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}
function removeParam(key, sourceURL) {
    var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        if (params_arr.length) rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
}