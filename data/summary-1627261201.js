$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,283,844" ,

								"death": "24,628" ,

								"dailycount": "2,089" ,

								"dailydeath": "4" ,
								"date":"07/25" ,
								"info":"through 6:00pm 07/24/2021" ,							
								

								"testingaverage":"42,567" ,

								"peopletested":"7,253,076" ,

								"positivity":"4.53%" ,
								"hospitalizations":"716"

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



