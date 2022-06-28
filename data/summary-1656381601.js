$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,102,110",


			"death": "32,308",


			"dailycount": "3,110",


			"dailydeath": "3",
			"hospitalizationsever": "141,379",


			"date": "06/27",
			"info": "through 12:00pm 06/26/2022",

			"testingaverage": "47,464",

			"peopletested": "12,164,174",

			"positivity": "10.41%",

			"hospitalizations": "762",
			"datehospitalizations": "06/24"

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



