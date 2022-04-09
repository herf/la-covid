$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,843,599",


			"death": "31,770",


			"dailycount": "1,263",


			"dailydeath": "16",


			"date": "04/08",
			"info": "through 6:00pm 04/07/2022",

			"testingaverage": "103,796",

			"peopletested": "11,742,932",

			"positivity": "0.84%",

			"hospitalizations": "275",
			"datehospitalizations": "04/07"

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



