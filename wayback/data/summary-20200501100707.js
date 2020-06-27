$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "23,182",
				            "death": "1,111" ,
				            "date":"04/30 Update"	,
				            "info":"Cases through 8:00pm 04/29/2020"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);	
				$('#cse').html(content.info);				


});



