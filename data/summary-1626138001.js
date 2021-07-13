$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,258,685" ,

								"death": "24,543" ,

								"dailycount": "1,059" ,

								"dailydeath": "1" ,
								"date":"07/12" ,
								"info":"through 6:00pm 07/11/2021" ,							
								

								"testingaverage":"29,959" ,

								"peopletested":"7,119,720" ,

								"positivity":"1.92%" ,
								"hospitalizations":"372"

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



