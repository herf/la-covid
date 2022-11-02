$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,490,492",


			"death": "33,986",

			"dailycount": "1,392",


			"dailydeath": "6",
			"hospitalizationsever": "158,275",


			"date": "11/02",
			"info": "through 12:00pm 11/01/2022",

			"testingaverage": "27,352",

			"peopletested": "12,648,261",

			"positivity": "3.79%",

			"hospitalizations": "427",
			"datehospitalizations": "11/01"

				}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#hosp_1').html(content.hospitalizationsever);
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



