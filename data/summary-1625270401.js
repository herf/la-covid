$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,251,224",

								"death": "24,492",


								"dailycount": "549",
								"dailydeath": "5",
								"date":"07/02" ,
								"info":"through 6:00pm 07/01/2021" ,
								

								"testingaverage":"35,901",

								"peopletested":"7,044,819",

								"positivity":"0.9%", 
								"hospitalizations":"280" 

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



