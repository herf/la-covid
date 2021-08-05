$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,311,656" ,

								"death": "24,720" ,

								"dailycount": "3,734" ,

								"dailydeath": "16" ,
								"date":"08/04" ,
								"info":"through 6:00pm 08/03/2021" ,							
								

								"testingaverage":"50,891" ,

								"peopletested":"7,380,560" ,

								"positivity":"6.05%" ,
								"hospitalizations":"1,242"

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



