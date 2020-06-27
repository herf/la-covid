$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "20,417",
				            "death": "942" ,
				            "date":"As of 8pm 4/26"				                      
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dte').html(content.date);				


});



