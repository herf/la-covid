$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,276,137" ,

								"death": "24,607" ,

								"dailycount": "2,767" ,

								"dailydeath": "13" ,
								"date":"07/22" ,
								"info":"through 6:00pm 07/21/2021" ,							
								

								"testingaverage":"40,607" ,

								"peopletested":"7,213,245" ,

								"positivity":"4.05%" ,
								"hospitalizations":"645"

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



