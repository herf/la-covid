$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,253,065",


								"death": "24,507",


								"dailycount": "326",
								"dailydeath": "3",
								"date":"07/06" ,
								"info":"through 6:00pm 07/05/2021" ,

								
								

								"testingaverage":"36,104",

								"peopletested":"7,070,014",

								"positivity":"1.14%",
								"hospitalizations":"273" 

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



