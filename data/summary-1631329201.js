$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,427,817",


			"death": "25,611",


			"dailycount": "2,024",


			"dailydeath": "50",

			"date": "09/10",
			"info": "through 6:00pm 09/09/2021",

			"testingaverage": "137,372",

			"peopletested": "8,312,543",

			"positivity": "1.85%",
			"hospitalizations": "1,385"




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



