$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "29,427",
				            "death": "1,418" ,
				            "date":"05/07 Update" ,
				            "info":"Cases through 8:00pm 05/06/2020"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);	
				$('#cse').html(content.info);				


});



