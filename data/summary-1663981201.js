$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,447,249",


			"death": "33,532",

			"dailycount": "1,641",


			"dailydeath": "13",
			"hospitalizationsever": "155,289",


			"date": "9/23",
			"info": "through 12:00pm 9/22/2022",

			"testingaverage": "35,888",

			"peopletested": "12,544,177",

			"positivity": "4.63%",

			"hospitalizations": "575",
			"datehospitalizations": "9/22"

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



