$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,570,525",


			"death": "34,263",

			"dailycount": "5,051",


			"dailydeath": "12",
			"hospitalizationsever": "162,219",


			"date": "12/7",
			"info": "through 12:00pm 12/6/2022",

			"testingaverage": "28,846",

			"peopletested": "12,752,433",

			"positivity": "12.58%",

			"hospitalizations": "1,293",
			"datehospitalizations": "12/6"

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



