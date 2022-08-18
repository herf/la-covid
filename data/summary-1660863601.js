$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,371,673",


			"death": "32,991",


			"dailycount": "3,379",


			"dailydeath": "16",
			"hospitalizationsever": "150,483",


			"date": "8/18",
			"info": "through 12:00pm 8/17/2022",

			"testingaverage": "38,947",

			"peopletested": "12,417,875",

			"positivity": "11.07%",

			"hospitalizations": "996",
			"datehospitalizations": "8/17"

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



