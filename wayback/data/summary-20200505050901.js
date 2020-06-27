$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "26,217",
				            "death": "1,256" ,
				            "date":"05/04 Update" ,
				            "info":"Cases through 8:00pm 05/03/2020"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);	
				$('#cse').html(content.info);				


});



