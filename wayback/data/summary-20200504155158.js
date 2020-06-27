$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "25,662",
				            "death": "1,229" ,
				            "date":"05/03 Update" ,
				            "info":"Cases through 8:00pm 05/02/2020"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);	
				$('#cse').html(content.info);				


});



