$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,254,354",


								"death": "24,525",


								"dailycount": "839",
								"dailydeath": "11",
								"date":"07/08" ,
								"info":"through 6:00pm 07/07/2021" ,

								
								

								"testingaverage":"36,738",

								"peopletested":"7,083,908",

								"positivity":"1.33%",
								"hospitalizations":"296" 

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



