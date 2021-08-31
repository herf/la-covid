$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,403,053",

			"death": "25,245",

			"dailycount": "2,231",


			"dailydeath": "5",
		
			"date": "08/29" ,
			"info": "through 6:00pm 08/28/2021",


			"testingaverage": "135,865",


			"peopletested": "8,089,517",

			"positivity": "2.31%",
			"hospitalizations": "1,692" 



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



