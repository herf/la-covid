$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,513,008",


			"death": "34,091",

			"dailycount": "1,949",


			"dailydeath": "10",
			"hospitalizationsever": "159,468",


			"date": "11/17",
			"info": "through 12:00pm 11/16/2022",

			"testingaverage": "27,135",

			"peopletested": "12,690,042",

			"positivity": "5.61%",

			"hospitalizations": "648",
			"datehospitalizations": "11/16"

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



