$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,536,351",



			"death": "27,246",



			"dailycount": "1,642",



			"dailydeath": "4",

			"date": "12/05",
			"info": "through 6:00pm 12/04/2021",


			"testingaverage": "63,131",


			"peopletested": "9,504,500",

			"positivity": "1.67%",

			"hospitalizations": "610",
			"datehospitalizations": "12/03"

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



