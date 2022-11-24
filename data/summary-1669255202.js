$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,524,896",


			"death": "34,135",

			"dailycount": "3,077",


			"dailydeath": "10",
			"hospitalizationsever": "160,189",


			"date": "11/23",
			"info": "through 12:00pm 11/22/2022",

			"testingaverage": "28,214",

			"peopletested": "12,706,811",

			"positivity": "6.47%",

			"hospitalizations": "794 ",
			"datehospitalizations": "11/22"

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



