$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,252,303",

								"death": "24,502",

								"dailycount": "457",
								"dailydeath": "4",
								"date":"07/04" ,
								"info":"through 6:00pm 07/03/2021" ,
								

								"testingaverage":"35,932",

								"peopletested":"7,060,171",

								"positivity":"0.98%", 
								"hospitalizations":"278" 

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



