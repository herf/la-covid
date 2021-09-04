$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,414,854",

			"death": "25,401",

			"dailycount": "2,673",


			"dailydeath": "37",
		
			"date": "09/03" ,
			"info": "through 6:00pm 09/02/2021",


			"testingaverage": "144,471",


			"peopletested": "8,188,912",

			"positivity": "2.20%",
			"hospitalizations": "1,641" 



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



