$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "31,197",
				            "death": "1,512" ,
				            "date":"05/09 Update" ,
				            "info":"Cases through 8:00pm 05/08/2020"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);	
				$('#cse').html(content.info);				


});



