$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,488,288",


			"death": "33,975",

			"dailycount": "593",


			"dailydeath": "7",
			"hospitalizationsever": "158,078",


			"date": "10/31",
			"info": "through 12:00pm 10/30/2022",

			"testingaverage": "27,148",

			"peopletested": "12,644,060",

			"positivity": "3.71%",

			"hospitalizations": "365",
			"datehospitalizations": "10/28"

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



