$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,926,848",


			"death": "32,064",


			"dailycount": "4,725",


			"dailydeath": "9",


			"date": "05/19",
			"info": "through 6:00pm 05/18/2022",

			"testingaverage": "131,303",

			"peopletested": "11,951,427",

			"positivity": "2.57%",

			"hospitalizations": "379",
			"datehospitalizations": "05/18"

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



