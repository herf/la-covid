$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,836,605",


			"death": "31,710",


			"dailycount": "530",


			"dailydeath": "8",



			"date": "04/04",
			"info": "through 6:00pm 04/03/2022",

			"testingaverage": "98,219",

			"peopletested": "11,715,568",

			"positivity": "0.81%",

			"hospitalizations": "287",
			"datehospitalizations": "04/03"

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



