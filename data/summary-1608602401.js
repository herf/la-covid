$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								"count": "634,849", 

								"death": "8,931" ,
								"dailycount": "11,271", 
								"dailydeath": "56" ,
								"date":"12/21" ,
								"info":"through 8:00pm 12/20/2020" ,
								
								"testingaverage":"92,810" ,
								"peopletested":"4,397,358" ,
								"positivity":"15.30%" , 
								"hospitalizations":"5,709" 						
				        }       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#dte').html(content.date);
				$('#dte_1').html(content.date);
				$('#dte_2').html(content.date);
				$('#dte_3').html(content.date);
				$('#cse').html(content.info);	
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



