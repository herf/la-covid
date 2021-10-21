$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,480,656",



			"death": "26,473",


			"dailycount": "1,267",



			"dailydeath": "31",



			"date": "10/20",
			"info": "through 6:00pm 10/19/2021",


			"testingaverage": "142,418",

			"peopletested": "8,924,854",

			"positivity": "0.82%",

			"hospitalizations": "635",
			"datehospitalizations": "10/18" 
 

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



