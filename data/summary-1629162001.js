$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,352,791" ,

								"death": "24,905" ,

								"dailycount": "2,426" ,

								"dailydeath": "5" ,
								"date":"08/16" ,
								"info":"through 6:00pm 08/15/2021" ,							
								

								"testingaverage":"90,445" ,

								"peopletested":"7,754,689" ,

								"positivity":"4.40%" ,
								"hospitalizations":"1,653"

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



