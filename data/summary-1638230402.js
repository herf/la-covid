$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,526,272",



			"death": "27,138",



			"dailycount": "794",



			"dailydeath": "10",

			"date": "11/29",
			"info": "through 6:00pm 11/28/2021",


			"testingaverage": "119,778",


			"peopletested": "9,413,296",

			"positivity": "1.03%",

			"hospitalizations": "568",
			"datehospitalizations": "11/27"

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



