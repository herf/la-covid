$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,326,361" ,

								"death": "24,777" ,

								"dailycount": "3,031" ,

								"dailydeath": "8" ,
								"date":"08/08" ,
								"info":"through 6:00pm 08/07/2021" ,							
								

								"testingaverage":"54,733" ,

								"peopletested":"7,494,490" ,

								"positivity":"6.38%" ,
								"hospitalizations":"1,433"

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



