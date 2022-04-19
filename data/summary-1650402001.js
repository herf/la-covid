$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,854,567",


			"death": "31,884",


			"dailycount": "857",


			"dailydeath": "12",


			"date": "04/19",
			"info": "through 6:00pm 04/18/2022",

			"testingaverage": "84,745",

			"peopletested": "11,793,681",

			"positivity": "1.35%",

			"hospitalizations": "226",
			"datehospitalizations": "04/18"

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



