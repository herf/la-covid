$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,245,259",


			"death": "32,584",


			"dailycount": "8,691",


			"dailydeath": "18",
			"hospitalizationsever": "144,895",


			"date": "07/21",
			"info": "through 12:00pm 07/20/2022",

			"testingaverage": "47,414",

			"peopletested": "12,290,964",

			"positivity": "15.73%",

			"hospitalizations": "1,329",
			"datehospitalizations": "07/20"

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



