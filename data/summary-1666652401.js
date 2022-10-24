$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,481,103",


			"death": "33,915",

			"dailycount": "523",


			"dailydeath": "7",
			"hospitalizationsever": "157,443",


			"date": "10/24",
			"info": "through 12:00pm 10/23/2022",

			"testingaverage": "27,199",

			"peopletested": "12,626,416",

			"positivity": "3.61%",

			"hospitalizations": "392",
			"datehospitalizations": "10/21"

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



