$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,363,706",


			"death": "32,961",


			"dailycount": "2,535",


			"dailydeath": "13",
			"hospitalizationsever": "149,969",


			"date": "8/16",
			"info": "through 12:00pm 8/15/2022",

			"testingaverage": "38,135",

			"peopletested": "12,407,063",

			"positivity": "11.67%",

			"hospitalizations": "1,022",
			"datehospitalizations": "8/12"

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



