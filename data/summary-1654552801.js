$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,004,975",


			"death": "32,168",


			"dailycount": "4,282",


			"dailydeath": "5",


			"date": "06/06",
			"info": "through 12:00pm 06/05/2022",

			"testingaverage": "104,999",

			"peopletested": "12,051,802",

			"positivity": "4.29%",

			"hospitalizations": "530",
			"datehospitalizations": "06/05"

				}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
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



