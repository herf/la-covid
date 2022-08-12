$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,347,143",


			"death": "32,903",


			"dailycount": "4,345",


			"dailydeath": "15",
			"hospitalizationsever": "149,419",


			"date": "8/11",
			"info": "through 12:00pm 8/10/2022",

			"testingaverage": "38,479",

			"peopletested": "12,387,187",

			"positivity": "12.93%",

			"hospitalizations": "1,098",
			"datehospitalizations": "8/10"

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



