$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,552,019",


			"death": "34,213",

			"dailycount": "4,394",


			"dailydeath": "14",
			"hospitalizationsever": "161,042",


			"date": "12/2",
			"info": "through 12:00pm 12/1/2022",

			"testingaverage": "20,676",

			"peopletested": "12,736,245",

			"positivity": "11.91%",

			"hospitalizations": "1,171",
			"datehospitalizations": "12/1"

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



