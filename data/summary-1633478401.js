$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,464,793",

			"death": "26,195",


			"dailycount": "964",


			"dailydeath": "35",


			"date": "10/05",
			"info": "through 6:00pm 10/04/2021",

			"testingaverage": "121,734",

			"peopletested": "8,703,935",

			"positivity": "1.23%",

			"hospitalizations": "768",
			"datehospitalizations": "10/3"



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
				$('#dte_3').html(content.datehospitalizations);
				$('#cse').html(content.info);	
			
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



