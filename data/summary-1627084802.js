$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,276,171" ,

								"death": "24,614" ,

								"dailycount": "3,058" ,

								"dailydeath": "7" ,
								"date":"07/23" ,
								"info":"through 6:00pm 07/22/2021" ,							
								

								"testingaverage":"41,309" ,

								"peopletested":"7,228,518" ,

								"positivity":"4.31%" ,
								"hospitalizations":"655"

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



