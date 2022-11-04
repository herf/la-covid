$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,491,716",


			"death": "33,992",

			"dailycount": "1,332",


			"dailydeath": "7",
			"hospitalizationsever": "158,285",


			"date": "11/03",
			"info": "through 12:00pm 11/02/2022",

			"testingaverage": "27,176",

			"peopletested": "12,651,246",

			"positivity": "3.85%",

			"hospitalizations": "419",
			"datehospitalizations": "11/02"

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



