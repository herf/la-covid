$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,303,343" ,

								"death": "24,685" ,

								"dailycount": "3,045" ,

								"dailydeath": "5" ,
								"date":"08/01" ,
								"info":"through 6:00pm 07/31/2021" ,							
								

								"testingaverage":"66,378" ,

								"peopletested":"7,339,000" ,

								"positivity":"5.39%" ,
								"hospitalizations":"1,071"

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



