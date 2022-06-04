$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,990,651",


			"death": "32,154",


			"dailycount": "5,051",


			"dailydeath": "10",


			"date": "06/03",
			"info": "through 12:00pm 06/02/2022",

			"testingaverage": "131,237",

			"peopletested": "12,034,362",

			"positivity": "3.98%",

			"hospitalizations": "522",
			"datehospitalizations": "06/02"

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



