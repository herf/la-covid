$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,405,184",


			"death": "33,138",


			"dailycount": "2,090",


			"dailydeath": "14",
			"hospitalizationsever": "152,016",


			"date": "8/30",
			"info": "through 12:00pm 8/29/2022",

			"testingaverage": "38,083",

			"peopletested": "12,464,428",

			"positivity": "8.75%",

			"hospitalizations": "841",
			"datehospitalizations": "8/29"

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



