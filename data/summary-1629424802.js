$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,362,848" ,

								"death": "25,002" ,

								"dailycount": "3,239" ,

								"dailydeath": "35" ,
								"date":"08/19" ,
								"info":"through 6:00pm 08/18/2021" ,							
								

								"testingaverage":"108,473" ,

								"peopletested":"7,847,190" ,

								"positivity":"3.74%" ,
								"hospitalizations":"1,790"

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



