$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,515,225",


			"death": "34,098",

			"dailycount": "2,249",


			"dailydeath": "8",
			"hospitalizationsever": "159,478",


			"date": "11/18",
			"info": "through 12:00pm 11/17/2022",

			"testingaverage": "26,655",

			"peopletested": "12,693,195",

			"positivity": "5.74%",

			"hospitalizations": "666",
			"datehospitalizations": "11/17"

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



