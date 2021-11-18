$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,514,282",


			"death": "26,923",


			"dailycount": "1,284",



			"dailydeath": "22",

			"date": "11/17",
			"info": "through 6:00pm 11/16/2021",


			"testingaverage": "157,226",


			"peopletested": "9,279,147",

			"positivity": "0.93%",

			"hospitalizations": "640",
			"datehospitalizations": "11/15"

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



