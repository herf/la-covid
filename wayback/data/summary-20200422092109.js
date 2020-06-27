$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "15,140",
				            "death": "663" ,
				            "date":"As of 12pm 4/21"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



