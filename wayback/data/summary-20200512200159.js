$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "32,258",
				            "death": "1,569" ,
				            "date":"05/11 Update" ,
				            "info":"Cases through 8:00pm 05/10/2020"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);	
				$('#cse').html(content.info);				


});



