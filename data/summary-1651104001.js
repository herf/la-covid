$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,867,415",


			"death": "31,951",


			"dailycount": "1,686",


			"dailydeath": "10",


			"date": "04/27",
			"info": "through 6:00pm 04/26/2022",

			"testingaverage": "89,585",

			"peopletested": "11,835,043",

			"positivity": "1.76%",

			"hospitalizations": "235",
			"datehospitalizations": "04/26"

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



