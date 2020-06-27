$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "33,180",
				            "death": "1,613" ,
				            "date":"05/12 Update" ,
				            "info":"Cases through 8:00pm 05/11/2020"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);	
				$('#cse').html(content.info);				


});



