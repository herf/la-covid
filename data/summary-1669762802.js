$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,538,009",


			"death": "34,179",

			"dailycount": "2,370",


			"dailydeath": "9",
			"hospitalizationsever": "160,206",


			"date": "11/29",
			"info": "through 12:00pm 11/28/2022",

			"testingaverage": "26,170",

			"peopletested": "12,723,035",

			"positivity": "9.22%",

			"hospitalizations": "1,040",
			"datehospitalizations": "11/28"

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



