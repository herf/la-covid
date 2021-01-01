$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								

								"count": "770,602", 

								"death": "10,345" ,
								"dailycount": "15,129", 
								"dailydeath": "290" ,
								"date":"12/31" ,
								"info":"through 8:00pm 12/30/2020" ,
								
								"testingaverage":"93,724" , 
								"peopletested":"4,699,140" ,
								"positivity":"17.0%" , 
								"hospitalizations":"7,546" 						
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



