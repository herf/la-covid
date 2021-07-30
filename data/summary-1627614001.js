$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,293,450" ,

								"death": "24,675" ,

								"dailycount": "3,248" ,

								"dailydeath": "17" ,
								"date":"07/29" ,
								"info":"through 6:00pm 07/28/2021" ,							
								

								"testingaverage":"47,380" ,

								"peopletested":"7,292,805" ,

								"positivity":"5.17%" ,
								"hospitalizations":"918"

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



