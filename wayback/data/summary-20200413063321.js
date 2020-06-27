$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "9192",
				            "death": "296" ,
				            "date":"As of 12pm 4/12"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



