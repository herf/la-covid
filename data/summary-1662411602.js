$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,418,798",


			"death": "33,209",


			"dailycount": "1,029",


			"dailydeath": "9",
			"hospitalizationsever": "152,876",


			"date": "9/5",
			"info": "through 12:00pm 9/4/2022",

			"testingaverage": "38,182",

			"peopletested": "12,487,662",

			"positivity": "7.76%",

			"hospitalizations": "777",
			"datehospitalizations": "9/2"

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



