$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,456,407",


			"death": "33,603",

			"dailycount": "1,682",


			"dailydeath": "6",
			"hospitalizationsever": "155,902",


			"date": "9/30",
			"info": "through 12:00pm 9/29/2022",

			"testingaverage": "34,546",

			"peopletested": "12,565,058",

			"positivity": "4.33%",

			"hospitalizations": "496",
			"datehospitalizations": "9/28"

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



