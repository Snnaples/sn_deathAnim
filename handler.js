$(function () {
	window.onload = (e) => {
		window.addEventListener('message', (event) => {
		

			var item = event.data;
			if(item.type =="heart") {
				
			
				$("#plm").show();
			}
			
			if(item.type =="close-heart") {
				$("#plm").hide();
			}
					

		
		});
	};
	
});