$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,433,754",


			"death": "33,414",

			"dailycount": "1,777",


			"dailydeath": "16",
			"hospitalizationsever": "154,568",


			"date": "9/14",
			"info": "through 12:00pm 9/13/2022",

			"testingaverage": "32,214",

			"peopletested": "12,514,094",

			"positivity": "6.12%",

			"hospitalizations": "717",
			"datehospitalizations": "9/13"

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



