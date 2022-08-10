$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,342,851",


			"death": "32,888",


			"dailycount": "4,514",


			"dailydeath": "19",
			"hospitalizationsever": "149,214",


			"date": "8/10",
			"info": "through 12:00pm 8/9/2022",

			"testingaverage": "39,025",

			"peopletested": "12,382,867",

			"positivity": "12.98%",

			"hospitalizations": "1,105",
			"datehospitalizations": "8/8"

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



