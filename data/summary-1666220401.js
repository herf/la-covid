$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,474,708",


			"death": "33,862",

			"dailycount": "741",


			"dailydeath": "13",
			"hospitalizationsever": "157,418",


			"date": "10/19",
			"info": "through 12:00pm 10/18/2022",

			"testingaverage": "27,376",

			"peopletested": "12,611,913",

			"positivity": "3.91%",

			"hospitalizations": "379",
			"datehospitalizations": "10/18"

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



