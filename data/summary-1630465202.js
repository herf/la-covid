$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,407,317",

			"death": "25,284",

			"dailycount": "1,938",


			"dailydeath": "33",
		
			"date": "08/31" ,
			"info": "through 6:00pm 08/30/2021",


			"testingaverage": "141,682",


			"peopletested": "8,122,449",

			"positivity": "2.53%",
			"hospitalizations": "1,709" 



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



